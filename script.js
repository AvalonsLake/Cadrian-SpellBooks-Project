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
    target: "single",
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
    target: "single",
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
    plane: "Space",
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
    range: "120ft",
    type: "Energy",
    target: "single",
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
    target: "single",
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
    range: "30ft",
    type: "Energy, Debuff",
    target: "single",
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
    target: "single",
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
  {
    name: "Magic Lock",
    level: 2,
    plane: "Arcane",
    mod: "",
    manaCost: 2,
    castTime: "Action",
    range: "Touch",
    type: "Utility",
    target: "",
    components: "V,S,M (a lock)",
    duration: "Until Dispelled",
    description: `<p style="margin-top:400px;">You magically enhance a single lock that you touch. When you cast the spell choose a password that will open the lock when spoken within 10 feet of the lock. Choose from one of the magical enhancements to apply to the lock.<br/><br/>

Illusory: When you cast the spell on the lock, the lock vanishes and an illusionary duplicate appears on the opposite side of the object the lock is on (if the door handle is on the right side it vanishes and appears on the left side of the door). A successful Perception Check against your Arcane DC + the number of mana used to cast the spell, reveals that it is an illusion, and the creature can see the other handle.<br/><br/>

Intricate You make the lock a lot more difficult to open with anything other than the password (not even the original key works in it). The DC to pick the lock gains a bonus equal to the number of mana used to cast the spell.<br/><br/>

Trapped You bind a level 1 spell to the lock, and the first time a creature attempts to open the lock without using the password the spell is triggered, and targets the creature trying to open the lock. The damage dealt is equal to the spells original damage + the number of mana used to cast the spell.<br/><br/>

Empowering: When you empower this spell, you increase the bonuses to the lock by 1 for each mana used to empower the spell.</p>`,
  },
  {
    name: "Magic Sight",
    level: 2,
    plane: "Arcane",
    mod: "",
    manaCost: 2,
    castTime: "Action",
    range: "60ft",
    type: "Utility",
    target: "",
    components: "V",
    duration: "10 Minutes",
    description: `Your eyes glow with arcane energy, allowing you to see the auras given off by magic within 60 feet of you. Any magical creature, weapon or object will have an aura. You can determine whether it is Arcane, Faith and/or Nature magic, and gain a general idea of how much mana is in the magical creature, weapon or object. Creatures and objects protected from scrying appear as if they aren’t magical. Invisible creatures are still invisible to this spell.<br/><br/>

Empowering: When you empower this spell you increase the distance you can see by 15 feet for each mana used to empower the spell.`,
  },
  {
    name: "Mind Sliver",
    level: 2,
    plane: "Arcane",
    mod: "",
    manaCost: 2,
    castTime: "Action",
    range: "120ft",
    type: "Utility",
    target: "single/multiple",
    components: "V,S",
    duration: "1 Hour",
    description: `<p style="margin-top:25%;">You create a sliver of arcane magic and send it into the mind of a creature you can see within range. The target must make a Mind Save against your Arcane DC. On a failure you know the location of the creature for the duration (as long as they are on the same plane as you). If you spend one minute concentrating on the connection you can see through their eyes, and hear through their ears; at which time you are blind and deaf until you choose to stop focusing on the connection.<br/><br/>

Empowering: When you empower this spell you increase the number of creatures you can target by 1 for each mana used to empower the spell. You can still only focus on seeing and listening in on one creature at a time.</p>`,
  },
  {
    name: "Reversal",
    level: 2,
    plane: "Arcane",
    mod: "",
    manaCost: 2,
    castTime: "Reflexive Action",
    range: "15ft",
    type: "Protection",
    target: "",
    components: "S",
    duration: "Instantaneous",
    description: `If you or an ally within range are hit by a single or multi target spell that requires an attack roll, you can attempt to reflect the spell back at the caster. You reduce the damage of the spell by (11)2d10 + your Mind Score. If you reduce the damage to 0 you send the spell back at the caster, make an Arcane Attack, on a hit you deal the same damage you would have taken.<br/><br/>

Empowering: When you empower this spell, you increase the number of damage you can reduce by (5)1d10 for each mana used to empower the spell.`,
  },
  {
    name: "Summon Automaton",
    level: 2,
    plane: "Arcane",
    mod: "",
    manaCost: 2,
    castTime: "Action",
    range: "30ft",
    type: "Summon",
    target: "",
    components: "V,S",
    duration: "24 Hours",
    description: `<p style="margin-top:1150px;">You summon an automaton within range. The automaton is a tiny steam powered robot that you can use magic to alter to give them different attacks, movement speeds, and more. When you cast the spell you summon a tiny automaton (you choose what the automaton looks like). The automaton has: a number of HP equal to your Mind Score (minimum of 1), a 20 feet movement speed, and each of its Ability Scores is equal to your Mind Score, and they are immune to poison and psychic damage. When you cast the spell choose 2 of the following traits for your automaton to have:<br/><br/>

Attacker When it attacks it can add (2)1d4 to their attack rolls.<br/>
Defender It is made out of enchanted materials that reduce the damage taken from non-magical weapons that deal blunt, piercing and slashing, and the damage reduction is equal to your Mind Score.<br/>
Digger It gains a burrowing speed equal to half their movement speed.<br/>
Flyer It gains a flying speed equal to its movement speed.<br/>
Powerful It counts as a size larger when determining its carrying, and lifting capacity, along with shoving/throwing distances and grappling DC.<br/>
Quick All of its movement speeds increase by 50%. For example, if its movement speed is 30 feet, it becomes 45 feet, or if your movement speed is 80 feet, it becomes 120 feet.<br/>
Swimmer It gains a swimming speed equal to its movement speed.<br/>
As a bonus action you can give the summons under your command a single command, and they do their best to follow your instructions. If you don’t give a command they defend themselves. The automaton can make a single unarmed attack using your Nature Attack, dealing 1d4 + your Mind Score blunt, piercing or slashing damage (your choice when you summon it). Alternatively if it is small it can use any weapon you are proficient in.<br/><br/>

The maximum number of summons you can have under your control is equal to your Mind Score (minimum of 1). When the spell ends the summons becomes hostile toward you and your allies, unless you cast the spell on it again (using the same amount of mana used to summon it). Before the spell ends you can use an action to dismiss the summon.<br/><br/>

Empowering: When you empower this spell, you can modify your summon with 1 of the following options for each mana used to empower the spell. Choose from:<br/><br/>

An extra attack (max of 4 attacks)<br/>
Increase the automaton one size category (max size is huge. Increases movement speed by 5 feet, and the number of damage dice to 2 for large and 4 for huge)<br/>
Increase unarmed attack damage die (increases from d4 to d6, and d6 to d8. Max of d12)<br/>
Increase base movement speed by 10 feet (max of 70)<br/>
A new movement speed (burrowing is half of the automaton’s movement speed)<br/>
Increase HP level by 2 (the automaton’s health = Mind Score x HP level + Mind Score. Max level is 10)</p>`,
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
const ethereal = [
  {
    name: "Bind Object",
    level: 1,
    plane: "Eldritch",
    mod: "",
    manaCost: 1,
    castTime: "Bonus Action",
    range: "Touch",
    type: "Buff, Utility",
    target: "",
    components: "S,M(a small or tiny object)",
    duration: "Instantaneous",
    description: `<p style="margin-top:62%;">As a bonus action you can bind an object to your weapon giving it a bonus to damage, and changing the damage type. If the object binded is a natural weapon of a creature (claws, teeth, horns, ect.) then your bonus to damage is equal to one damage die of that creature. If the thing fused to your weapon is not a natural weapon it adds +1 to the damage rolls, and changes the damage type. You can also bind other weapons to your weapon to change the damage type, and deal bonus damage equal to one damage die of the weapon. The bound item breaks after hitting something a number of times equal to half your Mind Score (minimum of 1), or if the weapon is not on your character by the end of your turn.<br/><br/>

    You can bind any item that is 5 lbs. or less to your weapon, up to a total of 10lb. If the extra weight puts your weapon at or above 6 lb. your weapon becomes heavy, and two-handed, and loses its fast or thrown properties if it had them. Ammunition can only have items that are 1 lb. or less bound to them, and anything beyond the short range automatically misses.<br/><br/>

    Alternatively you are able to bind a small or tiny object you are holding to any solid surface, that isn’t a creature, or being worn or carried by one. The object can hold a number of pounds equal to 10 x your Mind Score, but the object itself can still break if it can’t support that much weight. The binding lasts for one minute, after which it falls to the ground, or until you use a bonus action to break the binding.</p>`,
  },
];
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
