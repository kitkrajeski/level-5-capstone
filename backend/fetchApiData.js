const axios = require("axios");
const mongoose = require("mongoose");
const House = require("./models/house");

// Connect to MongoDB
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

const fetchAndSaveHouses = async () => {
  for (let i = 1; i <= 444; i++) {
    // Adjust the range as needed
    try {
      const response = await axios.get(
        `https://anapioficeandfire.com/api/houses/${i}`
      );
      const houseData = response.data;

      const newHouse = new House({
        url: houseData.url,
        name: houseData.name,
        region: houseData.region,
        coatOfArms: houseData.coatOfArms,
        words: houseData.words,
        titles: houseData.titles,
        seats: houseData.seats,
        currentLord: houseData.currentLord,
        heir: houseData.heir,
        overlord: houseData.overlord,
        founded: houseData.founded,
        founder: houseData.founder,
        diedOut: houseData.diedOut,
        ancestralWeapons: houseData.ancestralWeapons,
        cadetBranches: houseData.cadetBranches,
        swornMembers: houseData.swornMembers,
        crest: houseData.crest,
      });

      await newHouse.save();
      console.log(`Saved house ${houseData.name}`);
    } catch (error) {
      console.error(`Error fetching or saving house with ID ${i}`, error);
    }
  }
};

fetchAndSaveHouses().then(() => {
  console.log("Finished fetching and saving houses");
  mongoose.disconnect();
});
