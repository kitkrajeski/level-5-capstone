const express = require("express");
const app = express();
const morgan = require("morgan");
const mongoose = require("mongoose");
const path = require("path");
const { expressjwt } = require("express-jwt");
require("dotenv").config();

app.use(express.json());
app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "assets")));

app.get("/api/images/:filename", (req, res) => {
  res.sendFile(path.join(__dirname, `assets/crests/${req.params.filename}`));
});

// mongoose.connect('mongodb+srv://kkrajeski:6KyKuQm8X2An4OUr@vschool.zvyzn1q.mongodb.net/?retryWrites=true&w=majority&appName=vSchool')
//     .then(() => console.log('connected to mongodb'))
//     .catch(err => console.log(err));

mongoose
  .connect(
    "mongodb+srv://asoiaf-test:8Gp6hqWZJ1DPVS8T@vschool.zvyzn1q.mongodb.net/asoiaf?retryWrites=true&w=majority&appName=vSchool"
  )
  .then(() => console.log("connected to mongodb"))
  .catch((err) => console.log(err));

app.use("/auth", require("./routes/authRouter.js"));
app.use(
  "/api",
  expressjwt({ secret: process.env.SECRET, algorithms: ["HS256"] })
);
app.use("/api/houses", require("./routes/housesRouter"));
app.use("/api/profile", require("./routes/userHouseRouter.js"));

app.use((err, req, res, next) => {
  console.log(err);
  if (err.name === "UnauthorizedError") {
    res.status(err.status);
  }
  return res.send({ errMsg: err.message });
});

app.listen(9000, () => {
  console.log("app is a go bro");
});
