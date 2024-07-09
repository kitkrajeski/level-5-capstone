const express = require("express");
const authRouter = express.Router();
const User = require("../models/user.js");
const jwt = require("jsonwebtoken");

authRouter.get("/", (req, res) => {
  res.status(200).send("sup");
});

authRouter.post("/signup", (req, res, next) => {
  const { username, password } = req.body;

  User.findOne({ username })
    .then((existingUser) => {
      if (existingUser) {
        res.status(409);
        return next(new Error("That username is already taken."));
      }

      const newUser = new User({ username, password });

      newUser
        .save()
        .then((savedUser) => {
          const token = jwt.sign(
            savedUser.withoutPassword(),
            process.env.SECRET
          );
          return res
            .status(201)
            .json({ token, user: savedUser.withoutPassword() });
        })
        .catch((err) => next(err));
    })
    .catch((err) => next(err));
});

authRouter.post("/login", async (req, res, next) => {
  try {
    const user = await User.findOne({
      username: req.body.username.toLowerCase(),
    });
    if (!user) {
      res.status(403);
      return next(new Error("Username is incorrect"));
    }

    const passwordCheck = await user.checkPassword(req.body.password);
    if (!passwordCheck) {
      res.status(403);
      return next(new Error("Password is incorrect"));
    }

    const token = jwt.sign(user.withoutPassword(), process.env.SECRET);
    return res.status(201).send({ token, user: user.withoutPassword() });
  } catch (error) {
    res.status(500);
    return next(error);
  }
});

module.exports = authRouter;
