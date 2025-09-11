const mongodb = require("../config/db.js");
const ObjectId = require("mongodb").ObjectId;

// Get All Spells
const getAllSpells = async (req, res) => {
  res.send("Getting all the Spells");
};

//Get One Spell
const getSpell = async (req, res) => {
  res.send("Getting a Spell");
};

//Delete Spell
const deleteSpell = async (req, res) => {
  res.send("you've deleted a spell");
};

// update a spell
const updateSpell = async (req, res) => {
  res.send("you've updated a spell");
};

module.exports = { getAllSpells, getSpell, deleteSpell, updateSpell };
