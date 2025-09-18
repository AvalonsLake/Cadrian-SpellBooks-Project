const mongodb = require("../config/db");
const ObjectId = require("mongodb").ObjectId;

// Get All Spells
const getAllSpells = async (req, res) => {
  try {
    const result = await mongodb.getDb().db().collection("arcane").find();
    result.toArray().then((lists) => {
      res.setHeader("Content-Type", "application/json");
      res.status(200).json(lists);
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

//Get One Spell
const getSpell = async (req, res) => {
  // res.send("You're getting one spell");
  try {
    const userId = new ObjectId(req.params.id);
    const result = await mongodb
      .getDb()
      .db()
      .collection("arcane")
      .find({ _id: userId });
    result.toArray().then((lists) => {
      res.setHeader("Content-Type", "application/json");
      res.status(200).json(lists[0]);
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

//Delete Spell
const deleteSpell = async (req, res) => {
  res.send("you've deleted a spell");
};

// update a spell
const updateSpell = async (req, res) => {
  res.send("you've updated a spell");
};

const addSpell = async (req, res) => {
  res.send("you've added a spell");
};

module.exports = { getAllSpells, getSpell, deleteSpell, updateSpell, addSpell };
