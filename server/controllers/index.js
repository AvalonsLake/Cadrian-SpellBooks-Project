const mongodb = require("../config/db");
const ObjectId = require("mongodb").ObjectId;
const spell = require("../models/spells");

// Add spells
const addSpell = async (req, res) => {
  try {
    const spell = {
      name: req.body.name,
      level: req.body.level,
      plane: req.body.plane,
      mod: req.body.mod,
      manaCost: req.body.manaCost,
      castTime: req.body.castTime,
      range: req.body.range,
      type: req.body.type,
      target: req.body.target,
      components: req.body.components,
      duration: req.body.duration,
      description: req.body.description,
    };

    const response = await mongodb
      .getDb()
      .db()
      .collection("arcanes")
      .insertOne(spell);
    if (response.acknowledged) {
      res.status(201).json(response);
    } else {
      res
        .status(500)
        .json(
          response.error || "Some error occurred while creating the student"
        );
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

// Get All Spells
const getAllSpells = async (req, res) => {
  try {
    const result = await mongodb.getDb().db().collection("arcanes").find();
    result.toArray().then((lists) => {
      res.setHeader("Content-Type", "application/json");
      res.status(200).json(lists);
    });
  } catch (error) {
    res.status(500).json(error + "it broke in GetAllSpells");
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
      .collection("arcanes")
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

module.exports = {
  getAllSpells,
  getSpell,
  deleteSpell,
  updateSpell,
  addSpell,
};
