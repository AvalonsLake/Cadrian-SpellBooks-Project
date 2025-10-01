const router = require("express").Router();
const myController = require("../controllers/index");
const spell = require("../models/spells");

router.get("/getAllSpell", myController.getAllSpells);

router.patch("/update/:id", myController.updateSpell);

router.delete("/delete/:id", myController.deleteSpell);

router.post("/addSpell", myController.addSpell);

router.get("/getOneSpell/:id", myController.getSpell);

module.exports = router;
