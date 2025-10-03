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

// Nature Spells
const natureSpells0 = [
  {
    name: "Avail",
    level: 0,
    plane: "Nature",
    mod: "",
    manaCost: 0,
    castTime: "Action (Bonus action at lvl6)",
    range: "Touch",
    type: "utility",
    target: "",
    components: "S",
    duration: "Instantaneous",
    description: `<p>Choose on of the following options:<br/><br/>
Clip: You touch a medium or smaller creature that has hair/fur, feathers or small quills and clip, shave, or remove them as intricately or simply as you would like.<br/><br/>

Preserve: You touch a dead creature or 1 cubic foot of food and magically preserve it so that it doesn’t spoil/rot for twice as long as it would normally take.<br/><br/>

Remove: You touch a creature that has nails/claws, teeth/tusks, or horns/antlers/spikes and cause one of them to fall out after 1 minute or it falls out after being hit by an attack or used to attack another creature.<br/><br/>

Tan:You touch a huge or smaller creature’s hide and cure/tan it, making it usable.</p>`,
  },
  {
    name: "Control Water",
    level: 0,
    plane: "Water",
    mod: "",
    manaCost: 0,
    castTime: "Action (Bonus action at lvl6)",
    range: "60ft",
    type: "Utility, Debuff",
    target: "",
    components: "V,S,M (7 Gallons of Water)",
    duration: "1 Minute Concentration",
    description: `<p>For the duration you can control water that can fit within a 1-foot cube (a little more than 7 gallons), you can cause it to float around you at your movement speed, but it must stay within range. Or you can cause the water in that area to freeze, the ice has a defense of 10 and 10 hit points, and it is weak to blunt and fire damage, and resists ice, piercing and slashing damage. If you freeze a creature’s leg, their movement is reduced by 10, if you freeze a creature’s arm, their next attack with that arm has disadvantage. If you attempt to freeze more than just a limb the ice breaks when they move.</p>`,
  },
  {
    name: "Mr. Pipe’s Pyrotechnics",
    level: 0,
    plane: "Fire",
    mod: "",
    manaCost: 0,
    castTime: "Action (Bonus action at lvl6)",
    range: "60ft",
    type: "AOE, Debuff",
    target: "single",
    components: "V,S",
    duration: "Instantaneous",
    description: `<p style="margin-top: 80%">Snapping your fingers you produce one of the following affects:<br/><br/>

Dazzle: You cause a small display of sparks, fireworks, and explosives at a point you can see within range, all creatures within 5 feet must make a Mind Save against your Nature DC or be dazzled. The first attack made against the creature before the beginning of your next turn has advantage.<br/><br/>

Blind: You send a firework at a creature you can see within range causing it to explode in a brilliant flash, the creature must make a Mind Save against your Nature DC or become blind until the beginning of your next turn.<br/><br/>

Explosive: You send a firework at a creature you can see within range that explodes on contact, make a Nature Attack, on a hit you deal 1d6 + your Mind Score thunder damage.<br/><br/>

Produce Flame: you create a flame in your hand that lasts for 1 minute, or you can throw it at a creature within range, make a Nature Attack, on a hit you deal 1d4 + your Mind Score fire damage and they start on fire. A creature that is on fire takes 1d6 fire damage at the beginning of their turn until they use an action to put out the fire.<br/><br/>

Control Fire: You take control of fire that can fit within a 5-foot cube. As a bonus action on subsequent turns you can do any of the following, you have control of the fire for 1 minute.<br/><br/>

You make shapes appear in the fire, or cause the fire to change shape to look like structures, objects or creatures.<br/><br/>
You change the color of the fire.<br/><br/>
You move the fire up to half your movement speed. If the fire hits a creature they must make a Power Save against your Nature DC or take 1d6 fire damage and start on fire (half as much damage on a success, and they don’t start on fire). A creature that is on fire takes 1d6 fire damage at the beginning of their turn until they use an action to put out the fire.</p>`,
  },
  {
    name: "Razor leaves",
    level: 0,
    plane: "Nature",
    mod: "",
    manaCost: 0,
    castTime: "Action (Bonus action at lvl6)",
    range: "60ft",
    type: "Attack",
    target: "single",
    components: "V,S, M (leaves)",
    duration: "instantaneous",
    description: `You cause the leaves in your hand to harden and become sharp before throwing them at a creature you can see within range. Make a Nature Attack, on a hit you deal 1d6 + your Mind Score slashing damage.`,
  },
  {
    name: "Shadow Spike",
    level: 0,
    plane: "ShadowLands",
    mod: "",
    manaCost: 0,
    castTime: "Action (Bonus action at lvl6)",
    range: "30ft",
    type: "Attack",
    target: "single",
    components: "S",
    duration: "instantaneous",
    description: `You gather the shadows within an area within range to gather and solidify into an obsidian-like spike. Make a Nature Attack against a creature that is within 5 feet of the gathered shadows, on a hit you deal (4)1d8 + your Mind Score necrotic damage.`,
  },
];
const natureSpells1 = [];
const natureSpells2 = [];
const natureSpells3 = [];
const natureSpells4 = [];
const natureSpells5 = [];

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

// Defining which shelf to be generated
function redirectToArcane() {
  shelfSection = "arcane";
  window.location.href = "arcane.html";
  console.log(shelfSection);
}
function redirectToFaith() {
  shelfSection = "faith";
  window.location.href = "faith.html";
  console.log(shelfSection);
}
function redirectToNature() {
  shelfSection = "nature";
  window.location.href = "nature.html";
  console.log(shelfSection);
}
function redirectToLobby() {
  shelfSection = "";
  window.location.href = "index.html";
  console.log(shelfSection);
}

// Shelf Functions

function generateShelf() {
  hideFilter();
  generateSpellLvl0();
  generateSpellLvl1();
  generateSpellLvl2();
  generateSpellLvl3();
}

function generateSpellLvl0() {
  let length = natureSpells0.length;
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * bookSpines.length);
    const selectedSpine = bookSpines[randomIndex];
    let p = document.createElement("p");
    p.innerText = `${natureSpells0[i].name} - || - ${natureSpells0[i].plane} Plane`;
    p.value = i;
    p.classList.add("spell", `${natureSpells0[i].plane}`);
    p.id = `lv0-${i}`;
    p.style.backgroundImage = `url('${selectedSpine}')`;
    p.addEventListener("click", () => {
      displayedSpell = p.value;
      currentArray = "nlvl0";
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
  let length = natureSpells1.length;
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * bookSpines.length);
    const selectedSpine = bookSpines[randomIndex];
    let p = document.createElement("p");
    p.innerText = `${natureSpells1[i].name} - || - ${natureSpells1[i].plane} Plane`;
    p.value = i;
    p.classList.add("spell", `${natureSpells1[i].plane}`);
    p.id = `lv1-${i}`;
    p.style.backgroundImage = `url('${selectedSpine}')`;
    p.addEventListener("click", () => {
      displayedSpell = p.value;
      currentArray = "alvl1";
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
  let length = natureSpells2.length;
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * bookSpines.length);
    const selectedSpine = bookSpines[randomIndex];
    let p = document.createElement("p");
    p.innerText = `${natureSpells2[i].name} - || - ${natureSpells2[i].plane} Plane`;
    p.value = i;
    p.classList.add("spell", `${natureSpells2[i].plane}`);
    p.id = `lv2-${i}`;
    p.style.backgroundImage = `url('${selectedSpine}')`;
    p.addEventListener("click", () => {
      displayedSpell = p.value;
      currentArray = "alvl2";
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
  let length = natureSpells3.length;
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * bookSpines.length);
    const selectedSpine = bookSpines[randomIndex];
    let p = document.createElement("p");
    p.innerText = `${natureSpells3[i].name} - || - ${natureSpells3[i].plane} Plane`;
    p.value = i;
    p.classList.add("spell", `${natureSpells3[i].plane}`);
    p.id = `lv3-${i}`;
    p.style.backgroundImage = `url('${selectedSpine}')`;
    p.addEventListener("click", () => {
      displayedSpell = p.value;
      currentArray = "alvl3";
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
    spellName.innerText = natureSpells0[displayedSpell].name;
    spellLevel.innerText = `Level ${natureSpells0[displayedSpell].level}`;
    spellPlane.innerText = natureSpells0[displayedSpell].plane;
    spellMod.innerText = natureSpells0[displayedSpell].mod;
    spellCost.innerText = `Mana Cost: ${natureSpells0[displayedSpell].manaCost}`;
    spellCastTime.innerText = `Cast Time: ${natureSpells0[displayedSpell].castTime}`;
    spellRange.innerText = `Range: ${natureSpells0[displayedSpell].range}`;
    spellType.innerText = `Type: ${natureSpells0[displayedSpell].type}`;
    spellComponents.innerHTML = `Components: ${natureSpells0[displayedSpell].components}`;
    spellDuration.innerText = `Duration: ${natureSpells0[displayedSpell].duration}`;
    spellDescription.innerHTML = natureSpells0[displayedSpell].description;
  }
  if (currentArray === "lvl1") {
    spellName.innerText = natureSpells1[displayedSpell].name;
    spellLevel.innerText = `Level: ${natureSpells1[displayedSpell].level}`;
    spellPlane.innerText = natureSpells1[displayedSpell].plane;
    spellMod.innerText = natureSpells1[displayedSpell].mod;
    spellCost.innerText = `Mana Cost: ${natureSpells1[displayedSpell].manaCost}`;
    spellCastTime.innerText = `Cast Time: ${natureSpells1[displayedSpell].castTime}`;
    spellRange.innerText = `Range: ${natureSpells1[displayedSpell].range}`;
    spellType.innerText = `Type: ${natureSpells1[displayedSpell].type}`;
    spellComponents.innerText = `Components: ${natureSpells1[displayedSpell].components}`;
    spellDuration.innerText = `Duration: ${natureSpells1[displayedSpell].duration}`;
    spellDescription.innerHTML = natureSpells1[displayedSpell].description;
  }
  if (currentArray === "lvl2") {
    spellName.innerText = natureSpells2[displayedSpell].name;
    spellLevel.innerText = `Level: ${natureSpells2[displayedSpell].level}`;
    spellPlane.innerText = natureSpells2[displayedSpell].plane;
    spellMod.innerText = natureSpells2[displayedSpell].mod;
    spellCost.innerText = `Mana Cost: ${natureSpells2[displayedSpell].manaCost}`;
    spellCastTime.innerText = `Cast Time: ${natureSpells2[displayedSpell].castTime}`;
    spellRange.innerText = `Range: ${natureSpells2[displayedSpell].range}`;
    spellType.innerText = `Type: ${natureSpells2[displayedSpell].type}`;
    spellComponents.innerText = `Components: ${natureSpells2[displayedSpell].components}`;
    spellDuration.innerText = `Duration: ${natureSpells2[displayedSpell].duration}`;
    spellDescription.innerHTML = natureSpells2[displayedSpell].description;
  }
  if (currentArray === "lvl3") {
    spellName.innerText = natureSpells3[displayedSpell].name;
    spellLevel.innerText = `Level: ${natureSpells3[displayedSpell].level}`;
    spellPlane.innerText = natureSpells3[displayedSpell].plane;
    spellMod.innerText = natureSpells3[displayedSpell].mod;
    spellCost.innerText = `Mana Cost: ${natureSpells3[displayedSpell].manaCost}`;
    spellCastTime.innerText = `Cast Time: ${natureSpells3[displayedSpell].castTime}`;
    spellRange.innerText = `Range: ${natureSpells3[displayedSpell].range}`;
    spellType.innerText = `Type: ${natureSpells3[displayedSpell].type}`;
    spellComponents.innerText = `Components: ${natureSpells3[displayedSpell].components}`;
    spellDuration.innerText = `Duration: ${natureSpells3[displayedSpell].duration}`;
    spellDescription.innerHTML = natureSpells3[displayedSpell].description;
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

  filterAir = true;
  filterEarth = true;
  filterFire = true;
  filterWater = true;
  filterNature = true;
  filterShadowlands = true;

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

  airFilter();
  earthFilter();
  fireFilter();
  waterFilter();
  natureFilter();
  shadowlandsFilter();

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

  filterAir = false;
  filterEarth = false;
  filterFire = false;
  filterWater = false;
  filterNature = false;
  filterShadowlands = false;

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

  airFilter();
  earthFilter();
  fireFilter();
  waterFilter();
  natureFilter();
  shadowlandsFilter();

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

let filterAir = false;
let filterEarth = false;
let filterFire = false;
let filterWater = false;
let filterNature = false;
let filterShadowlands = false;

function airFilter() {
  const airSpells = document.querySelectorAll(".Air");
  if (filterAir === false) {
    airSpells.forEach((spell) => {
      spell.style.display = "none";
    });
    filterAir = true;
  } else {
    airSpells.forEach((spell) => {
      spell.style.display = "";
    });
    filterAir = false;
  }
}
function earthFilter() {
  const earthSpells = document.querySelectorAll(".Earth");
  if (filterEarth === false) {
    earthSpells.forEach((spell) => {
      spell.style.display = "none";
    });
    filterEarth = true;
  } else {
    earthSpells.forEach((spell) => {
      spell.style.display = "";
    });
    filterEarth = false;
  }
}
function fireFilter() {
  const fireSpells = document.querySelectorAll(".Fire");
  if (filterFire === false) {
    fireSpells.forEach((spell) => {
      spell.style.display = "none";
    });
    filterFire = true;
  } else {
    fireSpells.forEach((spell) => {
      spell.style.display = "";
    });
    filterFire = false;
  }
}
function waterFilter() {
  const waterSpells = document.querySelectorAll(".Water");
  if (filterWater === false) {
    waterSpells.forEach((spell) => {
      spell.style.display = "none";
    });
    filterWater = true;
  } else {
    waterSpells.forEach((spell) => {
      spell.style.display = "";
    });
    filterWater = false;
  }
}
function natureFilter() {
  const natureSpells = document.querySelectorAll(".Nature");
  if (filterNature === false) {
    natureSpells.forEach((spell) => {
      spell.style.display = "none";
    });
    filterNature = true;
  } else {
    natureSpells.forEach((spell) => {
      spell.style.display = "";
    });
    filterNature = false;
  }
}
function shadowlandsFilter() {
  const shadowlandsSpells = document.querySelectorAll(".ShadowLands");
  if (filterShadowlands === false) {
    shadowlandsSpells.forEach((spell) => {
      spell.style.display = "none";
    });
    filterShadowlands = true;
  } else {
    shadowlandsSpells.forEach((spell) => {
      spell.style.display = "";
    });
    filterShadowlands = false;
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
