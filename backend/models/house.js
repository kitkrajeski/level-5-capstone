const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const houseSchema = new mongoose.Schema({
  url: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  region: {
    type: String,
    required: false,
  },
  coatOfArms: {
    type: String,
    required: false,
  },
  words: {
    type: String,
    required: false,
  },
  titles: {
    type: [String],
    required: false,
  },
  seats: {
    type: [String],
    required: false,
  },
  currentLord: {
    type: String,
    required: false,
  },
  heir: {
    type: String,
    required: false,
  },
  overlord: {
    type: String,
    required: false,
  },
  founded: {
    type: String,
    required: false,
  },
  founder: {
    type: String,
    required: false,
  },
  diedOut: {
    type: String,
    required: false,
  },
  ancestralWeapons: {
    type: [String],
    required: false,
  },
  cadetBranches: {
    type: [String],
    required: false,
  },
  swornMembers: {
    type: [String],
    required: false,
  },
  crest: {
    type: String,
    required: false,
  },
});

module.exports = mongoose.model("House", houseSchema);
