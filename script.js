/* Template
  {
    name: "",
    level: ,
    plane: ,
    ritual: ,
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
    ritual: "",
    manaCost: 0,
    castTime: "Action",
    range: "60ft",
    type: "Energy",
    target: "Single Target",
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
    ritual: "",
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
    ritual: "",
    manaCost: 0,
    castTime: "Action",
    range: "30ft",
    type: "Utility",
    target: "",
    components: "V,S",
    duration: "Instantaneous",
    description:
      "You are able to manipulate things with your mind. Choose one of the following affects to have happen when to cast the spell:- You purge an area that can fit within 1 cubic foot or 10 square feet of all filth and debris, it can clean a creature's body and clothing.- You wave your hand over inorganic material and form it into a ball that can fit into your hand. The ball has a thin layer of magic that holds it together so you can make a ball out of liquid as well.- You cause an unlocked door or window you can swee within range to open or close. Or you cause a tiny object to move up to 5 feet.- You create a noise or a voice saying up to 5 words at a point within range.",
  },
  {
    name: "Siphon",
    level: 0,
    plane: "Eldritch",
    ritual: "",
    manaCost: 0,
    castTime: "Action",
    range: "Touch",
    type: "Utility",
    target: "Single Target",
    components: "S",
    duration: "Instantaneous",
    description:
      "You touch a willing creature and either give or receive mana from them, but it can not exceed a creature's maximum number of mana (this doesn't count toward expending mana for focusing purposes).",
  },
  {
    name: "Stabalize",
    level: 0,
    plane: "Arcane",
    ritual: "",
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
    ritual: "",
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
];
const dragon = [];
const space = [];
const time = [];
const ethereal = [];
const eldritch = [];

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

let spellName = document.getElementById("spellName");
let spellLevel = document.getElementById("spellLevel");
let spellPlane = document.getElementById("spellPlane");
let spellRitual = document.getElementById("spellRitual");
let spellCost = document.getElementById("spellCost");
let spellCastTime = document.getElementById("spellCastTime");
let spellRange = document.getElementById("spellRange");
let spellType = document.getElementById("spellType");
let spellComponents = document.getElementById("spellComponents");
let spellDuration = document.getElementById("spellDuration");
let spellDescription = document.getElementById("spellDescription");
let arcaneList = document.getElementById("arcaneShelf");

let flipped = false;
let sameCard;

function generateShelf() {
  let length = arcane.length;
  for (let i = 0; i <= length; i++) {
    let p = document.createElement("p");
    p.innerText = `${arcane[i].plane} Plane --- || --- ${arcane[i].name} --- || --- Level: ${arcane[i].level}`;
    p.value = i;
    p.addEventListener("click", () => {
      displayedSpell = p.value;
      flipCard();
    });
    arcaneList.appendChild(p);
  }
}

function displaySpell() {
  spellName.innerText = arcane[displayedSpell].name;
  spellLevel.innerText = `Level: ${arcane[displayedSpell].level}`;
  spellPlane.innerText = arcane[displayedSpell].plane;
  spellRitual.innerText = arcane[displayedSpell].ritual;
  spellCost.innerText = `Mana Cost: ${arcane[displayedSpell].manaCost}`;
  spellCastTime.innerText = `Cast Time: ${arcane[displayedSpell].castTime}`;
  spellRange.innerText = `Range: ${arcane[displayedSpell].range}`;
  spellType.innerText = `Type: ${arcane[displayedSpell].type}`;
  spellComponents.innerText = `Components: ${arcane[displayedSpell].components}`;
  spellDuration.innerText = `Duration: ${arcane[displayedSpell].duration}`;
  spellDescription.innerText = arcane[displayedSpell].description;
}

function flipCard() {
  let card = document.querySelector(".frontface");
  let backFace = document.querySelector(".backface");

  if (this === sameCard) {
    card.classList.add("flip");
    backFace.classList.remove("flip");
    sameCard = "";
  } else {
    if ((flipped = false)) {
      card.classList.remove("flip");
      backFace.classList.add("flip");
      flipped = true;
      displaySpell();
      sameCard = this;
    } else {
      card.classList.add("flip");
      backFace.classList.remove("flip");
      setTimeout(() => {
        card.classList.remove("flip");
        backFace.classList.add("flip");
        displaySpell();
      }, 800);
      sameCard = this;
    }
  }
}

// function unflip() {
//   let card = document.querySelector(".card");
//   let backFace = document.querySelector(".backface");

//   card.classList.add("flip");
//   backFace.classList.add("flip");
// }

displaySpell();
generateShelf();
