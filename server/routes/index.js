const router = require("express").Router();
const myController = require("../controllers/index");
const spell = require('../models/spells')


router.get("/getAllSpell", myController.getAllSpells);

router.get("/update", myController.updateSpell);

router.get("/delete", myController.deleteSpell);

router.get("/addSpell", async (req, res) => {
        try {
            const newSpell = new spell({
                name: "Manipulate(test)",
                level: 0,
                plane: "Arcane",
                mod: "Utility",
                manaCost: 0,
                castTime: "Action",
                range: "30ft",
                type: "Utility",
                target: "",
                components: "V,S",
                duration: "Instantaneous",
                description: `<p style=\"margin-top: 55%;\">You are able to manipulate things with your mind. Choose one of the following affects to have happen when to cast the spell:<br/><br/>\n    - You purge an area that can fit within 1 cubic foot or 10 square feet of all filth and debris, it can clean a creature's body and clothing.<br/><br/>\n    - You wave your hand over inorganic material and form it into a ball that can fit into your hand. The ball has a thin layer of magic that holds it together so you can make a ball out of liquid as well.<br/><br/>\n    - You cause an unlocked door or window you can swee within range to open or close. Or you cause a tiny object to move up to 5 feet.<br/><br/>\n    - You create a noise or a voice saying up to 5 words at a point within range.</p>`,
            });
            await spell.create(newSpell);
        } catch (error) {
      console.log(error);
        }
});

router.get("/getOneSpell/:id", myController.getSpell);

module.exports = router;
