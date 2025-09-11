const router = require("express").Router();
const myController = require("../controllers/index");

router.get("/", myController.getSpell);

router.get("/getAll", myController.getAllSpells);

router.get("/update", myController.updateSpell);

router.get("/delete", myController.deleteSpell);

module.exports = router;
