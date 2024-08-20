var profile = require("../../public/assets/jsons/profile.json");

const getProfile = (req, res) => {
  res.send(profile);
};

const updateProfile = (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.send("Profile details updated successfully.");
};

module.exports = {
  getProfile,
  updateProfile,
};
