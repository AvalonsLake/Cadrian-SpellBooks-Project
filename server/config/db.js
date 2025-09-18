require("dotenv").config();
const MongoClient = require("mongodb").MongoClient;

let _db;

const initDb = (callback) => {
  if (_db) {
    console.log("Db is already initialized!");
    return callback(null, _db);
  }
  MongoClient.connect(process.env.MONGO_URI)
    .then((client) => {
      _db = client;
      callback(null, _db);
    })
    .catch((err) => {
      callback(err);
    });
};

const getDb = () => {
  if (!_db) {
    throw Error("Db not initialized");
  }
  return _db;
};


const Post = require("../models/spells");

function insertData() {
  Post.insertMany([
    {
    name: "Arcane Blast",
    level: 0,
    plane: "Arcane",
    mod: "",
    manaCost: 0,
    castTime: "Action",
    range: "60ft",
    type: "Energy",
    target: "single",
    components: "V,S",
    duration: "Instantaneous",
    description:
      "You create a ball of arcane energy in your hands and fire it at a creature you can see within range. Make an *Arcane Attack*, on a hit you deal 1d6 + *Mind Score* of force damage.",
  },
  {
    name: "Arcane Hand",
    level: 0,
    manaCost: 0,
    plane: "Arcane",
    mod: "",
    castTime: "Action",
    range: "60ft",
    type: "Utility",
    target: "",
    components: "S",
    duration: "5 Minutes",
    description:
      "You create a spectral hand that you can control with your mind by using your bonus action each turn (it has a flying speed equal to your movement speed). It can lift up to 5 pounds, and if it is used to attack a creature, make an *Arcane Attack* as a bonus action, on a hit the target takes damage equal to your *Mind Score*.",
  },
  {
    name: "Manipulate",
    level: 0,
    plane: "Arcane",
    mod: "",
    manaCost: 0,
    castTime: "Action",
    range: "30ft",
    type: "Utility",
    target: "",
    components: "V,S",
    duration: "Instantaneous",
    description: `<p style="margin-top: 55%;">You are able to manipulate things with your mind. Choose one of the following affects to have happen when to cast the spell:<br/><br/>
    - You purge an area that can fit within 1 cubic foot or 10 square feet of all filth and debris, it can clean a creature's body and clothing.<br/><br/>
    - You wave your hand over inorganic material and form it into a ball that can fit into your hand. The ball has a thin layer of magic that holds it together so you can make a ball out of liquid as well.<br/><br/>
    - You cause an unlocked door or window you can swee within range to open or close. Or you cause a tiny object to move up to 5 feet.<br/><br/>
    - You create a noise or a voice saying up to 5 words at a point within range.</p>`,
  },
  {
    name: "Return",
    level: 0,
    plane: "Space",
    mod: "",
    manaCost: 0,
    castTime: "Action",
    range: "60ft",
    type: "Utility",
    target: "",
    components: "S",
    duration: "Instantaneous",
    description:
      "You stretch out your hand towards an object that you can see within range, that is not being worn or carried, and is no heavier than 5 pounds, and it instantly appears in your hand.",
  },
  {
    name: "Siphon",
    level: 0,
    plane: "Eldritch",
    mod: "",
    manaCost: 0,
    castTime: "Action",
    range: "Touch",
    type: "Utility",
    target: "single",
    components: "S",
    duration: "Instantaneous",
    description:
      "You touch a willing creature and either give or receive mana from them, but it can not exceed a creature's maximum number of mana (this doesn't count toward expending mana for focusing purposes).",
  },
  {
    name: "Stabalize",
    level: 0,
    plane: "Arcane",
    mod: "",
    manaCost: 0,
    castTime: "Action",
    range: "Self",
    type: "Utility",
    target: "",
    components: "V,S",
    duration: "1 Hour",
    description:
      "You stabilize the ambient magic in the area to make it easier to cast ritual spells. The next ritual spell that is cast within 15 feet of you has its casting time reduced by a number of rounds equal to your *Mind Score*. If a spell is cast while in the area (that isn’t a ritual being performed), the effects of this spell are lost due to the ambient magic being destabilized.",
  },
  ]);
}

insertData();

module.exports = { getDb, initDb };
