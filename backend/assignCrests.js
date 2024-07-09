const fs = require("fs");
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "..", ".env") });
const mongoose = require("mongoose");
const House = require("./models/house");
const { prompt } = require("./prompts.js");

mongoose
  .connect(
    "mongodb+srv://asoiaf-test:8Gp6hqWZJ1DPVS8T@vschool.zvyzn1q.mongodb.net/asoiaf?retryWrites=true&w=majority&appName=vSchool",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB", err);
  });

const crestsDir = path.join(__dirname, "assets", "crests");

const assignCrests = async () => {
  prompt();
  // const files = fs.readdirSync(crestsDir);
  // for (const file of files) {
  //   const houseNamePart = file
  //     .replace(/^[0-9]+px-/, "")
  //     .replace(/_/g, " ")
  //     //   .replace(/\.[^/.]+$/, "")
  //     .replace(/\.(svg|png|webp|svg.png)$/, "")
  //     .toLowerCase();
  //   const keywords = houseNamePart.split(" ");
  //   // const crestPath = `assets/crests/${file}`;
  //   try {
  //     // const house = await House.findOneAndUpdate(
  //     //     {name: houseName},
  //     //     {crest: crestPath},
  //     //     {new: true}
  //     // );
  //     // if (updatedHouse) {
  //     //     console.log(`Updated cres for ${houseName}`);
  //     const house = await House.findOne({
  //       name: new RegExp(
  //         keywords.map((keyword) => `(?=.*${keyword})`).join(""),
  //         "i"
  //       ),
  //     });
  //     if (house) {
  //       const crestPath = path.join(file);
  //       house.crest = crestPath;
  //       await house.save();
  //       console.log(`Assigned crest to ${house.name}`);
  //     } else {
  //       console.log(`House ${keywords.join(" ")} not found`);
  //     }
  //   } catch (error) {
  //     console.error(`error updating crest for ${keywords.join(" ")}`);
  //   }
  // }
};

assignCrests().then(() => {
  console.log("Finished assigning crests");
  mongoose.disconnect();
});
