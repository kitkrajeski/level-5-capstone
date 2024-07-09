const express = require("express");
const userHouseRouter = express.Router();
const House = require("../models/house");
const UserHouse = require("../models/userHouse");

userHouseRouter.get("/houses", async (req, res, next) => {
  try {
    // console.log(req.auth._id);
    // console.log(req.auth._id);
    // console.log(req.body.user);
    const userHouses = await UserHouse.find({
      user: req.auth._id,
    })
      .populate("house")
      .exec();
    res.status(200).send(userHouses);
  } catch (error) {
    console.log(error);
  }
});
// profileRouter.get("/user/:userId", async (req, res, next) => {
//   try {
//     console.log(req.params);
//     userId.toString();
//     // req.body.username = req.auth.username;
//     // const newUserHouse = new userHouse({ ...req.body, user: req.auth._id });
//     // await newUserHouse.save();
//     // res.status(201).send(newUserHouse);
//     req.body.user = req.auth._id;
//     const house = await House.findOne({ name: req.body.name });
//     if (!house) {
//       return res.status(404).send({ error: "house not found" });
//     }

userHouseRouter.post("/", async (req, res, next) => {
  try {
    const house = await House.findOne({ name: req.body.house });
    if (!house) {
      return res.status(404).send({ error: "house not found" });
    }
    const userHouse = await UserHouse.findOne({ house: house._id });
    if (!!userHouse) {
      return res.status(404).send({ error: "house already in favorites" });
    }

    const newUserHouse = new UserHouse({
      house: house._id,
      user: req.auth._id,
    });
    console.log(newUserHouse);
    const savedHouse = await newUserHouse
      .save()
      .then((house) => house.populate("house"));
    // await newUserHouse.populate("user", "username").exec();
    res.status(201).send(savedHouse);
  } catch (error) {
    console.log(error);
  }
});

userHouseRouter.delete("/:id", async (req, res, next) => {
  const userHouse = await UserHouse.findByIdAndDelete(req.params.id);
  res.status(204).send(req.params.id);
});

module.exports = userHouseRouter;
