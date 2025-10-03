/* Template
  {
    name: "",
    level: ,
    plane: "",
    mod: "",
    manaCost: ,
    castTime: "",
    range: "",
    type: "",
    target: "",
    components: "",
    duration: "",
    description: ``,
  },
    */

// Faith Spells
const faithSpells0 = [
  {
    name: "Divine Touch",
    level: 0,
    plane: "Divine",
    mod: "",
    manaCost: 0,
    castTime: "Action (bonus action at lvl 6)",
    range: "30ft",
    type: "Utility",
    target: "",
    components: "V,S",
    duration: "Instantaneous",
    description: `<p>You are able to cause minor things to happen. When you cast the spell choose from the following affects:<br/><br/>

You point at a willing creature and cause all the dirt, grime and water to burn away, cleansing their body and clothing.
You point at food that can fit in a 1-foot cube and cause it to become very flavorful, making even the worst food palatable.
You point at small or tiny objects that fit within a 5 foot cube and cause them to organize themselves in a way that you would like.
You cause the candles/torches within range to light on fire, or be snuffed out.</p>`,
  },
  {
    name: "Guidance",
    level: 0,
    plane: "Heavens",
    mod: "",
    manaCost: 0,
    castTime: "Action (bonus action at lvl 6)",
    range: "30ft",
    type: "Utilty",
    target: "single",
    components: "V",
    duration: "1 Minute",
    description: `<p>You pray for guidance for a creature within 30 feet of you. Before the spell ends if they make an Ability Save, attack roll, or skill check they get to add half your Mind Score (minimum of 1) to the roll.</p>`,
  },
  {
    name: "Light",
    level: 0,
    plane: "Heavens",
    mod: "",
    manaCost: 0,
    castTime: "Action (bonus action at lvl 6)",
    range: "Touch",
    type: "Utility",
    target: "",
    components: "S",
    duration: "1 Hour",
    description: `<p>You touch an object and cause it to glow, giving off light in a 30-foot radius sphere.</p>`,
  },
  {
    name: "Minor Illusion",
    level: 0,
    plane: "Various",
    mod: "",
    manaCost: 0,
    castTime: "Action (bonus action at lvl 6)",
    range: "30ft",
    type: "Utility",
    target: "",
    components: "S",
    duration: "1 Minute",
    description: `<p>You cause an illusion to appear at a point you can see within range. The illusion can’t move after it has been cast, and must fit within a 5-foot cube, but unless a creature uses their action to make a Perception Check against your Faith DC the illusion seems real.</p>`,
  },
  {
    name: "Radiant Flame",
    level: 0,
    plane: "Heavens",
    mod: "",
    manaCost: 0,
    castTime: "Action (bonus action at lvl 6)",
    range: "60ft",
    type: "Energy",
    target: "single",
    components: "V,S",
    duration: "Instantaneous",
    description: `<p>You cause a creature you can see within range to burst into radiant fire. The creature must make a Power Save against your Faith DC or take (3)1d6 + your Mind Score radiant damage (half as much on a success).</p>`,
  },
  {
    name: "Sacrifice",
    level: 0,
    plane: "Hells",
    mod: "",
    manaCost: 0,
    castTime: "Action (bonus action at lvl 6)",
    range: "Self",
    type: "Utility",
    target: "",
    components: "V,S,M (a drop of your blood)",
    duration: "Instantaneous",
    description: `<p>You take necrotic damage (this damage can’t be reduced) up to 5 x your Mind Score to gain 1 mana for every 5 Hit Points sacrificed.</p>`,
  },
];
const faithSpells1 = [];
const faithSpells2 = [];
const faithSpells3 = [];
const faithSpells4 = [];
const faithSpells5 = [];

let aura = [];
let featuredSpell;
let displayedSpell = 0;
let currentArray;

// var for setting the specific shelf
let shelfSection = "arcane";

// getting the Shelfs
let shelf0 = document.getElementById("lvl0Shelf");
let shelf1 = document.getElementById("lvl1Shelf");
let shelf2 = document.getElementById("lvl2Shelf");
let shelf3 = document.getElementById("lvl3Shelf");
let shelf4 = document.getElementById("lvl4Shelf");
let shelf5 = document.getElementById("lvl5Shelf");
let shelf6 = document.getElementById("lvl6Shelf");
let shelf7 = document.getElementById("lvl7Shelf");
let shelf8 = document.getElementById("lvl8Shelf");
let shelf9 = document.getElementById("lvl9Shelf");
let shelf10 = document.getElementById("lvl10Shelf");

// Spell Details

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

// Book spine styling for the shelfs
const bookSpines = [
  "img/BookSpines/arcane/ArcaneSpine1.jpg",
  "img/BookSpines/nature/NatureSpine1.png",
  "img/BookSpines/nature/NatureSpine3.png",
  "img/BookSpines/nature/NatureSpine4.png",
  "img/BookSpines/arcane/ArcaneSpine4.jpg",
  "img/BookSpines/faith/FaithSpine1.jpg",
  "img/BookSpines/faith/FaithSpine2.jpg",
  "img/BookSpines/faith/FaithSpine3.jpg",
  "img/BookSpines/faith/FaithSpine4.jpg",
  "img/BookSpines/faith/FaithSpine5.jpg",
];

let flipped = false;
let sameCard = "";

// Shelf Functions

function generateShelf() {
  hideFilter();
  generateSpellLvl0();
  generateSpellLvl1();
  generateSpellLvl2();
  generateSpellLvl3();
}

function generateSpellLvl0() {
  let length = faithSpells0.length;
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * bookSpines.length);
    const selectedSpine = bookSpines[randomIndex];
    let p = document.createElement("p");
    p.innerText = `${faithSpells0[i].name} - || - ${faithSpells0[i].plane} Plane`;
    p.value = i;
    p.classList.add("spell", `${faithSpells0[i].plane}`);
    p.id = `lv0-${i}`;
    p.style.backgroundImage = `url('${selectedSpine}')`;
    p.addEventListener("click", () => {
      displayedSpell = p.value;
      currentArray = "lvl0";
      if (sameCard === "" || sameCard != p.id) {
        flipCard();
        sameCard = p.id;
      } else {
        resetCard();
        sameCard = "";
      }
    });
    shelf0.appendChild(p);
  }
}

function generateSpellLvl1() {
  let length = faithSpells1.length;
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * bookSpines.length);
    const selectedSpine = bookSpines[randomIndex];
    let p = document.createElement("p");
    p.innerText = `${faithSpells1[i].name} - || - ${faithSpells1[i].plane} Plane`;
    p.value = i;
    p.classList.add("spell", `${faithSpells1[i].plane}`);
    p.id = `lv1-${i}`;
    p.style.backgroundImage = `url('${selectedSpine}')`;
    p.addEventListener("click", () => {
      displayedSpell = p.value;
      currentArray = "lvl1";
      if (sameCard === "" || sameCard != p.id) {
        flipCard();
        sameCard = p.id;
      } else {
        resetCard();
        sameCard = "";
      }
    });
    shelf1.appendChild(p);
  }
}

function generateSpellLvl2() {
  let length = faithSpells2.length;
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * bookSpines.length);
    const selectedSpine = bookSpines[randomIndex];
    let p = document.createElement("p");
    p.innerText = `${faithSpells2[i].name} - || - ${faithSpells2[i].plane} Plane`;
    p.value = i;
    p.classList.add("spell", `${faithSpells2[i].plane}`);
    p.id = `lv2-${i}`;
    p.style.backgroundImage = `url('${selectedSpine}')`;
    p.addEventListener("click", () => {
      displayedSpell = p.value;
      currentArray = "lvl2";
      if (sameCard === "" || sameCard != p.id) {
        flipCard();
        sameCard = p.id;
      } else {
        resetCard();
        sameCard = "";
      }
    });
    shelf2.appendChild(p);
  }
}

function generateSpellLvl3() {
  let length = faithSpells3.length;
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * bookSpines.length);
    const selectedSpine = bookSpines[randomIndex];
    let p = document.createElement("p");
    p.innerText = `${faithSpells3[i].name} - || - ${faithSpells3[i].plane} Plane`;
    p.value = i;
    p.classList.add("spell", `${faithSpells3[i].plane}`);
    p.id = `lv3-${i}`;
    p.style.backgroundImage = `url('${selectedSpine}')`;
    p.addEventListener("click", () => {
      displayedSpell = p.value;
      currentArray = "lvl3";
      if (sameCard === "" || sameCard != p.id) {
        flipCard();
        sameCard = p.id;
      } else {
        resetCard();
        sameCard = "";
      }
    });
    shelf3.appendChild(p);
  }
}

// Card & Display Functions

function displaySpell() {
  if (currentArray === "lvl0") {
    spellName.innerText = faithSpells0[displayedSpell].name;
    spellLevel.innerText = `Level ${faithSpells0[displayedSpell].level}`;
    spellPlane.innerText = faithSpells0[displayedSpell].plane;
    spellMod.innerText = faithSpells0[displayedSpell].mod;
    spellCost.innerText = `Mana Cost: ${faithSpells0[displayedSpell].manaCost}`;
    spellCastTime.innerText = `Cast Time: ${faithSpells0[displayedSpell].castTime}`;
    spellRange.innerText = `Range: ${faithSpells0[displayedSpell].range}`;
    spellType.innerText = `Type: ${faithSpells0[displayedSpell].type}`;
    spellComponents.innerHTML = `Components: ${faithSpells0[displayedSpell].components}`;
    spellDuration.innerText = `Duration: ${faithSpells0[displayedSpell].duration}`;
    spellDescription.innerHTML = faithSpells0[displayedSpell].description;
  }
  if (currentArray === "lvl1") {
    spellName.innerText = faithSpells1[displayedSpell].name;
    spellLevel.innerText = `Level: ${faithSpells1[displayedSpell].level}`;
    spellPlane.innerText = faithSpells1[displayedSpell].plane;
    spellMod.innerText = faithSpells1[displayedSpell].mod;
    spellCost.innerText = `Mana Cost: ${faithSpells1[displayedSpell].manaCost}`;
    spellCastTime.innerText = `Cast Time: ${faithSpells1[displayedSpell].castTime}`;
    spellRange.innerText = `Range: ${faithSpells1[displayedSpell].range}`;
    spellType.innerText = `Type: ${faithSpells1[displayedSpell].type}`;
    spellComponents.innerText = `Components: ${faithSpells1[displayedSpell].components}`;
    spellDuration.innerText = `Duration: ${faithSpells1[displayedSpell].duration}`;
    spellDescription.innerHTML = faithSpells1[displayedSpell].description;
  }
  if (currentArray === "lvl2") {
    spellName.innerText = faithSpells2[displayedSpell].name;
    spellLevel.innerText = `Level: ${faithSpells2[displayedSpell].level}`;
    spellPlane.innerText = faithSpells2[displayedSpell].plane;
    spellMod.innerText = faithSpells2[displayedSpell].mod;
    spellCost.innerText = `Mana Cost: ${faithSpells2[displayedSpell].manaCost}`;
    spellCastTime.innerText = `Cast Time: ${faithSpells2[displayedSpell].castTime}`;
    spellRange.innerText = `Range: ${faithSpells2[displayedSpell].range}`;
    spellType.innerText = `Type: ${faithSpells2[displayedSpell].type}`;
    spellComponents.innerText = `Components: ${faithSpells2[displayedSpell].components}`;
    spellDuration.innerText = `Duration: ${faithSpells2[displayedSpell].duration}`;
    spellDescription.innerHTML = faithSpells2[displayedSpell].description;
  }
  if (currentArray === "lvl3") {
    spellName.innerText = faithSpells3[displayedSpell].name;
    spellLevel.innerText = `Level: ${faithSpells3[displayedSpell].level}`;
    spellPlane.innerText = faithSpells3[displayedSpell].plane;
    spellMod.innerText = faithSpells3[displayedSpell].mod;
    spellCost.innerText = `Mana Cost: ${faithSpells3[displayedSpell].manaCost}`;
    spellCastTime.innerText = `Cast Time: ${faithSpells3[displayedSpell].castTime}`;
    spellRange.innerText = `Range: ${faithSpells3[displayedSpell].range}`;
    spellType.innerText = `Type: ${faithSpells3[displayedSpell].type}`;
    spellComponents.innerText = `Components: ${faithSpells3[displayedSpell].components}`;
    spellDuration.innerText = `Duration: ${faithSpells3[displayedSpell].duration}`;
    spellDescription.innerHTML = faithSpells3[displayedSpell].description;
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

  filterAbyss = true;
  filterDivine = true;
  filterEverWar = true;
  filterHeavens = true;
  filterHells = true;
  filterJudgement = true;
  filterVarious = true;

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

  abyssFilter();
  divineFilter();
  everWarFilter();
  heavensFilter();
  hellsFilter();
  judgementFilter();
  variousFilter();

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

  filterAbyss = false;
  filterDivine = false;
  filterEverWar = false;
  filterHeavens = false;
  filterHells = false;
  filterJudgement = false;
  filterVarious = false;

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

  abyssFilter();
  divineFilter();
  everWarFilter();
  heavensFilter();
  hellsFilter();
  judgementFilter();
  variousFilter();

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

filterAbyss = false;
filterDivine = false;
filterEverWar = false;
filterHeavens = false;
filterHells = false;
filterJudgement = false;
filterVarious = false;

function abyssFilter() {
  const abyssSpells = document.querySelectorAll(".Abyss");
  if (filterAbyss === false) {
    abyssSpells.forEach((spell) => {
      spell.style.display = "none";
    });
    filterAbyss = true;
  } else {
    abyssSpells.forEach((spell) => {
      spell.style.display = "";
    });
    filterAbyss = false;
  }
}
function divineFilter() {
  const divineSpells = document.querySelectorAll(".Divine");
  if (filterDivine === false) {
    divineSpells.forEach((spell) => {
      spell.style.display = "none";
    });
    filterDivine = true;
  } else {
    divineSpells.forEach((spell) => {
      spell.style.display = "";
    });
    filterDivine = false;
  }
}
function EverWarFilter() {
  const everWarSpells = document.querySelectorAll(".EverWar");
  if (filterEverWar === false) {
    everWarSpells.forEach((spell) => {
      spell.style.display = "none";
    });
    filterEverWar = true;
  } else {
    everWarSpells.forEach((spell) => {
      spell.style.display = "";
    });
    filterEverWar = false;
  }
}
function heavensFilter() {
  const heavensSpells = document.querySelectorAll(".Heavens");
  if (filterHeavens === false) {
    heavensSpells.forEach((spell) => {
      spell.style.display = "none";
    });
    filterHeavens = true;
  } else {
    heavensSpells.forEach((spell) => {
      spell.style.display = "";
    });
    filterHeavens = false;
  }
}
function hellsFilter() {
  const hellsSpells = document.querySelectorAll(".Hells");
  if (filterHells === false) {
    hellsSpells.forEach((spell) => {
      spell.style.display = "none";
    });
    filterHells = true;
  } else {
    hellsSpells.forEach((spell) => {
      spell.style.display = "";
    });
    filterHells = false;
  }
}
function judgementFilter() {
  const judgementSpells = document.querySelectorAll(".Judgement");
  if (filterJudgement === false) {
    judgementSpells.forEach((spell) => {
      spell.style.display = "none";
    });
    filterJudgement = true;
  } else {
    judgementSpells.forEach((spell) => {
      spell.style.display = "";
    });
    filterJudgement = false;
  }
}
function variousFilter() {
  const variousSpells = document.querySelectorAll(".Various");
  if (filterVarious === false) {
    variousSpells.forEach((spell) => {
      spell.style.display = "none";
    });
    filterVarious = true;
  } else {
    variousSpells.forEach((spell) => {
      spell.style.display = "";
    });
    filterVarious = false;
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
  if (filterLvl0 === false) {
    shelf0.style.display = "none";
    filterLvl0 = true;
  } else {
    shelf0.style.display = "";
    filterLvl0 = false;
  }
}

function filterLevel1() {
  if (filterLvl1 === false) {
    shelf1.style.display = "none";
    filterLvl1 = true;
  } else {
    shelf1.style.display = "";
    filterLvl1 = false;
  }
}
function filterLevel2() {
  if (filterLvl2 === false) {
    shelf2.style.display = "none";
    filterLvl2 = true;
  } else {
    shelf2.style.display = "";
    filterLvl2 = false;
  }
}
function filterLevel3() {
  if (filterLvl3 === false) {
    shelf3.style.display = "none";
    filterLvl3 = true;
  } else {
    shelf3.style.display = "";
    filterLvl3 = false;
  }
}
function filterLevel4() {
  if (filterLvl4 === false) {
    shelf4.style.display = "none";
    filterLvl4 = true;
  } else {
    shelf4.style.display = "";
    filterLvl4 = false;
  }
}
function filterLevel5() {
  if (filterLvl5 === false) {
    shelf5.style.display = "none";
    filterLvl5 = true;
  } else {
    shelf5.style.display = "";
    filterLvl5 = false;
  }
}
function filterLevel6() {
  if (filterLvl6 === false) {
    shelf6.style.display = "none";
    filterLvl6 = true;
  } else {
    shelf6.style.display = "";
    filterLvl6 = false;
  }
}
function filterLevel7() {
  if (filterLvl7 === false) {
    shelf7.style.display = "none";
    filterLvl7 = true;
  } else {
    shelf7.style.display = "";
    filterLvl7 = false;
  }
}
function filterLevel8() {
  if (filterLvl8 === false) {
    shelf8.style.display = "none";
    filterLvl8 = true;
  } else {
    shelf8.style.display = "";
    filterLvl8 = false;
  }
}
function filterLevel9() {
  if (filterLvl9 === false) {
    shelf9.style.display = "none";
    filterLvl9 = true;
  } else {
    shelf9.style.display = "";
    filterLvl9 = false;
  }
}
function filterLevel10() {
  if (filterLvl10 === false) {
    shelf10.style.display = "none";
    filterLvl10 = true;
  } else {
    shelf10.style.display = "";
    filterLvl10 = false;
  }
}

displaySpell();
generateShelf();
