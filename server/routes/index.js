const router = require("express").Router();
const myController = require("../controllers/index");

router.get("/getAllSpell", myController.getAllSpells);

router.get("/update", myController.updateSpell);

router.get("/delete", myController.deleteSpell);

router.get("/addSpell", myController.addSpell);

router.get("/getOneSpell/:id", myController.getSpell);

module.exports = router;
