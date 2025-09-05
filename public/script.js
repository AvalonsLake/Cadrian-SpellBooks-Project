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
    description: `<p style="margin-top: 55%;">You are able to manipulate things with your mind. Choose one of the following affects to have happen when to cast the spell:<br/><br/>
    - You purge an area that can fit within 1 cubic foot or 10 square feet of all filth and debris, it can clean a creature's body and clothing.<br/><br/>
    - You wave your hand over inorganic material and form it into a ball that can fit into your hand. The ball has a thin layer of magic that holds it together so you can make a ball out of liquid as well.<br/><br/>
    - You cause an unlocked door or window you can swee within range to open or close. Or you cause a tiny object to move up to 5 feet.<br/><br/>
    - You create a noise or a voice saying up to 5 words at a point within range.</p>`,
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
    description: `<p style="margin-top:30%;">You create a missile of force and launch it toward a creature within range. Make an Arcane Attack, on a hit you deal (5)2d4 + your Mind Score force damage. <br /> <br />

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
  {
    name: "Retrieve Memory",
    level: 1,
    plane: "Arcane",
    mod: "",
    manaCost: 1,
    castTime: "Action",
    range: "Touch",
    type: "Utility",
    target: "single target",
    components: `S,M <br/>(a bowl of water or an object)`,
    duration: "Until Dismissed",
    description: `<p style="margin-top:30%;">You withdraw a memory from your mind, or the mind of a willing creature, and place it within a bowl of water, or bind it to an object. When you do this you give a password to trigger the memory. When the password is said while touching the water or object, the creature experiences the memory as if in the person’s body. Once the memory is done the creature returns to their own body. While a creature is in the memory their body becomes paralyzed until they return.<br/><br/>

Alternatively, instead of withdrawing a memory, you can give the creature advantage on skill checks used to recall details about their memories for 1 minute.</p>`,
  },
  {
    name: "Scribe",
    level: 1,
    plane: "Arcane",
    mod: "",
    manaCost: 1,
    castTime: "Bonus Action",
    range: "Touch",
    type: "Utility",
    target: "",
    components: `V,S,M <br/>(quill, ink and paper)`,
    duration: "1 Hour",
    description: `<p style="margin-top:100%;">You touch a quill and imbue it with magic so that it can move on its own. The quill writes whatever you tell it, or whatever is said within 60 feet of it. Alternatively you can spend the full hour to create a common technique scroll for something you are at least level 2 in (you only need to be proficient in armor or techniques to make a scroll for them). <br/><br/>

Empowering: When you empower this spell you increase the rarity of the technique scroll you scribe. You must be the correct level in the thing you are making a scroll for, and spend the necessary time and mana to make the scroll. The rarity, the level you must be in the thing you are making a scroll for, the time it takes and the mana needed are as follows:<br/><br/>

Common: must be level 2, spend 1 hour and 1 mana.<br/>
Uncommon: must be level 4, spend 2 hours and 3 mana.<br/>
Rare: must be level 6, spend 4 hours and 5 mana.<br/>
Epic: must be level 8, spend 6 hours and 7 mana.<br/>
Legendary: must be level 10, spend 8 hours and 9 mana.<br/></p>`,
  },
  {
    name: "Speed Read",
    level: 1,
    plane: "Arcane",
    mod: "",
    manaCost: 1,
    castTime: "Action",
    range: "Self",
    type: "Utility",
    target: "",
    components: `V`,
    duration: "1 Hour",
    description: `You speed up your mind to comprehend text faster. For the duration you are able to read a page full of words in one second. As you read, the pages magically lift and turn themselves, moving at the rate you are reading. If used while reading a technique scroll you gain an additional skill point. Magic text and hidden text cannot be comprehended while using this spell.`,
  },
  {
    name: `Tal’Dar’s Stunning Missiles`,
    level: 1,
    plane: "Arcane",
    mod: "",
    manaCost: 1,
    castTime: "Action",
    range: "60ft",
    type: "Debuff",
    target: "multiple",
    components: `S`,
    duration: "instantaneous",
    description: `<p style="margin-top:62%;">You create three darts of stunning energy. Each dart hits a creature of your choice that you can see within range. The darts all strike simultaneously and you can direct them to hit one creature or several.<br/><br/>

When a dart strikes a creature it must make a Durability Save against your Arcane DC or be stunned until the beginning of their next turn. If two darts strike the same creature your Arcane DC has a +2 added to it. If three darts strike the same creature your Arcane DC has a +5 added to it; if the target[s] fail their Durability Save by 5 or more they become stunned for 1 minute. Every time they take damage they can make a Durability Save against your normal Arcane DC, ending the stunned effect on a success.<br/><br/>

Empowering: When you empower this spell, you increase the number of darts by 1 for each mana used to empower the spell.</p>`,
  },
  {
    name: "Unlock",
    level: 1,
    plane: "Arcane",
    mod: "",
    manaCost: 1,
    castTime: "Bonus Action",
    range: "15ft",
    type: "Utility",
    target: "",
    components: `V,S`,
    duration: "instantaneous",
    description: `You point at a lock that isn’t magically enhanced, and it unlocks. If the lock is magically enhanced you can make an Arcane Attack against the locks DC, on a success the object is unlocked.`,
  },
];
const dragon = [
  {
    name: "Dragon Fists",
    level: 1,
    plane: "Dragon",
    mod: "",
    manaCost: 1,
    castTime: "Bonus Action",
    range: "Self",
    type: "Buff",
    target: "single target",
    components: "S",
    duration: "1 Minute Concentration",
    description: `Your next unarmed strike that hits before the spell ends deals an additional (6)1d12 damage, choose from: acid, ice, fire, force, lightning, necrotic, poison, psychic, radiant, or thunder damage <br/> <br/>
    Empowering: When you empower this spell, you increase the damage by (6)1d12 for each mana used to empower the spell`,
  },
];
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

const arcaneSpines = [
  "img/BookSpines/arcane/ArcaneSpine1.jpg",
  "img/BookSpines/arcane/ArcaneSpine2.jpg",
  "img/BookSpines/arcane/ArcaneSpine3.jpg",
  "img/BookSpines/arcane/ArcaneSpine4.jpg",
  "img/BookSpines/arcane/ArcaneSpine5.jpg",
];

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
let sameCard = "";

// Shelf Functions

function generateShelf() {
  hideFilter();
  generateArcane();
  generateDragon();
}

function generateArcane() {
  let length = arcane.length;
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * arcaneSpines.length);
    const selectedSpine = arcaneSpines[randomIndex];
    let p = document.createElement("p");
    p.innerText = `${arcane[i].plane} Plane - || - ${arcane[i].name} - || - Level: ${arcane[i].level}`;
    p.value = i;
    p.classList.add("spell", `${arcane[i].plane}`, `level${arcane[i].level}`);
    p.style.backgroundImage = `url('${selectedSpine}')`;
    p.addEventListener("click", () => {
      displayedSpell = p.value;
      currentArray = "arcane";
      if (sameCard === "" || sameCard != p.value) {
        flipCard();
        sameCard = p.value;
      } else {
        resetCard();
        sameCard = "";
      }
    });
    arcaneList.appendChild(p);
  }
}

function generateDragon() {
  let length = dragon.length;
  for (let i = 0; i < length; i++) {
    let p = document.createElement("p");
    p.innerText = `${dragon[i].plane} Plane - || - ${dragon[i].name} - || - Level: ${dragon[i].level}`;
    p.value = i;
    p.classList.add("spell", `${dragon[i].plane}`, `level${dragon[i].level}`);
    p.addEventListener("click", () => {
      displayedSpell = p.value;
      currentArray = "dragon";
      if (sameCard === "" || sameCard != p.value) {
        flipCard();
        sameCard = p.value;
      } else {
        resetCard();
        sameCard = "";
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
    spellComponents.innerHTML = `Components: ${arcane[displayedSpell].components}`;
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

function resetFilter() {
  const checkboxes = document.querySelectorAll(".checkbox");
  checkboxes.forEach((checkbox) => {
    checkbox.checked = true;
  });

  filterArcane = true;
  filterDragon = true;
  filterSpace = true;
  filterTime = true;
  filterEthereal = true;
  filterEldritch = true;
  filterMaterial = true;

  filterLvl0 = true;
  filterLvl1 = true;
  filterLvl2 = true;
  filterLvl3 = true;
  filterLvl4 = true;
  filterLvl5 = true;
  filterLvl6 = true;
  filterLvl7 = true;
  filterLvl8 = true;
  filterLvl9 = true;
  filterLvl10 = true;

  arcaneFilter();
  dragonFilter();
  SpaceFilter();
  timeFilter();
  etherealFilter();
  eldritchFilter();
  materialFilter();

  filterLevel0();
  filterLevel1();
  filterLevel2();
  filterLevel3();
  filterLevel4();
  filterLevel5();
  filterLevel6();
  filterLevel7();
  filterLevel8();
  filterLevel9();
  filterLevel10();
}

function clearFilter() {
  const checkboxes = document.querySelectorAll(".checkbox");
  checkboxes.forEach((checkbox) => {
    checkbox.checked = false;
  });

  filterArcane = false;
  filterDragon = false;
  filterSpace = false;
  filterTime = false;
  filterEthereal = false;
  filterEldritch = false;
  filterMaterial = false;

  filterLvl0 = false;
  filterLvl1 = false;
  filterLvl2 = false;
  filterLvl3 = false;
  filterLvl4 = false;
  filterLvl5 = false;
  filterLvl6 = false;
  filterLvl7 = false;
  filterLvl8 = false;
  filterLvl9 = false;
  filterLvl10 = false;

  arcaneFilter();
  dragonFilter();
  SpaceFilter();
  timeFilter();
  etherealFilter();
  eldritchFilter();
  materialFilter();

  filterLevel0();
  filterLevel1();
  filterLevel2();
  filterLevel3();
  filterLevel4();
  filterLevel5();
  filterLevel6();
  filterLevel7();
  filterLevel8();
  filterLevel9();
  filterLevel10();
}

// Filter By Plane

let filterArcane = false;
let filterDragon = false;
let filterSpace = false;
let filterTime = false;
let filterEthereal = false;
let filterEldritch = false;
let filterMaterial = false;

function arcaneFilter() {
  const arcaneSpells = document.querySelectorAll(".Arcane");
  if (filterArcane === false) {
    arcaneSpells.forEach((spell) => {
      spell.style.display = "none";
    });
    filterArcane = true;
  } else {
    arcaneSpells.forEach((spell) => {
      spell.style.display = "";
    });
    filterArcane = false;
  }
}
function dragonFilter() {
  const dragonSpells = document.querySelectorAll(".Dragon");
  if (filterDragon === false) {
    dragonSpells.forEach((spell) => {
      spell.style.display = "none";
    });
    filterDragon = true;
  } else {
    dragonSpells.forEach((spell) => {
      spell.style.display = "";
    });
    filterDragon = false;
  }
}
function SpaceFilter() {
  const spaceSpells = document.querySelectorAll(".Space");
  if (filterSpace === false) {
    spaceSpells.forEach((spell) => {
      spell.style.display = "none";
    });
    filterSpace = true;
  } else {
    spaceSpells.forEach((spell) => {
      spell.style.display = "";
    });
    filterSpace = false;
  }
}
function timeFilter() {
  const timeSpells = document.querySelectorAll(".Time");
  if (filterTime === false) {
    timeSpells.forEach((spell) => {
      spell.style.display = "none";
    });
    filterTime = true;
  } else {
    timeSpells.forEach((spell) => {
      spell.style.display = "";
    });
    filterTime = false;
  }
}
function etherealFilter() {
  const etherealSpells = document.querySelectorAll(".Ethereal");
  if (filterEthereal === false) {
    etherealSpells.forEach((spell) => {
      spell.style.display = "none";
    });
    filterEthereal = true;
  } else {
    etherealSpells.forEach((spell) => {
      spell.style.display = "";
    });
    filterEthereal = false;
  }
}
function eldritchFilter() {
  const eldritchSpells = document.querySelectorAll(".Eldritch");
  if (filterEldritch === false) {
    eldritchSpells.forEach((spell) => {
      spell.style.display = "none";
    });
    filterEldritch = true;
  } else {
    eldritchSpells.forEach((spell) => {
      spell.style.display = "";
    });
    filterEldritch = false;
  }
}
function materialFilter() {
  const materialSpells = document.querySelectorAll(".Material");
  if (filterMaterial === false) {
    materialSpells.forEach((spell) => {
      spell.style.display = "none";
    });
    filterMaterial = true;
  } else {
    materialSpells.forEach((spell) => {
      spell.style.display = "";
    });
    filterMaterial = false;
  }
}

// filter by Level

let filterLvl0 = false;
let filterLvl1 = false;
let filterLvl2 = false;
let filterLvl3 = false;
let filterLvl4 = false;
let filterLvl5 = false;
let filterLvl6 = false;
let filterLvl7 = false;
let filterLvl8 = false;
let filterLvl9 = false;
let filterLvl10 = false;

function filterLevel0() {
  const spellLvl0 = document.querySelectorAll(".level0");
  if (filterLvl0 === false) {
    spellLvl0.forEach((e) => {
      e.style.display = "none";
    });
    filterLvl0 = true;
  } else {
    spellLvl0.forEach((e) => {
      e.style.display = "";
    });
    filterLvl0 = false;
  }
}

function filterLevel1() {
  const spellLvl1 = document.querySelectorAll(".level1");
  if (filterLvl1 === false) {
    spellLvl1.forEach((e) => {
      e.style.display = "none";
    });
    filterLvl1 = true;
  } else {
    spellLvl1.forEach((e) => {
      e.style.display = "";
    });
    filterLvl1 = false;
  }
}
function filterLevel2() {
  const spellLvl2 = document.querySelectorAll(".level2");
  if (filterLvl2 === false) {
    spellLvl2.forEach((e) => {
      e.style.display = "none";
    });
    filterLvl2 = true;
  } else {
    spellLvl2.forEach((e) => {
      e.style.display = "";
    });
    filterLvl2 = false;
  }
}
function filterLevel3() {
  const spellLvl3 = document.querySelectorAll(".level3");
  if (filterLvl3 === false) {
    spellLvl3.forEach((e) => {
      e.style.display = "none";
    });
    filterLvl3 = true;
  } else {
    spellLvl3.forEach((e) => {
      e.style.display = "";
    });
    filterLvl3 = false;
  }
}
function filterLevel4() {
  const spellLvl4 = document.querySelectorAll(".level4");
  if (filterLvl4 === false) {
    spellLvl4.forEach((e) => {
      e.style.display = "none";
    });
    filterLvl4 = true;
  } else {
    spellLvl4.forEach((e) => {
      e.style.display = "";
    });
    filterLvl4 = false;
  }
}
function filterLevel5() {
  const spellLvl5 = document.querySelectorAll(".level5");
  if (filterLvl5 === false) {
    spellLvl5.forEach((e) => {
      e.style.display = "none";
    });
    filterLvl5 = true;
  } else {
    spellLvl5.forEach((e) => {
      e.style.display = "";
    });
    filterLvl5 = false;
  }
}
function filterLevel6() {
  const spellLvl6 = document.querySelectorAll(".level6");
  if (filterLvl6 === false) {
    spellLvl6.forEach((e) => {
      e.style.display = "none";
    });
    filterLvl6 = true;
  } else {
    spellLvl6.forEach((e) => {
      e.style.display = "";
    });
    filterLvl6 = false;
  }
}
function filterLevel7() {
  const spellLvl7 = document.querySelectorAll(".level7");
  if (filterLvl7 === false) {
    spellLvl7.forEach((e) => {
      e.style.display = "none";
    });
    filterLvl7 = true;
  } else {
    spellLvl7.forEach((e) => {
      e.style.display = "";
    });
    filterLvl7 = false;
  }
}
function filterLevel8() {
  const spellLvl8 = document.querySelectorAll(".level8");
  if (filterLvl8 === false) {
    spellLvl8.forEach((e) => {
      e.style.display = "none";
    });
    filterLvl8 = true;
  } else {
    spellLvl8.forEach((e) => {
      e.style.display = "";
    });
    filterLvl8 = false;
  }
}
function filterLevel9() {
  const spellLvl9 = document.querySelectorAll(".level9");
  if (filterLvl9 === false) {
    spellLvl9.forEach((e) => {
      e.style.display = "none";
    });
    filterLvl9 = true;
  } else {
    spellLvl9.forEach((e) => {
      e.style.display = "";
    });
    filterLvl9 = false;
  }
}
function filterLevel10() {
  const spellLvl10 = document.querySelectorAll(".level10");
  if (filterLvl10 === false) {
    spellLvl10.forEach((e) => {
      e.style.display = "none";
    });
    filterLvl10 = true;
  } else {
    spellLvl10.forEach((e) => {
      e.style.display = "";
    });
    filterLvl10 = false;
  }
}

displaySpell();
generateShelf();
