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
const arcaneSpells0 = [
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
];
const arcaneSpells1 = [
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
    description: `<p style="margin-top:440px;">As a bonus action you can bind an object to your weapon giving it a bonus to damage, and changing the damage type. If the object binded is a natural weapon of a creature (claws, teeth, horns, ect.) then your bonus to damage is equal to one damage die of that creature. If the thing fused to your weapon is not a natural weapon it adds +1 to the damage rolls, and changes the damage type. You can also bind other weapons to your weapon to change the damage type, and deal bonus damage equal to one damage die of the weapon. The bound item breaks after hitting something a number of times equal to half your Mind Score (minimum of 1), or if the weapon is not on your character by the end of your turn.<br/><br/>

    You can bind any item that is 5 lbs. or less to your weapon, up to a total of 10lb. If the extra weight puts your weapon at or above 6 lb. your weapon becomes heavy, and two-handed, and loses its fast or thrown properties if it had them. Ammunition can only have items that are 1 lb. or less bound to them, and anything beyond the short range automatically misses.<br/><br/>

    Alternatively you are able to bind a small or tiny object you are holding to any solid surface, that isn’t a creature, or being worn or carried by one. The object can hold a number of pounds equal to 10 x your Mind Score, but the object itself can still break if it can’t support that much weight. The binding lasts for one minute, after which it falls to the ground, or until you use a bonus action to break the binding.</p>`,
  },
  {
    name: "Dragon Fists",
    level: 1,
    plane: "Dragon",
    mod: "",
    manaCost: 1,
    castTime: "Bonus Action",
    range: "Self",
    type: "Buff",
    target: "single",
    components: "S",
    duration: "1 Minute Concentration",
    description: `Your next unarmed strike that hits before the spell ends deals an additional (6)1d12 damage, choose from: acid, ice, fire, force, lightning, necrotic, poison, psychic, radiant, or thunder damage <br/> <br/>
    Empowering: When you empower this spell, you increase the damage by (6)1d12 for each mana used to empower the spell`,
  },
  {
    name: "Echoes of the Past",
    level: 1,
    plane: "Time",
    mod: "",
    manaCost: 1,
    castTime: "1 Minute",
    range: "touch",
    type: "Utility",
    target: "",
    components: "V,S",
    duration: "1 Hour Concentration",
    description: `<p style="margin-top:18%;">You touch the ground, a rock or a tree and use it as an anchor to pull ghostly echoes from the plane of time to replay everything that has happened within 10 feet of the thing you are touching within the last 24 hours. You can choose how fast the echoes replay the memories, or you can choose specific times for the echoes to play out. The echoes are silent and only give visual effects as the area remembers (this spell is not affected by creatures that are protected from scrying).<br/><br/>

    Empowering: When you empower this spell, you increase the number of days the echoes can recall by 1 for each mana used to empower the spell.</p>`,
  },
  {
    name: "Eldritch Chains",
    level: 1,
    plane: "Eldritch",
    mod: "",
    manaCost: 1,
    castTime: "Action",
    range: "30ft",
    type: "Debuff",
    target: "multiple",
    components: "V,S",
    duration: "1 Minute Concentration",
    description: `When you cast this spell you cause glowing chains to appear around a creature you can see within range. The creature must make a Power Save against your Arcane DC or become restrained for the duration. The creature, or a creature within 5 feet of the restrained creature, can use their action to remake the Power Save, freeing the restrained creature on a success.<br/><br/>

    Empowering: When you empower this spell, you increase the number of creatures you can target by 1 for each mana used to empower the spell.`,
  },
  {
    name: "Explosive Ritual",
    level: 1,
    plane: "Material",
    mod: "(Ritual)",
    manaCost: 1,
    castTime: "1 Minute",
    range: "touch",
    type: "AOE, Energy, Debuff",
    target: "multiple",
    components: "V,S,M (1cp worth of Salt or Chalk per size category)",
    duration: "1 Hour",
    description: `<p style="margin-top:1050px;">You draw out a simple ritual on a flat surface that is big enough to contain a 5 foot diameter ritual circle and imbue it with mana. Choose a trigger for the explosion like: a creature stepping on it, or you using a free action to cause it to explode. When the ritual explodes all creatures in the area must make a Power Save or take (5)1d10 + your Mind Score force damage and be pushed back 5 feet (half as much damage on a success and they aren’t pushed back).<br/><br/>

While you are performing the ritual you are able to add a number of alterations to the ritual equal to half your Arcane Magic Level, and you are able to fuel those alterations by expending the necessary mana up to a total of 100 mana. Choose from:<br/><br/>

Enlarged (requires more material components): You increase the size of the ritual circle to large (10 foot diameter) for 4 mana. You can increase it to a huge ritual circle (15 foot diameter) for 9 mana. Or a gargantuan ritual circle (20 foot diameter) for 16 mana.<br/><br/>

Empowered: You increase the force damage of the ritual by (5)1d10 for each mana used to fuel this alteration.<br/><br/>

Concussive: You increase the distance a creature is thrown by 5 feet for every 5 mana used to fuel this alteration and the creature falls prone (a creature that succeeds on their Power Save is still thrown half the distance, but doesn’t fall prone).<br/><br/>

Transmuted Damage: You can change some or all of the damage to a different damage type by expending a number of mana equal to the number of damage dice you would like to transmute, choosing from: Fire, Ice, Lightning, Radiant, or Thunder damage (you can choose this alteration multiple times to have multiple damage types in the explosion at the same time).<br/><br/>

Stunning: You cause the ritual to release a stunning blast by fueling this alteration with 5 mana (an additional 5 mana is required for each size category larger than the normal ritual size). All creature in the area must make a Durability Save or be stunned for a number of rounds equal to your mind score (half your Mind Score on a success).<br/><br/>

Mana Drain: You cause the ritual to drain the mana from creatures in the area. The ritual drains a number of mana equal to 2 times the amount of mana used to fuel this alteration, starting with the creature with the most mana, then works its way to the creature with the least. If all of the mana is drained from the creatures in the area, and the ritual can still drain more mana, it begins to drain life force from each creature in the area, dealing 5 psychic damage for each mana the creatures didn’t have mana for (this damage is spread equally between the creatures in the area).</p>`,
  },
  {
    name: "Force Tether Ritual",
    level: 1,
    plane: "Material",
    mod: "(Ritual)",
    manaCost: 1,
    castTime: "1 Minute",
    range: "touch",
    type: "Energy, Debuff",
    target: "single/multiple",
    components: "V,S,M (1cp worth of Salt or Chalk, a copper rod)",
    duration: "1 Minute",
    description: `<p style="margin-top:1520px;">When you finish the ritual a magical tether sprouts from the top of the rod in the middle of the ritual and wraps around the nearest hostile creature within 15 feet of the rod and the creature must make a Power Save against a DC 12 or be dragged to the rod (it doesn’t drag creatures fast enough to deal collision damage). A tethered creature is still able to move, but their movement speed is reduced by half, and at the beginning of your turn all tethered creatures must remake the save or be pulled back to the rod. If a creature attempt to move outside of the tether range the creature must make another Power Save or be dragged back 5 feet; but on a success the tether breaks and the creature is able to move freely, while the tether returns to the rod, where it will wrap around another creature at the beginning of your next turn.<br/><br/>

The rod can be removed with a successful Power Save* against a DC 12, or destroyed (the rod has a defense of 10 and 5 Hit Points). If the rod is removed or destroyed it immediately explodes, dealing (2)1d4 force damage to all creatures within 5 feet of the rod and they are all pushed back 5 feet and fall prone.<br/><br/>

While you are performing the ritual you are able to add a number of alterations to the ritual equal to half your Arcane Magic Level, and you are able to fuel those alterations by expending the necessary mana up to a total of 100 mana. Choose from:<br/><br/>

Empowered: You increase the power of the explosion if the rod is removed or destroyed. You can increase the force damage by (2)1d4 for every mana used to fuel this alteration. Alternatively you can increase the blast range of the explosion by 5 feet for every 5 mana used to fuel this alteration (max 100 feet). A creature is pushed back the same number of feet as the blast range, taking (3)1d6 collision damage for every 10 they are pushed.<br/><br/>

Increased Duration: You can make the ritual last 1 minute longer for every 10 mana used to fuel this alteration (max 10 minutes).<br/><br/>

Increased Range: You can increase the range the tethers can wrap around creatures by 5 feet for every 5 mana used to fuel this alteration (max of 110 feet).<br/><br/>

Improved DC: This alteration allows you to increase all of the DCs for this ritual. You increase the DC by 1 for every 5 mana used to fuel this alteration (max DC 31).<br/><br/>

Lightning Tether: By expending 10 mana you cause lightning to leap from the rod every round to target the nearest creature, then the lightning leaps to all creatures closest to that one, until the lightning runs out of power. At the beginning of each of your turns until the ritual end or the rod explodes roll (2)1d4 and deal 1 lighting damage to that many tethered creatures, starting with the largest creature closest to the rod and moving to the closest creatures to that one (if there aren’t enough creatures or is only 1 creature, start at the closest creature to the rod and deal damage until the lightning damage runs out). If the rod explodes before the ritual ends the explosion deals an additional (2)1d4 lighting damage for each round the ritual had left. You can increase the lighting damage dealt each round, and by the rod exploding, by (2)1d4 for every 10 mana used to fuel this alteration.<br/><br/>

Multi Targeting: You make it so that the rod can produce more magical tethers to drag creatures to it. You increase the number of creatures the rod can tether by 1 for every mana used to fuel this alteration.<br/><br/>

Necro Tether: You make it so that if a creature moves away from the rod they begin to take necrotic damage as the tether drains their life force. A tethered creature takes 1 necrotic damage for every 5 feet they move from the rod, and at the beginning of a tethered creature’s turn they take 1 necrotic damage for every 5 feet they are from the rod.</p>`,
  },
  {
    name: "Healing Ritual",
    level: 1,
    plane: "Material",
    mod: "(Ritual)",
    manaCost: 1,
    castTime: "1 Minute",
    range: "Touch",
    type: "Healing",
    target: "",
    components: "V,S,M (1cp worth of Salt or Chalk)",
    duration: "1 Minute",
    description: `You draw out a simple healing ritual on a flat surface that is big enough to contain a 5 foot diameter ritual circle and imbue it with mana. You can imbue the ritual circle with up to 100 mana, that can be used to heal creatures that enter the circle after the ritual is complete. If a creature enters the circle you can use a reflexive action to expend mana out of the ritual to heal the creature for (3)1d6 + 1 Hit Points per mana expended, or you can use a bonus action to heal a creature in the circle on your turn. The ritual circle lasts for the duration, or until the mana runs out.`,
  },
  {
    name: "Jump",
    level: 1,
    plane: "Space",
    mod: "",
    manaCost: 1,
    castTime: "Bonus Action",
    range: "touch",
    type: "Buff, Utility",
    target: "",
    components: "S",
    duration: "1 Minute",
    description: `You touch a willing creature and lessen the gravity around their body so that their jumping distances are doubled or the duration.
f`,
  },
  {
    name: "Laser beam",
    level: 1,
    plane: "Space",
    mod: "(Charge)",
    manaCost: 1,
    castTime: "Action",
    range: "60ft",
    type: "Energy",
    target: "single",
    components: "V,S",
    duration: "Instantaneous (Concentration while charging)",
    description: `<p style="margin-top:20%;">You fire a beam of concentrated energy at a creature you can see within range. Make an Arcane Attack, on a hit you deal (7)2d6 + your Mind Score force damage.<br/><br/>

Empowering: When you empower this spell, you increase the damage by (3)1d6 for each mana used to empower the spell.<br/><br/>

Charge: When you charge this spell you must maintain concentration on the spell until you release it. You can charge the spell for a number of rounds equal to half your Mind Score, and for each round you charge the spell you must expend the necessary mana to cast the spell, and the damage increases by (10)3d6 + your Mind Score each round.</p>`,
  },
  {
    name: "Levitating Objects",
    level: 1,
    plane: "Space",
    mod: "",
    manaCost: 1,
    castTime: "Action",
    range: "30ft",
    type: "Utility",
    target: "Multiple",
    components: "S",
    duration: "1 Minute Concentration",
    description: `You slowly levitate a number of medium or smaller objects equal to your Mind Score (minimum of 1). The total weight of the objects can’t weigh more than 100 pounds or leave the range of the spell, and they move at half your movement speed, but can’t hurt anyone if it runs into them. On subsequent turns you can use a bonus action to move the object, or switch objects and move them.<br/><br/>

Empowering: When you empower this spell, you increase the maximum total weight by 50 pounds for each mana used to empower the spell.`,
  },
  {
    name: "Looting Ritual",
    level: 1,
    plane: "Material",
    mod: "(Ritual)",
    manaCost: 1,
    castTime: "1 Minute",
    range: "Touch",
    type: "Utility",
    target: "",
    components:
      "V,S,M (1cp worth of Salt or Chalk per size category above medium)",
    duration: "Instantaneous",
    description: `<p style="margin-top:1610px;">You create a ritual circle around a creature that recently died (and hasn’t been harvested for parts) and cause the magic to cleanly extract the average number of creature parts from the creature based on its size: you can get 1 creature part from a small creature, 2 parts from a medium creature, 5 parts from a large creature, 7 parts from a huge creature, 12 parts from a gargantuan creature, and 25 parts from a colossal creature; if the creature had at least 2 levels in Mana you can harvest a Mana Core that is equal to half the creature’s Mana level (rounded down). All creature parts appear at your feet, and they become unusable after 1 week.<br/><br/>

Once the ritual ends the looted body quickly disintegrates into ash.<br/><br/>

While you are performing the ritual you are able to add a number of alterations to the ritual equal to half your Arcane Magic Level, and you are able to fuel those alterations by expending the necessary mana up to a total of 100 mana. Choose from:<br/><br/>

Skin (creature must have skin, fur, or scales for this alteration to work): You expend 5 mana to skin a medium or smaller creature and the magic mends the pelt, removing cuts, bruising, and damage from spells, as it slowly removes the pelt. It costs 5 additional mana per size category above medium (large is 10, huge is 15…etc.)<br/><br/>

Butcher (creature must have musculature for this alteration to work): You expend 5 mana to have the magic remove all of the meat from the bones and wrap it in preserving magic at your feet. The magic will preserve the meat for 1 week before it needs to be preserved by other means. It costs 5 additional mana per size category above medium (large is 10, huge is 15…etc.)<br/><br/>

Skeletal Forge (creature must have bones for this alteration to work): You expend 5 mana to have the magic remove all of the bones and mend any broken bone, then it reinforces them slightly so they can be used for crafting. Huge and gargantuan creatures cost a lot. It costs 10 mana for large creatures, 30 mana for huge creatures, 50 mana for gargantuan creatures, and 75 mana for colossal creatures due to giant creatures having Giantum Bones that resist magic.<br/><br/>

Predator’s Legacy (creature must have natural weapons for this alteration to work): You expend 10 mana to have the magic remove and mend any broken Horns, Antlers, Tusks, Claws, Talons, Fangs and Spikes the creature had, and place them at your feet. Alternatively you can expend 10 mana to harvest one Horn, Tusk, Claw, Talon, Fang or Spike (keeping any magical or natural traits) and cause it to grow into a +1 short or mid length blade without a hilt or the head of a brutal/polearm weapon that can be worked into a usable weapon (max of 10 weapons). You can use both versions of this alteration in the same ritual.<br/><br/>

Blood (creature must have blood for this alteration to work): You expend 5 mana that creates a magical vial and gathers blood to keep it fresh. You can get 1 vial from a tiny creature, up to 5 vials from a small creature, up to 10 vials from a medium creature, and up to 20 vials from large or larger creatures. The vials disappear when the blood in them is dumped out.<br/><br/>

Organs (creature must have organs for this alteration to work): You expend 5 mana per organ (brain, heart, stomach, lungs… etc.) you want to magically remove and preserve with a thin layer around them.<br/><br/>

Glands and Sacs (creature must have venom glands/ink sacs for this alteration to work): You expend 10 mana per gland or sac the creature has and the magic harvests them and preserves them in a magical state so that 1 mana can be expended into it to make the gland or sac produce 1 dose of the product.<br/><br/>

Essences: You expend 20 mana to cause the magic to create an essence of the creature (max 5 essences) that can be used for crafting or absorbing.</p>`,
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
    description: `<p style="margin-top:22%;">You create a missile of force and launch it toward a creature within range. Make an Arcane Attack, on a hit you deal (5)2d4 + your Mind Score force damage. <br /> <br />

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
    name: "Repair",
    level: 1,
    plane: "Time",
    mod: "",
    manaCost: 1,
    castTime: "1 Minute",
    range: "15ft",
    type: "Utility",
    target: "",
    components: "S",
    duration: "Instantaneous",
    description: `You gesture at an object that has been damaged or broken and repair one instance of damage.`,
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
    description: `<p style="margin-top:18%;">You withdraw a memory from your mind, or the mind of a willing creature, and place it within a bowl of water, or bind it to an object. When you do this you give a password to trigger the memory. When the password is said while touching the water or object, the creature experiences the memory as if in the person’s body. Once the memory is done the creature returns to their own body. While a creature is in the memory their body becomes paralyzed until they return.<br/><br/>

Alternatively, instead of withdrawing a memory, you can give the creature advantage on skill checks used to recall details about their memories for 1 minute.</p>`,
  },
  {
    name: "Ritual Lock",
    level: 1,
    plane: "Material",
    mod: "(Ritual)",
    manaCost: 1,
    castTime: "1 Minute",
    range: "Touch",
    type: "Utility",
    target: "",
    components: "V,S,M (1cp worth of Chalk, and 1cp worth of copper shavings)",
    duration: "Until Dispelled/Disabled",
    description: `<p style="margin-top: 1940px;">You draw out the ritual on an object that is able to close (a door, chest, locket, etc.) and make it so that the object cannot be opened through force, or normal methods, including being picked with lock picks. When the ritual is being performed you choose what will unlock the object, it could be as simple as a password, or a specific object or person comes within 5 feet of it, or it could be as complex as a sequence of movements like touching certain parts of the object in a certain order, or spinning around three times then touching the object without looking. Once the ritual is complete the diagram becomes permanent and invisible (a creature can see the ritual diagram if they cast Magic Sight or See Invisibility).<br/><br/>

While you are performing the ritual you are able to add a number of alterations to the ritual equal to half your Arcane Magic Level, and you are able to fuel those alterations by expending the necessary mana up to a total of 100 mana. Choose from:<br/><br/>

Alarm: You add an alarm to the ritual by expending 5 mana to add this alteration, so that if a creature tries to open the object before unlocking or disabling the ritual lock. You choose what the alarm sounds like and it can be heard out to 300 feet. The alarm can be turned off by unlocking or disabling the ritual lock.<br/><br/>

Barrier: You make it so that if anything tries to damage the object a thin barrier of energy protects it. The barrier has a number of Hit Points equal to 2 times the number of mana used to fuel this alteration. The barrier can regain Hit Points at the same rate if a creature expends mana into the ritual while within 5 feet of it up to its maximum Hit Points determined while performing the ritual.<br/><br/>

Distracting: You can expend 1 mana to create an invisible distraction field 5 feet around the object, so that any creature entering into the area must make a Mind Save against a DC 12 or forget about the object and use their movement to move away from it. You can increase the area of the distraction field by 5 feet for every mana used to fuel this alteration. Alternatively you can increase the DC by 1 for every 5 mana used to fuel this alteration (max DC 31).<br/><br/>

Explosive Trap: You add a controlled force explosion into the ritual by expending 5 mana so that if a creature tries to open the object without unlocking or disabling the ritual lock the creature takes 1d4 force damage and is thrown 5 feet away from the object. The ritual has 7 charges before a creature must expend 5 mana into the ritual while within 5 feet of it for the ritual to regain all expended charges. You can increase the damage of each charge by 1d4 for every 5 mana used to fuel this alteration.<br/><br/>

Illusory: You can expend 1 mana to create an illusion around the object, so that the object blends into its surroundings (doors look like a blank wall, or a small chest on a bookshelf looks like books) or you can choose what the illusion will be (making a gold box look like a wooden box). A creature can see through the illusion by making a Perception check against a DC 12. If the object is moved to a different location the magic will automatically shift to create a believable illusion. You can increase the DC by 1 for every 5 mana used to fuel this alteration (max DC 31).<br/><br/>

Poison Trap: You add a poison gas trap into the ritual by expending 5 mana so that if a creature tries to open the object without unlocking or disabling the ritual lock a cloud of poison gas fills the area in a 5 foot diameter sphere centered on the object, that lasts for 1 minute (even if the object is moved, the cloud stays with it for the duration). After the trap goes off a creature must expend 5 mana into the ritual while within 5 feet of it for the ritual to regain its expended charge. While a creature is in the cloud they take 1d4 poison damage at the beginning of their turn and they must make a Durability Save against a DC 12 at the beginning of each of their turns as well or only be able to use an action or bonus action, because they can’t stop retching and reeling. You can increase the DC by 1 for every 5 mana used to fuel this alteration (max DC 31). Or you can increase the diameter of the sphere by 5 feet for every 10 mana used to fuel this alteration (a max diameter of 50 feet).<br/><br/>

Alternatively you can use this ritual to disable a ritual lock permanently or partially (1 hour, up to 24 hours), by performing the ritual within 5 feet of the ritual lock you are wanting to disable. You can identify what alterations are on a lock and how much mana was used to make it by making an Arcana check against a DC 12 + 5 x the number of alterations on the ritual. If you expend equal to or more mana than the lock has, you disable it permanently. You can partially disable the lock by expending half the mana the lock has + 1 mana for each hour you want the lock disabled for (max of 24 hours).</p>`,
  },
  {
    name: "Scale Guard",
    level: 1,
    plane: "Dragon",
    mod: "",
    manaCost: 1,
    castTime: "Reflexive Action",
    range: "Self",
    type: "Protection",
    target: "",
    components: "V",
    duration: "Instanteous",
    description: `When you are targeted by an attack you can use your reflexive action to form dragon scales where you are about to be hit, giving you a bonus to your defense equal to half your Durability Score (minimum of +1) until the beginning of your next turn.`,
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
    components: `V,S,M (quill, ink and paper)`,
    duration: "1 Hour",
    description: `<p style="margin-top:90%;">You touch a quill and imbue it with magic so that it can move on its own. The quill writes whatever you tell it, or whatever is said within 60 feet of it. Alternatively you can spend the full hour to create a common technique scroll for something you are at least level 2 in (you only need to be proficient in armor or techniques to make a scroll for them).<br/><br/>

Empowering: When you empower this spell you increase the rarity of the technique scroll you scribe. You must be the correct level in the thing you are making a scroll for, and spend the necessary time and mana to make the scroll. The rarity, the level you must be in the thing you are making a scroll for, the time it takes and the mana needed are as follows:<br/><br/>

Common: must be level 2, spend 1 hour and 1 mana.<br/>
Uncommon: must be level 4, spend 2 hours and 3 mana.<br/>
Rare: must be level 6, spend 4 hours and 5 mana.<br/>
Epic: must be level 8, spend 6 hours and 7 mana.<br/>
Legendary: must be level 10, spend 8 hours and 9 mana.<br/></p>`,
  },
  {
    name: "Spectral Eye",
    level: 1,
    plane: "Ethereal",
    mod: "",
    manaCost: 1,
    castTime: "Action",
    range: "60ft",
    type: "Utility",
    target: "",
    components: "V,S,M (an Eyeball)",
    duration: "1 Minute Concentration",
    description: `You touch the eye used to cast the spell and it becomes invisible, and you become blind and are only able to see through the invisible eyeball, which has a flying speed of 15 feet. For the duration you can use your bonus action to control the eyeball, and it can squeeze through any hole that is 1 inch in diameter. The eye must stay within range of you and can’t see or get close to anyone or anything protected from scrying.<br/><br/>

Empowering: When you empower this spell, you increase the range by 30 feet for each mana used to empower the spell.`,
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
    name: "Speed Tunnel",
    level: 1,
    plane: "Time",
    mod: "",
    manaCost: 1,
    castTime: "Bonus Action",
    range: "30ft",
    type: "AOE, Utility",
    target: "multiple",
    components: "V,S",
    duration: "1 Minute Concentration",
    description: `You create a tunnel of sped up time in an unoccupied area that is 15 feet long and 5 feet wide. A creature that moves into the tunnel is able to move the length/width of the tunnel without using any movement, as the tunnel propels the creature from one end to the other in the blink of an eye. If the tunnel ends at a wall or something similar, any creature that moves through the tunnel takes 1d6 collision damage for every 10 feet they are moved.<br/><br/>

Empowering: When you empower this spell, you increase the length of the speed tunnel by 15 for each mana used to empower the spell.`,
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
    description: `<p style="margin-top:52%;">You create three darts of stunning energy. Each dart hits a creature of your choice that you can see within range. The darts all strike simultaneously and you can direct them to hit one creature or several.<br/><br/>

When a dart strikes a creature it must make a Durability Save against your Arcane DC or be stunned until the beginning of their next turn. If two darts strike the same creature your Arcane DC has a +2 added to it. If three darts strike the same creature your Arcane DC has a +5 added to it; if the target[s] fail their Durability Save by 5 or more they become stunned for 1 minute. Every time they take damage they can make a Durability Save against your normal Arcane DC, ending the stunned effect on a success.<br/><br/>

Empowering: When you empower this spell, you increase the number of darts by 1 for each mana used to empower the spell.</p>`,
  },
  {
    name: "Temporal Glimpse",
    level: 1,
    plane: "Time",
    mod: "",
    manaCost: 1,
    castTime: "Bonus/Reflexive Action",
    range: "self",
    type: "Buff, Debuff",
    target: "",
    components: "V",
    duration: "1 Round",
    description: `When you cast the spell you glimpse a few seconds into the future allowing you to adjust slightly to change it. You gain advantage on your next roll before the end of your next turn. Alternatively if a creature targets you with an attack or spell you, and you can see the attack or spell coming, you can cast this spell as a reflexive action to give the creature disadvantage on the attack, or give yourself advantage on an Ability Save`,
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
    name: "Will-o'-the-Wisp",
    level: 1,
    plane: "Ethereal",
    mod: "",
    manaCost: 1,
    castTime: "Action",
    range: "120ft",
    type: "Utility",
    target: "single",
    components: "V,S",
    duration: "1 Hour",
    description: `<p style="margin-top:28%;">You call a will-o’-the-wisp into the material plane and it appears within 30 feet of you, and appears as a tiny ball of brilliant colored flames floating in the air, that gives off an eerie light out to 10 feet. For the duration the little spirit obeys your commands and has a flying speed equal to your movement speed, but must stay within range of you (it can follow simple commands like lead us north, stay within 10 feet of me, or touch the first enemy we come across… etc.). If a creature comes in contact with the wisp it explodes and the creature must make a Durability Save against your Arcane DC or take (5)2d4 + your Mind Score necrotic damage (half as much on a success). The spell ends if you dismiss the wisp, if you cast the spell again, or if the wisp comes in contact with a creature and explodes.</p>`,
  },
];
const arcaneSpells2 = [
  // Absorb Energy - Dragon
  {
    name: "Absorb Energy",
    level: 2,
    plane: "Dragon",
    mod: "",
    manaCost: 2,
    castTime: "Reflexive Action",
    range: "Self",
    type: "Protection, Utility",
    target: "",
    components: "V,S",
    duration: "1 Round",
    description: `<p style="margin-top: 88%;">When you are subject to acid, ice, fire, force, lightning, necrotic, poison, radiant, or thunder damage, you absorb damage equal to 5 x the number of mana used to cast the spell. On your next turn you can use an action to use the energy in one of the following ways:<br/><br/>

Convert You convert the energy absorbed into usable mana. You gain 1 mana for every 20 damage absorbed.<br/><br/>

Redirect You concentrate the energy and redirect it at a target you can see within 30 feet of you. Make an Arcane Attack, on a hit you deal half the damage you absorbed (rounded down).<br/><br/>

Protection You surround yourself with the energy you absorbed, gaining Temporary Hit Points equal to half the damage absorbed (rounded down)<br/><br/>

Empowering: When you empower this spell, you increase the amount of damage you can absorb by 5 for each mana used to empower the spell.</p>`,
  },
  // Air Bubble Ritual - Material
  // Barrier Ritual - Material
  // Bound Weapon - Eldritch
  {
    name: "Bound Weapon",
    level: 2,
    plane: "Eldritch",
    mod: "",
    manaCost: 2,
    castTime: "Action",
    range: "Touch",
    type: "Utility",
    target: "",
    components: "V,M (a thrown Weapon)",
    duration: "24 Hours",
    description: `<p>You touch a thrown weapon and bind it to you so that when you throw it it immediately returns to your hand. If a creature other than you throws it, it doesn’t return to them.</p>`,
  },
  // Comprehend Languages - Eldritch
  {
    name: "Comprehend Languages",
    level: 2,
    plane: "Eldritch",
    mod: "",
    manaCost: 2,
    castTime: "Action",
    range: "Touch",
    type: "Utility",
    target: "single",
    components: "V",
    duration: "1 Hour",
    description: `<p>You pull on the knowledge of the planes to give yourself or a willing creature that you touch the ability to read, understand and speak any language as if it were common.<br/><br/>

Empowering: When you empower this spell, you increase the duration by 1 hour for each mana used to empower the spell.</p>`,
  },
  // Damage Transmutation Ritual - Material
  // Dragon Breath - Dragon
  {
    name: "Dragon Breath",
    level: 2,
    plane: "Dragon",
    mod: "",
    manaCost: 2,
    castTime: "Action",
    range: "30ft",
    type: "Energy",
    target: "multiple",
    components: "V,S",
    duration: "1 Hour",
    description: `<p style="margin-top: 37%;">You touch a willing creature and they gain a breath weapon that can be used as an action, you choose if it is a 15-foot cone, or a 30-foot line, all creatures in the area must make a save against your Arcane DC, the save is based on the damage type. When you cast the spell choose a damage type from: acid (Power Save), ice (Durability Save), fire (Power Save), force (Power Save), lightning (Power Save), necrotic (Mind Save), poison (Durability Save), psychic (Mind Save), radiant (Power Save), or thunder (Durability Save). For the duration the creature can use their action to expend any number of mana up to half their Durability Score (minimum of 1) to deal 1d8 for each mana expended + their Durability Score of the chosen damage type to each of the creatures in the area.</p>`,
  },
  // Excavation Ritual - Material
  // Gildal's Mark - Ethereal
  {
    name: "Gildal's Mark",
    level: 2,
    plane: "Ethereal",
    mod: "",
    manaCost: 2,
    castTime: "Bonus Action",
    range: "60ft",
    type: "Buff, Debuff",
    target: "Single",
    components: "V,S",
    duration: "1 Hour Concentration",
    description: `<p style="margin-top: 2%;">You mark a creature you can see within range as your quarry. The mark pulls you toward the creature, giving you disadvantage on attacks against other creatures. Each time you deal damage to the marked creature you deal an additional 1d4 force, necrotic or radiant damage (your choice). As a bonus action you can move your mark to a different creature within range. If the marked creature turns invisible or attempts to hide you know where they are and can target them as normal.</p>`,
  },
  // Hover - Space
  {
    name: "Hover",
    level: 2,
    plane: "Dragon",
    mod: "",
    manaCost: 2,
    castTime: "Action",
    range: "15ft",
    type: "Buff, Utility",
    target: "single",
    components: "V,S",
    duration: "Instantaneous",
    description: `<p style="margin-top: 5%;">You bend the space around a willing creature you can see within range and give them a hover speed equal to their walking speed, and they can hover up to 15 feet off the ground, making them immune to the prone condition, and they resist collision damage from falling.<br/><br/>

Empowering: When you empower this spell, you increase the number of creatures you can target by 1 for each mana used to empower the spell.</p>`,
  },
  // Magic Lock - Arcane
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
    duration: "Instantaneous",
    description: `<p style="margin-top: 450px;">You magically enhance a single lock that you touch. When you cast the spell choose a password that will open the lock when spoken within 10 feet of the lock. Choose from one of the magical enhancements to apply to the lock.<br/><br/>

Illusory: When you cast the spell on the lock, the lock vanishes and an illusionary duplicate appears on the opposite side of the object the lock is on (if the door handle is on the right side it vanishes and appears on the left side of the door). A successful Perception Check against your Arcane DC + the number of mana used to cast the spell, reveals that it is an illusion, and the creature can see the other handle.<br/><br/>

Intricate You make the lock a lot more difficult to open with anything other than the password (not even the original key works in it). The DC to pick the lock gains a bonus equal to the number of mana used to cast the spell. <br/><br/>

Trapped You bind a level 1 spell to the lock, and the first time a creature attempts to open the lock without using the password the spell is triggered, and targets the creature trying to open the lock. The damage dealt is equal to the spells original damage + the number of mana used to cast the spell.<br/><br/>

Empowering: When you empower this spell, you increase the bonuses to the lock by 1 for each mana used to empower the spell.</p>`,
  },
  // Magic Sight - Arcane
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
    description: `<p style="margin-top: 28%;">Your eyes glow with arcane energy, allowing you to see the auras given off by magic within 60 feet of you. Any magical creature, weapon or object will have an aura. You can determine whether it is Arcane, Faith and/or Nature magic, and gain a general idea of how much mana is in the magical creature, weapon or object. Creatures and objects protected from scrying appear as if they aren’t magical. Invisible creatures are still invisible to this spell.<br/><br/>

Empowering: When you empower this spell you increase the distance you can see by 15 feet for each mana used to empower the spell.</p>`,
  },
  // Mind Sliver - Arcane
  {
    name: "Mind Sliver",
    level: 2,
    plane: "Arcane",
    mod: "",
    manaCost: 2,
    castTime: "Action",
    range: "120ft",
    type: "Utility",
    target: "single/multi",
    components: "V,S",
    duration: "1 Hour",
    description: `<p style="margin-top: 38%;">You create a sliver of arcane magic and send it into the mind of a creature you can see within range. The target must make a Mind Save against your Arcane DC. On a failure you know the location of the creature for the duration (as long as they are on the same plane as you). If you spend one minute concentrating on the connection you can see through their eyes, and hear through their ears; at which time you are blind and deaf until you choose to stop focusing on the connection.<br/><br/>

Empowering: When you empower this spell you increase the number of creatures you can target by 1 for each mana used to empower the spell. You can still only focus on seeing and listening in on one creature at a time.</p>`,
  },
  // Mirth's Bizarre Floating Disk - Space
  {
    name: "Mirth's Bizarre Floating Disk",
    level: 2,
    plane: "Space",
    mod: "",
    manaCost: 2,
    castTime: "BonusAction",
    range: "15ft",
    type: "Utility, Protection",
    target: "",
    components: "V,S",
    duration: "1 Hour Concentration",
    description: `<p style="margin-top: 21%;">You create a transparent floating disk that is 5 feet in diameter, 6 inches thick, hovers 1 foot off the ground, and always stays within 15 feet of you. As you move the disk moves with you to stay within 15 feet, but as a bonus action you can take control of the disk to move it, or make it stand vertically, giving ¾ cover from 1 direction. The disk can hold 500 pounds before it starts to sink to the ground.<br/><br/>

Empowering: When you empower this spell, you increase the diameter by 5 feet (you gain full cover), and the weight the disk can hold by 500 pounds for each mana used to empower the spell.</p>`,
  },
  // Mysterious Disappearance - Ethereal
  {
    name: "Mysterious Disappearance",
    level: 2,
    plane: "Ethereal",
    mod: "",
    manaCost: 2,
    castTime: "Action",
    range: "Self",
    type: "Buff, Utility",
    target: "",
    components: "V,S",
    duration: "a number of rounds equal to half your Mind Score (minimum of 1)",
    description: `<p>You create a cloud of mist around yourself and turn invisible for the duration. The invisibility ends early if you make a weapon attack, or cast a spell.</p>`,
  },
  // Portal Strike - Space
  {
    name: "Portal Strike",
    level: 2,
    plane: "Space",
    mod: "",
    manaCost: 2,
    castTime: "Bonus Action",
    range: "30ft",
    type: "Buff, Utility",
    target: "single",
    components: "V,S",
    duration: "Instantaneous",
    description: `<p style="margin-top: 8%;">You open a small portal in front of you that only you can see, just big enough to swing a weapon through it, and open a corresponding portal up in front of a creature you can see within range, so that your weapon attacks hit the creature as if you were standing in front of the creature. All of your attacks are made with advantage as if you are invisible, then both portals close.<br/><br/>

Empowering: When you empower this spell, you increase the range by 15 feet for each mana used to empower the spell.</p>`,
  },
  // Quarion's Overcharging Ritual - Material
  // Quo's Item Swap - Space
  {
    name: "Quo's Item Swap",
    level: 2,
    plane: "Space",
    mod: "",
    manaCost: 2,
    castTime: "Bonus Action",
    range: "30ft",
    type: "Utility",
    target: "",
    components:
      "S,M (an object that is no more than 1 pound different than the target item)",
    duration: "Instantaneous",
    description: `<p style="margin-top: 5%;">You target an object that weighs no more than 10 pounds, that isn’t being worn or stuck/bolted to a larger object, and magically swap it for the object you are holding. If a creature is holding the object when you a attempt to swap items they can make a Power Save against your Arcane DC to hold onto the item.<br/><br/>

Empowering: When you empower this spell, you increase the range by 15 feet for each mana used to empower the spell.</p>`,
  },
  // Retrace - Time
  {
    name: "Retrace",
    level: 2,
    plane: "Time",
    mod: "",
    manaCost: 2,
    castTime: "Bonus/Reflexive Action",
    range: "30ft",
    type: "Utility",
    target: "single",
    components: "V,S",
    duration: "Instantaneous",
    description: `<p>After moving at least 15 feet, you can cast this spell as a bonus action to retrace your steps to where you were at the beginning of your turn in a blink of an eye. This spell doesn’t provoke reflexive attacks. Alternatively, you can target a creature you can see within range that has moved at least 15 feet, and use your reflexive action to cast the spell, forcing the creature to make a Mind Save against your Arcane DC or have their steps retraced back to where they were at the beginning of their turn (a creature can choose to fail the save).</p>`,
  },
  // Reversal - Arcane
  {
    name: "Reversal",
    level: 2,
    plane: "Arcane",
    mod: "",
    manaCost: 2,
    castTime: "Reflexive Action",
    range: "15ft",
    type: "Utility",
    target: "",
    components: "S",
    duration: "Instantaneous",
    description: `<p style="margin-top: 10%;">If you or an ally within range are hit by a single or multi target spell that requires an attack roll, you can attempt to reflect the spell back at the caster. You reduce the damage of the spell by (11)2d10 + your Mind Score. If you reduce the damage to 0 you send the spell back at the caster, make an Arcane Attack, on a hit you deal the same damage you would have taken.<br/><br/>

Empowering: When you empower this spell, you increase the number of damage you can reduce by (5)1d10 for each mana used to empower the spell.</p>`,
  },
  // Reverse Injury - Time
  {
    name: "Reverse Injury",
    level: 2,
    plane: "Time",
    mod: "",
    manaCost: 2,
    castTime: "1 Minute",
    range: "Touch",
    type: "Healing",
    target: "single",
    components: "V,S",
    duration: "Instantaneous",
    description: `<p>You focus on an injury that happened in the last 24 hours. Isolating the injury in a time bubble, you reverse time within the bubble. The injured creature recovers a number of Hit Points equal to (11)2d10 + your Mind Score. This spell can reattach missing limbs.<br/><br/>

Empowering: When you empower this spell, you increase the HP recovered by (5)1d10 for each mana used to empower the spell.</p>`,
  },
  // Slow Fall - Space
  {
    name: "Slow Fall",
    level: 2,
    plane: "Space",
    mod: "",
    manaCost: 2,
    castTime: "Bonus/Reflexive Action",
    range: "30ft",
    type: "Protection",
    target: "multiple",
    components: "V,S",
    duration: "1 Minute",
    description: `<p>You manipulate the gravity around up to 4 creatures you can see within range, so that for the duration when they fall, they fall at a controlled rate and don’t take collision damage when they land.<br/><br/>

Empowering: When you empower this spell, you increase the number of creatures you can target by 2 for each mana used to empower the spell.</p>`,
  },
  // Summon Automaton - Arcane
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
    description: `<p style="margin-top: 1190px;">You summon an automaton within range. The automaton is a tiny steam powered robot that you can use magic to alter to give them different attacks, movement speeds, and more. When you cast the spell you summon a tiny automaton (you choose what the automaton looks like). The automaton has: a number of HP equal to your Mind Score (minimum of 1), a 20 feet movement speed, and each of its Ability Scores is equal to your Mind Score, and they are immune to poison and psychic damage. When you cast the spell choose 2 of the following traits for your automaton to have:<br/><br/>

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
  // Summon Minor Alien - Space
  {
    name: "Summon Minor Alien",
    level: 2,
    plane: "Space",
    mod: "",
    manaCost: 2,
    castTime: "Action",
    range: "30ft",
    type: "Summon",
    target: "",
    components: "V,S",
    duration: "24 Hours",
    description: `<p style="margin-top: 1020px;">You summon an alien within range. You can use magic to alter them to give them different attacks, movement speeds, and more. When you cast the spell you summon a tiny alien (you choose which type of alien you summon). The alien has: immunity to fire and ice damage, a number of HP equal to your Mind Score (minimum of 1), a 20 feet flying speed, and each of its Ability Scores is equal to your Mind Score. Choose which type of alien you summon:<br/><br/>

Armor Fish has natural armor so it can add your Mind Score to its defense, and it can shoot slag at a creature it can see within 15 feet of it dealing (2)1d4 fire damage on a hit. Meteor Muncher has natural armor so it can add your Mind Score to its defense, and it does critical damage to objects. Oxygen Jelly creates a bubble of oxygen 5 feet around itself, and its attacks deal an additional (2)1d4 radiant damage. Pseudo Kanuki resists necrotic and psychic damage, and when it bites a creature it can transform into one of the creature’s weapons (using its defense while in that form) it can stay in that form for 1 minute, maintaining concentration as if concentrating on a spell. Space Worm resists physical damage, and resists radiant damage.<br/><br/>

As a bonus action you can give the summons under your command a single command, and they do their best to follow your instructions. If you don’t give a command they defend themselves. The alien can make a single unarmed attack using your Nature Attack, dealing (2)1d4 + your Mind Score blunt, piercing or slashing damage (your choice when you summon it).<br/><br/>

The maximum number of summons you can have under your control is equal to your Mind Score (minimum of 1). When the spell ends the summons becomes hostile toward you and your allies, unless you cast the spell on it again (using the same amount of mana used to summon it). Before the spell ends you can use an action to dismiss the summon.<br/><br/>

Empowering: When you empower this spell, you can modify your summon with 1 of the following options for each mana used to empower the spell. Choose from:<br/><br/>

An extra attack (max of 4 attacks)<br/>
Increase the alien one size category (max size is large. Increases movement speed by 5 feet, and the number of damage dice to 2 for large)<br/>
Increase damage die (increases from d4 to d6, and d6 to d8. Max of d12)<br/>
Increase base movement speed by 10 feet (max of 70)<br/>
Increase HP level by 2 (the beast’s health = Mind Score x HP level + Mind Score. Max level is 10)</p>`,
  },
  // Summon Spirit - Ethereal
  {
    name: "Summon Spirit",
    level: 2,
    plane: "Ethereal",
    mod: "",
    manaCost: 2,
    castTime: "Action",
    range: "30ft",
    type: "Summon",
    target: "",
    components: "V,S",
    duration: "24 Hours",
    description: `<p style="margin-top: 1480px;">You summon a spirit within range. The spirit appears as a ghost of a creature of your choice, you can use magic to alter them to give them different attacks, movement speeds, and more. When you cast the spell you summon a tiny spirit (you choose what the spirit looks like). The spirit has: a number of HP equal to your Mind Score (minimum of 1), a 20 feet flying speed, and each of its Ability Scores is equal to your Mind Score. All spirits have the same first trait but depending on what type of spirit you summon it has a different second trait:<br/><br/>

First Trait: The spirit passes through solid objects, making it resist physical weapon attacks, and the spirit deals necrotic damage.<br/><br/>

Ghost: As an action the spirit can change its form to look like a creature it can see within 30 feet of it. While in its new form it can copy one of the creature’s special traits.<br/><br/>

Phantom: As an action the spirit can force a creature it can see within 30 feet of it to make a Mind Save against the summoner’s Arcane DC or become frightened of either the phantom or the summoner (summoner’s choice). The creature is afraid for 1 minute, but can remake the save whenever they take damage or are out of line of sight (ending the effects on a success).<br/><br/>

 Stalker: The stalker is always invisible, and can move twice as far from the summoner than normal summons.<br/><br/>

Possessor: As an action the spirit can attempt to possess a living creature. The creature must make a Mind Save against the summoner’s Arcane DC or become possessed by the spirit. a possessed creature falls under the summoner’s command as if they are a summoned creature (acting on the summoner’s turn). The creature can remake the save at the beginning of each of their turns, and whenever they take damage (ending the effects on a success).<br/><br/>

Poltergeist: The spirit can use an action to possess an object that is its same size or smaller. While in an object the spirit gains a number of temporary Hit Points equal to the summoner’s Mind Score, and it can remain in the object until it uses an action to leave, or its temporary Hit Points are reduced to 0.<br/><br/>

As a bonus action you can give the summons under your command a single command, and they do their best to follow your instructions. If you don’t give a command they defend themselves. The spirit can make a single unarmed attack using your Nature Attack, dealing 1d4 + your Mind Score necrotic damage.<br/><br/>

The maximum number of summons you can have under your control is equal to your Mind Score (minimum of 1). When the spell ends the summons becomes hostile toward you and your allies, unless you cast the spell on it again (using the same amount of mana used to summon it). Before the spell ends you can use an action to dismiss the summon.<br/><br/>

Empowering: When you empower this spell, you can modify your summon with 1 of the following options for each mana used to empower the spell. Choose from:<br/><br/>

An extra attack (max of 4 attacks)<br/>
Increase the spirit one size category (max size is huge. Increases movement speed by 5 feet, and the number of damage dice to 2 for large and 4 for huge)<br/>
Increase damage die (increases from d4 to d6, and d6 to d8. Max of d12)<br/>
Increase base movement speed by 10 feet (max of 70)<br/>
Increase HP level by 2 (the spirit’s health = Mind Score x HP level + Mind Score. Max level is 10)</p>`,
  },
  // Tordek's Gravity Strike - Space
  {
    name: "Tordek's Gravity Strike",
    level: 2,
    plane: "Space",
    mod: "",
    manaCost: 2,
    castTime: "Reflexive Action",
    range: "Self",
    type: "Buff, Protection",
    target: "",
    components: "V,S,M (a weapon)",
    duration: "Instantaneous",
    description: `<p>If you fall at least 10 feet before making a weapon attack on a creature, you can cast this spell to transfer all of the collision damage you would have taken to the creature on a hit. You land gently within 5 feet of the creature whether you hit or miss with the attack.</p>`,
  },
  // Warp - Space
  {
    name: "Warp",
    level: 2,
    plane: "Space",
    mod: "",
    manaCost: 2,
    castTime: "Bonus Action",
    range: "Self",
    type: "Utility",
    target: "",
    components: "S",
    duration: "Instantaneous",
    description: `<p>You bend space to shorten the distance between you and a point within 30 feet of you, that you can see, and that is able to support you.<br/><br/>

Empowering: When you empower this spell, you increase the distance you can warp by 15 feet for each mana used to empower the spell.</p>`,
  },
  // X-Ray Vision - Ethereal
  {
    name: "X-Ray Vision",
    level: 2,
    plane: "Ethereal",
    mod: "",
    manaCost: 2,
    castTime: "Bonus Action",
    range: "Self",
    type: "Utility",
    target: "",
    components: "V,S",
    duration: "1 Minute Concentration",
    description: `<p>When you cast the spell, all objects within 60 of you become transparent to you, allowing you to see through them for the duration of the spell.</p>`,
  },
];
const arcaneSpells3 = [
  // Age - Time
  {
    name: "Age",
    level: 3,
    plane: "Time",
    mod: "",
    manaCost: 3,
    castTime: "Action",
    range: "Self",
    type: "Buff, Utility",
    target: "Single",
    components: "V,S",
    duration: "8 Hours",
    description: `<p style="margin-top:1000px;">You touch a willing creature, and age them up to 20 years for the duration. Not only does the creature's appearance change, but for the duration they gain a number of temporary Hit Points equal to your Mind Score and a +2 bonus to an Ability Score of their choice (can't go above level 10)</p>`,
  },
  // Arwyl's Compass - Arcane
  {
    name: "Arwyl's Compass",
    level: 3,
    plane: "Arcane",
    mod: "",
    manaCost: 3,
    castTime: "Reflexive Action",
    range: "Self",
    type: "Protection, Utility",
    target: "SIngle",
    components: "V,S",
    duration: "1 Round",
    description: `<p style="margin-top:62%;"></p>`,
  },
  // Bartholomew's Statuette - Eldritch
  {
    name: "Bartholomew's Statuette",
    level: 3,
    plane: "Eldricth",
    mod: "",
    manaCost: 3,
    castTime: "Reflexive Action",
    range: "Self",
    type: "Protection, Utility",
    target: "",
    components: "V,S",
    duration: "1 Round",
    description: `<p style="margin-top:62%;"></p>`,
  },
  // Cole's Dragon weapon - Dragon
  {
    name: "Cole's Dragon weapon",
    level: 3,
    plane: "Dragon",
    mod: "",
    manaCost: 3,
    castTime: "Reflexive Action",
    range: "Self",
    type: "Protection, Utility",
    target: "",
    components: "V,S",
    duration: "1 Round",
    description: `<p style="margin-top:62%;"></p>`,
  },
  // Counter Spell - Arcane
  {
    name: "Counter Spell",
    level: 3,
    plane: "Arcane",
    mod: "",
    manaCost: 3,
    castTime: "Reflexive Action",
    range: "Self",
    type: "Protection, Utility",
    target: "",
    components: "V,S",
    duration: "1 Round",
    description: `<p style="margin-top:62%;"></p>`,
  },
  // Crafting Ritual - Material
  {
    name: "Crafting Ritual",
    level: 3,
    plane: "Material",
    mod: "",
    manaCost: 3,
    castTime: "Reflexive Action",
    range: "Self",
    type: "Protection, Utility",
    target: "",
    components: "V,S",
    duration: "1 Round",
    description: `<p style="margin-top:62%;"></p>`,
  },
  // Daylen's Undead Servant - Material
  {
    name: "Daylen's Undead Servant",
    level: 3,
    plane: "Material",
    mod: "",
    manaCost: 3,
    castTime: "Reflexive Action",
    range: "Self",
    type: "Protection, Utility",
    target: "",
    components: "V,S",
    duration: "1 Round",
    description: `<p style="margin-top:62%;"></p>`,
  },
  // Deflecting Missile - Arcane
  {
    name: "Deflecting Missile",
    level: 3,
    plane: "Arcane",
    mod: "",
    manaCost: 3,
    castTime: "Reflexive Action",
    range: "Self",
    type: "Protection, Utility",
    target: "",
    components: "V,S",
    duration: "1 Round",
    description: `<p style="margin-top:62%;"></p>`,
  },
  // Dispel Magic - Arcane
  {
    name: "Dispel magic",
    level: 3,
    plane: "Arcane",
    mod: "",
    manaCost: 3,
    castTime: "Reflexive Action",
    range: "Self",
    type: "Protection, Utility",
    target: "",
    components: "V,S",
    duration: "1 Round",
    description: `<p style="margin-top:62%;"></p>`,
  },
  // Dragon flight - Dragon
  {
    name: "Dragon Flight",
    level: 3,
    plane: "Dragon",
    mod: "",
    manaCost: 3,
    castTime: "Reflexive Action",
    range: "Self",
    type: "Protection, Utility",
    target: "",
    components: "V,S",
    duration: "1 Round",
    description: `<p style="margin-top:62%;"></p>`,
  },
  // Flick - Space
  {
    name: "Flick",
    level: 3,
    plane: "Space",
    mod: "",
    manaCost: 3,
    castTime: "Reflexive Action",
    range: "Self",
    type: "Protection, Utility",
    target: "",
    components: "V,S",
    duration: "1 Round",
    description: `<p style="margin-top:62%;"></p>`,
  },
  // Mirth's Magical Misplacement - Space
  {
    name: "Mirth's Magical Misplacement",
    level: 3,
    plane: "Space",
    mod: "",
    manaCost: 3,
    castTime: "Reflexive Action",
    range: "Self",
    type: "Protection, Utility",
    target: "",
    components: "V,S",
    duration: "1 Round",
    description: `<p style="margin-top:62%;"></p>`,
  },

  // Pass - Ethereal
  {
    name: "Pass",
    level: 3,
    plane: "Ethereal",
    mod: "",
    manaCost: 3,
    castTime: "Reflexive Action",
    range: "Self",
    type: "Protection, Utility",
    target: "",
    components: "V,S",
    duration: "1 Round",
    description: `<p style="margin-top:62%;"></p>`,
  },
  // Phase - Ethereal
  {
    name: "Phase",
    level: 3,
    plane: "Ethereal",
    mod: "",
    manaCost: 3,
    castTime: "Reflexive Action",
    range: "Self",
    type: "Protection, Utility",
    target: "",
    components: "V,S",
    duration: "1 Round",
    description: `<p style="margin-top:62%;"></p>`,
  },
  // Pocket Dimension - Space
  {
    name: "Pocket Dimension",
    level: 3,
    plane: "Space",
    mod: "",
    manaCost: 3,
    castTime: "Reflexive Action",
    range: "Self",
    type: "Protection, Utility",
    target: "",
    components: "V,S",
    duration: "1 Round",
    description: `<p style="margin-top:62%;"></p>`,
  },
  // Retake - Time
  {
    name: "Retake",
    level: 3,
    plane: "Time",
    mod: "",
    manaCost: 3,
    castTime: "Reflexive Action",
    range: "Self",
    type: "Protection, Utility",
    target: "",
    components: "V,S",
    duration: "1 Round",
    description: `<p style="margin-top:62%;"></p>`,
  },
  // See Invisibility - Ethereal
  {
    name: "See Invisibility",
    level: 3,
    plane: "Ethereal",
    mod: "",
    manaCost: 3,
    castTime: "Reflexive Action",
    range: "Self",
    type: "Protection, Utility",
    target: "",
    components: "V,S",
    duration: "1 Round",
    description: `<p style="margin-top:62%;"></p>`,
  },
  // Shared Skill - Eldritch
  {
    name: "Shared Skill",
    level: 3,
    plane: "Eldritch",
    mod: "",
    manaCost: 3,
    castTime: "Reflexive Action",
    range: "Self",
    type: "Protection, Utility",
    target: "",
    components: "V,S",
    duration: "1 Round",
    description: `<p style="margin-top:62%;"></p>`,
  },
  // Shift Gravity - Space
  {
    name: "Shift Gravity",
    level: 3,
    plane: "Space",
    mod: "",
    manaCost: 3,
    castTime: "Reflexive Action",
    range: "Self",
    type: "Protection, Utility",
    target: "",
    components: "V,S",
    duration: "1 Round",
    description: `<p style="margin-top:62%;"></p>`,
  },
  // Silence - Space
  {
    name: "Silence",
    level: 3,
    plane: "Space",
    mod: "",
    manaCost: 3,
    castTime: "Reflexive Action",
    range: "Self",
    type: "Protection, Utility",
    target: "",
    components: "V,S",
    duration: "1 Round",
    description: `<p style="margin-top:62%;"></p>`,
  },
  // Skybound Ritual - Material
  {
    name: "Skybound Ritual",
    level: 3,
    plane: "Material",
    mod: "",
    manaCost: 3,
    castTime: "Reflexive Action",
    range: "Self",
    type: "Protection, Utility",
    target: "",
    components: "V,S",
    duration: "1 Round",
    description: `<p style="margin-top:62%;"></p>`,
  },
  // Slow Bubble - Time
  {
    name: "Slow Bubble",
    level: 3,
    plane: "Time",
    mod: "",
    manaCost: 3,
    castTime: "Reflexive Action",
    range: "Self",
    type: "Protection, Utility",
    target: "",
    components: "V,S",
    duration: "1 Round",
    description: `<p style="margin-top:62%;"></p>`,
  },
  // Sonic Wave - Space
  {
    name: "Sonic Wave",
    level: 3,
    plane: "Space",
    mod: "",
    manaCost: 3,
    castTime: "Reflexive Action",
    range: "Self",
    type: "Protection, Utility",
    target: "",
    components: "V,S",
    duration: "1 Round",
    description: `<p style="margin-top:62%;"></p>`,
  },
  // Speed Bubble
  {
    name: "Speed Bubble",
    level: 3,
    plane: "Time",
    mod: "",
    manaCost: 3,
    castTime: "Reflexive Action",
    range: "Self",
    type: "Protection, Utility",
    target: "",
    components: "V,S",
    duration: "1 Round",
    description: `<p style="margin-top:62%;"></p>`,
  },
  // Summon Beast - Material
  {
    name: "Summon Beast",
    level: 3,
    plane: "Material",
    mod: "",
    manaCost: 3,
    castTime: "Reflexive Action",
    range: "Self",
    type: "Protection, Utility",
    target: "",
    components: "V,S",
    duration: "1 Round",
    description: `<p style="margin-top:62%;"></p>`,
  },
  // Summon Warriors - Material
  {
    name: "Summon Warriors",
    level: 3,
    plane: "Material",
    mod: "",
    manaCost: 3,
    castTime: "Reflexive Action",
    range: "Self",
    type: "Protection, Utility",
    target: "",
    components: "V,S",
    duration: "1 Round",
    description: `<p style="margin-top:62%;"></p>`,
  },
  // The Shadows Mask - Eldritch
  {
    name: "The Shadows Mask",
    level: 3,
    plane: "Eldritch",
    mod: "",
    manaCost: 3,
    castTime: "Reflexive Action",
    range: "Self",
    type: "Protection, Utility",
    target: "",
    components: "V,S",
    duration: "1 Round",
    description: `<p style="margin-top:62%;"></p>`,
  },
  // Trance - Arcane
  {
    name: "Trance",
    level: 3,
    plane: "Arcane",
    mod: "",
    manaCost: 3,
    castTime: "Reflexive Action",
    range: "Self",
    type: "Protection, Utility",
    target: "",
    components: "V,S",
    duration: "1 Round",
    description: `<p style="margin-top:62%;"></p>`,
  },
];
const arcaneSpells4 = [];
const arcaneSpells5 = [];

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

let flipped = false;
let sameCard = "";

// Shelf Functions

function generateShelf() {
  hideFilter();
  generateSpellLvl0();
  generateSpellLvl1();
  generateSpellLvl2();
}

function generateSpellLvl0() {
  let length = arcaneSpells0.length;
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * arcaneSpines.length);
    const selectedSpine = arcaneSpines[randomIndex];
    let p = document.createElement("p");
    p.innerText = `${arcaneSpells0[i].name} - || - ${arcaneSpells0[i].plane} Plane`;
    p.value = i;
    p.classList.add("spell", `${arcaneSpells0[i].plane}`);
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
  let length = arcaneSpells1.length;
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * arcaneSpines.length);
    const selectedSpine = arcaneSpines[randomIndex];
    let p = document.createElement("p");
    p.innerText = `${arcaneSpells1[i].name} - || - ${arcaneSpells1[i].plane} Plane`;
    p.value = i;
    p.classList.add("spell", `${arcaneSpells1[i].plane}`);
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
  let length = arcaneSpells2.length;
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * arcaneSpines.length);
    const selectedSpine = arcaneSpines[randomIndex];
    let p = document.createElement("p");
    p.innerText = `${arcaneSpells2[i].name} - || - ${arcaneSpells2[i].plane} Plane`;
    p.value = i;
    p.classList.add("spell", `${arcaneSpells2[i].plane}`);
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

// Card & Display Functions

function displaySpell() {
  if (currentArray === "lvl0") {
    spellName.innerText = arcaneSpells0[displayedSpell].name;
    spellLevel.innerText = `Level ${arcaneSpells0[displayedSpell].level}`;
    spellPlane.innerText = arcaneSpells0[displayedSpell].plane;
    spellMod.innerText = arcaneSpells0[displayedSpell].mod;
    spellCost.innerText = `Mana Cost: ${arcaneSpells0[displayedSpell].manaCost}`;
    spellCastTime.innerText = `Cast Time: ${arcaneSpells0[displayedSpell].castTime}`;
    spellRange.innerText = `Range: ${arcaneSpells0[displayedSpell].range}`;
    spellType.innerText = `Type: ${arcaneSpells0[displayedSpell].type}`;
    spellComponents.innerHTML = `Components: ${arcaneSpells0[displayedSpell].components}`;
    spellDuration.innerText = `Duration: ${arcaneSpells0[displayedSpell].duration}`;
    spellDescription.innerHTML = arcaneSpells0[displayedSpell].description;
  }
  if (currentArray === "lvl1") {
    spellName.innerText = arcaneSpells1[displayedSpell].name;
    spellLevel.innerText = `Level: ${arcaneSpells1[displayedSpell].level}`;
    spellPlane.innerText = arcaneSpells1[displayedSpell].plane;
    spellMod.innerText = arcaneSpells1[displayedSpell].mod;
    spellCost.innerText = `Mana Cost: ${arcaneSpells1[displayedSpell].manaCost}`;
    spellCastTime.innerText = `Cast Time: ${arcaneSpells1[displayedSpell].castTime}`;
    spellRange.innerText = `Range: ${arcaneSpells1[displayedSpell].range}`;
    spellType.innerText = `Type: ${arcaneSpells1[displayedSpell].type}`;
    spellComponents.innerText = `Components: ${arcaneSpells1[displayedSpell].components}`;
    spellDuration.innerText = `Duration: ${arcaneSpells1[displayedSpell].duration}`;
    spellDescription.innerHTML = arcaneSpells1[displayedSpell].description;
  }
  if (currentArray === "lvl2") {
    spellName.innerText = arcaneSpells2[displayedSpell].name;
    spellLevel.innerText = `Level: ${arcaneSpells2[displayedSpell].level}`;
    spellPlane.innerText = arcaneSpells2[displayedSpell].plane;
    spellMod.innerText = arcaneSpells2[displayedSpell].mod;
    spellCost.innerText = `Mana Cost: ${arcaneSpells2[displayedSpell].manaCost}`;
    spellCastTime.innerText = `Cast Time: ${arcaneSpells2[displayedSpell].castTime}`;
    spellRange.innerText = `Range: ${arcaneSpells2[displayedSpell].range}`;
    spellType.innerText = `Type: ${arcaneSpells2[displayedSpell].type}`;
    spellComponents.innerText = `Components: ${arcaneSpells2[displayedSpell].components}`;
    spellDuration.innerText = `Duration: ${arcaneSpells2[displayedSpell].duration}`;
    spellDescription.innerHTML = arcaneSpells2[displayedSpell].description;
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
  spaceFilter();
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
  spaceFilter();
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
function spaceFilter() {
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
