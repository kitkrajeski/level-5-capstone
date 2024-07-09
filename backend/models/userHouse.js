const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userHouseSchema = new mongoose.Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  house: {
    type: Schema.Types.ObjectId,
    ref: "House",
    required: true,
  },
  // crest
  // words
  // etc
  // customizations: {
  // crest
  // words
  // swords: [{name, imgUrl}],
  //
  // swornMembers: [],
});

module.exports = mongoose.model("UserHouse", userHouseSchema);
