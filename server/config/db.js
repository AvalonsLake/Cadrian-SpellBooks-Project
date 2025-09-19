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
    name: "Bind Object",
    level: 1,
    plane: "Eldritch",
    mod: "",
    manaCost: 1,
    castTime: "Bonus Action",
    range: "Touch",
    type: "Buff, Utility",
    target: "",
    components: "S,M(a small or tiny object)",
    duration: "Instantaneous",
    description: `<p style="margin-top:440px;">As a bonus action you can bind an object to your weapon giving it a bonus to damage, and changing the damage type. If the object binded is a natural weapon of a creature (claws, teeth, horns, ect.) then your bonus to damage is equal to one damage die of that creature. If the thing fused to your weapon is not a natural weapon it adds +1 to the damage rolls, and changes the damage type. You can also bind other weapons to your weapon to change the damage type, and deal bonus damage equal to one damage die of the weapon. The bound item breaks after hitting something a number of times equal to half your Mind Score (minimum of 1), or if the weapon is not on your character by the end of your turn.<br/><br/>

    You can bind any item that is 5 lbs. or less to your weapon, up to a total of 10lb. If the extra weight puts your weapon at or above 6 lb. your weapon becomes heavy, and two-handed, and loses its fast or thrown properties if it had them. Ammunition can only have items that are 1 lb. or less bound to them, and anything beyond the short range automatically misses.<br/><br/>

    Alternatively you are able to bind a small or tiny object you are holding to any solid surface, that isn’t a creature, or being worn or carried by one. The object can hold a number of pounds equal to 10 x your Mind Score, but the object itself can still break if it can’t support that much weight. The binding lasts for one minute, after which it falls to the ground, or until you use a bonus action to break the binding.</p>`,
  },
  {
    name: "Dragon Fists",
    level: 1,
    plane: "Dragon",
    mod: "",
    manaCost: 1,
    castTime: "Bonus Action",
    range: "Self",
    type: "Buff",
    target: "single",
    components: "S",
    duration: "1 Minute Concentration",
    description: `Your next unarmed strike that hits before the spell ends deals an additional (6)1d12 damage, choose from: acid, ice, fire, force, lightning, necrotic, poison, psychic, radiant, or thunder damage <br/> <br/>
    Empowering: When you empower this spell, you increase the damage by (6)1d12 for each mana used to empower the spell`,
  },
  ]);
}

insertData();

module.exports = { getDb, initDb };
