/* Template
  {
    name: "",
    level: ,
    plane: ,
    mod: ,
    manaCost: ,
    castTime: ,
    range: ,
    type: ,
    target: ,
    components: ,
    duration: ,
    description: ,
  },
    */

// Arcane Spells
const arcane = [
  {
    name: "Arcane Blast",
    level: 0,
    plane: "Arcane",
    mod: "",
    manaCost: 0,
    castTime: "Action",
    range: "60ft",
    type: "Energy",
    target: "single target",
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
    description: `<p style="font-size: smaller;">You are able to manipulate things with your mind. Choose one of the following affects to have happen when to cast the spell:<br/><br/>- You purge an area that can fit within 1 cubic foot or 10 square feet of all filth and debris, it can clean a creature's body and clothing.<br/><br/>- You wave your hand over inorganic material and form it into a ball that can fit into your hand. The ball has a thin layer of magic that holds it together so you can make a ball out of liquid as well.<br/><br/>- You cause an unlocked door or window you can swee within range to open or close. Or you cause a tiny object to move up to 5 feet.<br/>- You create a noise or a voice saying up to 5 words at a point within range.</p>`,
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
    target: "single target",
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
  {
    name: "Return",
    level: 0,
    plane: "Arcane",
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
    name: "Minor Missle",
    level: 1,
    plane: "Arcane",
    mod: "(charge)",
    manaCost: 1,
    castTime: "Action",
    range: "120 feet",
    type: "Energy",
    target: "single target",
    components: "V,S",
    duration: "instantaneous",
    description: `<p style="font-size: smaller;">You create a missile of force and launch it toward a creature within range. Make an Arcane Attack, on a hit you deal (5)2d4 + your Mind Score force damage. <br /> <br />

Empowering: When you empower this spell, you increase the damage by (3)1d4 for each mana used to empower the spell. <br /> <br />

Charge: When you charge this spell you must maintain concentration on the spell until you release it. You can charge the spell for a number of rounds equal to half your Mind Score, and for each round you charge the spell you must expend the necessary mana to cast the spell, and the damage increases by (7)3d4 + your Mind Score each round.</p>`,
  },
  {
    name: "Picture",
    level: 1,
    plane: "Arcane",
    mod: "",
    manaCost: 1,
    castTime: "1 Minute",
    range: "Touch",
    type: "Utility",
    target: "single target",
    components: "S,M (ink)",
    duration: "Instantaneous",
    description: `Taking the paint, you pour it over the paper/canvas/skin, when you touch the paper/canvas/skin while focusing on a memory or image that you have seen, the paint creates the thing that you imagined and leaves a lasting picture on the paper/canvas/skin. <br /> <br />

This spell can be used with magical ink to create moving pictures of a memory, or magical tattoos that can be used.`,
  },
  {
    name: "Psychic Shard",
    level: 1,
    plane: "Arcane",
    mod: "",
    manaCost: 1,
    castTime: "Action",
    range: "30 feet",
    type: "Energy, Debuff",
    target: "single target",
    components: "V,S",
    duration: "Instantaneous",
    description: `You drive a shard of pure psychic energy into a creatures mind within range. Make an Arcane Attack, on a hit you deal (7)2d6 + your Mind Score psychic damage. The creature has disadvantage on their next Mind Save before the beginning of your next turn.<br /> <br />

Empowering: When you empower this spell, you increase the damage by (3)1d6 for each mana used to empower the spell.`,
  },
];
const dragon = [];
const space = [];
const time = [];
const ethereal = [];
const eldritch = [];
const material = [];

// Faith Spells
const heavens = [];
const judgement = [];
const abyss = [];
const divine = [];
const everWar = [];
const various = [];

// Nature Spells
const air = [];
const earth = [];
const fire = [];
const water = [];
const nature = [];
const shadowLands = [];

let aura = [];
let featuredSpell;
let displayedSpell = 0;
let currentArray;

let spellName = document.getElementById("spellName");
let spellLevel = document.getElementById("spellLevel");
let spellPlane = document.getElementById("spellPlane");
let spellMod = document.getElementById("spellMod");
let spellCost = document.getElementById("spellCost");
let spellCastTime = document.getElementById("spellCastTime");
let spellRange = document.getElementById("spellRange");
let spellType = document.getElementById("spellType");
let spellComponents = document.getElementById("spellComponents");
let spellDuration = document.getElementById("spellDuration");
let spellDescription = document.getElementById("spellDescription");
let arcaneList = document.getElementById("arcaneShelf");

let flipped = false;
let sameCard = '';

// Shelf Functions

function generateShelf() {
  let length = arcane.length;
  hideFilter();
  for (let i = 0; i <= length; i++) {
    let p = document.createElement("p");
    p.innerText = `${arcane[i].plane} Plane --- || --- ${arcane[i].name} --- || --- Level: ${arcane[i].level}`;
    p.value = i;
    p.addEventListener("click", () => {
      displayedSpell = p.value
      p.setAttribute('value', 'p.value');
      currentArray = "arcane";
      if (sameCard === '' || sameCard != p.value){
        flipCard();
        sameCard = p.value
      } else {
        resetCard()
        sameCard = ''
      }
      
    });
    arcaneList.appendChild(p);
  }
}

// Card & Display Functions

function displaySpell() {
  if (currentArray === "arcane") {
    spellName.innerText = arcane[displayedSpell].name;
    spellLevel.innerText = `Level ${arcane[displayedSpell].level}`;
    spellPlane.innerText = arcane[displayedSpell].plane;
    spellMod.innerText = arcane[displayedSpell].mod;
    spellCost.innerText = `Mana Cost: ${arcane[displayedSpell].manaCost}`;
    spellCastTime.innerText = `Cast Time: ${arcane[displayedSpell].castTime}`;
    spellRange.innerText = `Range: ${arcane[displayedSpell].range}`;
    spellType.innerText = `Type: ${arcane[displayedSpell].type}`;
    spellComponents.innerText = `Components: ${arcane[displayedSpell].components}`;
    spellDuration.innerText = `Duration: ${arcane[displayedSpell].duration}`;
    spellDescription.innerHTML = arcane[displayedSpell].description;
  }
  if (currentArray === "dragon") {
    spellName.innerText = dragon[displayedSpell].name;
    spellLevel.innerText = `Level: ${arcane[displayedSpell].level}`;
    spellPlane.innerText = dragon[displayedSpell].plane;
    spellMod.innerText = dragon[displayedSpell].mod;
    spellCost.innerText = `Mana Cost: ${dragon[displayedSpell].manaCost}`;
    spellCastTime.innerText = `Cast Time: ${dragon[displayedSpell].castTime}`;
    spellRange.innerText = `Range: ${dragon[displayedSpell].range}`;
    spellType.innerText = `Type: ${dragon[displayedSpell].type}`;
    spellComponents.innerText = `Components: ${dragon[displayedSpell].components}`;
    spellDuration.innerText = `Duration: ${dragon[displayedSpell].duration}`;
    spellDescription.innerHTML = dragon[displayedSpell].description;
  }
}

function flipCard() {
let card = document.querySelector(".frontface");
  let backFace = document.querySelector(".backface");

  if ((flipped = false)) {
      card.classList.remove("flip");
      backFace.classList.add("flip");
      flipped = true;
      displaySpell();
  } else {
    card.classList.add("flip");
    backFace.classList.remove("flip");
    setTimeout(() => {
      card.classList.remove("flip");
      backFace.classList.add("flip");
      displaySpell();
    }, 500);
  }
  
}

function resetCard() {
  let card = document.querySelector(".frontface");
  let backFace = document.querySelector(".backface");

      card.classList.add("flip");
    backFace.classList.remove("flip");
    sameCard = "";
}

// Filter Functions

function showFilter() {
  document.querySelector(".filter").style.display = "";
  document.querySelector("#showFltr").style.display = "none";
  document.querySelector("#hideFltr").style.display = "";
}

function hideFilter() {
  document.querySelector(".filter").style.display = "none";
  document.querySelector("#hideFltr").style.display = "none";
  document.querySelector("#showFltr").style.display = "";
}

displaySpell();
generateShelf();
