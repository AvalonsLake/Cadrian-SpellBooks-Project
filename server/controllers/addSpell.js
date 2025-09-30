const mongodb = require("../config/db");
const spell = require("../models/spells");

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

module.exports = addSpell;
