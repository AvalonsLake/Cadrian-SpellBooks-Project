const router = require("express").Router();
const myController = require("../controllers/index");

router.get("/getspell", myController.getSpell);

router.get("/getAllSpell", myController.getAllSpells);

router.get("/update", myController.updateSpell);

router.get("/delete", myController.deleteSpell);

router.get("/addSpell", myController.addSpell);

module.exports = router;
