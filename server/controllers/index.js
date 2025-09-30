const mongodb = require("../config/db");
const ObjectId = require("mongodb").ObjectId;
const spell = require("../models/spells");

// Create spells
const addSpell = async (req, res) => {
  console.log(req.body);
  try {
    const newSpell = {
      // name: req.body.name,
      // level: req.body.level,
      // plane: req.body.plane,
      // mod: req.body.mod,
      // manaCost: req.body.manaCost,
      // castTime: req.body.castTime,
      // range: req.body.range,
      // type: req.body.type,
      // target: req.body.target,
      // components: req.body.components,
      // duration: req.body.duration,
      // description: req.body.description,

      name: "Manipulate(test)",
      level: 0,
      plane: "Arcane",
      mod: "",
      manaCost: 0,
      castTime: "Action",
      range: "30ft",
      type: "Utility",
      target: "",
      components: "V,S",
      duration: "instantaneous",
      description:
        "You are able to manipulate things with your mind. Choose one of the following affects to have happen when to cast the spell:<br/><br/>- You purge an area that can fit within 1 cubic foot or 10 square feet of all filth and debris, it can clean a creature's body and clothing.<br/><br/>- You wave your hand over inorganic material and form it into a ball that can fit into your hand. The ball has a thin layer of magic that holds it together so you can make a ball out of liquid as well.<br/><br/>- You cause an unlocked door or window you can swee within range to open or close. Or you cause a tiny object to move up to 5 feet.<br/><br/>- You create a noise or a voice saying up to 5 words at a point within range.",
    };
    console.log(newSpell);

    const response = await mongodb
      .getDb()
      .db()
      .collection("arcanes")
      .insertOne(newSpell);

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
    console.log(error);
  }
};

// Read All Spells
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

//Read One Spell
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

// Update a spell
const updateSpell = async (req, res) => {
  try {
    const spellId = new ObjectId(req.params.id);
    const spell = {
      // name: req.body.name,
      // level: req.body.level,
      // plane: req.body.plane,
      // mod: req.body.mod,
      // manaCost: req.body.manaCost,
      // castTime: req.body.castTime,
      // range: req.body.range,
      // type: req.body.type,
      // target: req.body.target,
      // components: req.body.components,
      // duration: req.body.duration,
      // description: req.body.description,

      name: "Manipulate(updated)",
      level: 0,
      plane: "Arcane",
      mod: "",
      manaCost: 0,
      castTime: "Action",
      range: "30ft",
      type: "Utility",
      target: "",
      components: "V,S",
      duration: "instantaneous",
      description: "This Spell was Updated!!",
    };

    const response = await mongodb
      .getDb()
      .db()
      .collection("arcanes")
      .replaceOne({ _id: spellId }, spell);
    if (response.acknowledged) {
      res.status(204).json(response);
    } else {
      res
        .status(500)
        .json(
          response.error || "Some error ocurred while updating the student"
        );
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

//Delete Spell
const deleteSpell = async (req, res) => {
  try {
    const userId = new ObjectId(req.params.id);
    const response = await mongodb
      .getDb()
      .db()
      .collection("arcanes")
      .deleteOne({ _id: userId }, true);
    console.log(response);
    if (response.acknowledged) {
      res.status(200).send(response);
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  getAllSpells,
  getSpell,
  deleteSpell,
  updateSpell,
  addSpell,
};
