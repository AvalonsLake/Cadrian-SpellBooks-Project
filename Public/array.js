// alphabetically organized

arcane = [
  // arcane blast
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
  //arcane hand
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
  // bind object
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
  // dragon fist
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
  // echoes of the past
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
    description: `<p style="margin-top:20%;">You touch the ground, a rock or a tree and use it as an anchor to pull ghostly echoes from the plane of time to replay everything that has happened within 10 feet of the thing you are touching within the last 24 hours. You can choose how fast the echoes replay the memories, or you can choose specific times for the echoes to play out. The echoes are silent and only give visual effects as the area remembers (this spell is not affected by creatures that are protected from scrying).<br/><br/>

    Empowering: When you empower this spell, you increase the number of days the echoes can recall by 1 for each mana used to empower the spell.</p>`,
  },
  // eldritch chains
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
  // explosive ritual
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
  // force tether ritual
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
    description: `<p style="margin-top:1600px;">When you finish the ritual a magical tether sprouts from the top of the rod in the middle of the ritual and wraps around the nearest hostile creature within 15 feet of the rod and the creature must make a Power Save against a DC 12 or be dragged to the rod (it doesn’t drag creatures fast enough to deal collision damage). A tethered creature is still able to move, but their movement speed is reduced by half, and at the beginning of your turn all tethered creatures must remake the save or be pulled back to the rod. If a creature attempt to move outside of the tether range the creature must make another Power Save or be dragged back 5 feet; but on a success the tether breaks and the creature is able to move freely, while the tether returns to the rod, where it will wrap around another creature at the beginning of your next turn.<br/><br/>

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
  // healing ritual
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
  // jump
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
  // laser beam
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
    description: `<p style="margin-top:1%;">You fire a beam of concentrated energy at a creature you can see within range. Make an Arcane Attack, on a hit you deal (7)2d6 + your Mind Score force damage.<br/><br/>

Empowering: When you empower this spell, you increase the damage by (3)1d6 for each mana used to empower the spell.<br/><br/>

Charge: When you charge this spell you must maintain concentration on the spell until you release it. You can charge the spell for a number of rounds equal to half your Mind Score, and for each round you charge the spell you must expend the necessary mana to cast the spell, and the damage increases by (10)3d6 + your Mind Score each round.</p>`,
  },
  // levitating object
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
  // looting ritual
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
    description: `<p style="margin-top:1500px;">You create a ritual circle around a creature that recently died (and hasn’t been harvested for parts) and cause the magic to cleanly extract the average number of creature parts from the creature based on its size: you can get 1 creature part from a small creature, 2 parts from a medium creature, 5 parts from a large creature, 7 parts from a huge creature, 12 parts from a gargantuan creature, and 25 parts from a colossal creature; if the creature had at least 2 levels in Mana you can harvest a Mana Core that is equal to half the creature’s Mana level (rounded down). All creature parts appear at your feet, and they become unusable after 1 week.<br/><br/>

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
  // manipulate
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
  // minor missle
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
  // picture
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
  // psychic shard
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
  // repair
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
  // retrieve memory
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
  // return
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
  // ritual lock
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
    description: `<p style="margin-top:62%;">You draw out the ritual on an object that is able to close (a door, chest, locket, etc.) and make it so that the object cannot be opened through force, or normal methods, including being picked with lock picks. When the ritual is being performed you choose what will unlock the object, it could be as simple as a password, or a specific object or person comes within 5 feet of it, or it could be as complex as a sequence of movements like touching certain parts of the object in a certain order, or spinning around three times then touching the object without looking. Once the ritual is complete the diagram becomes permanent and invisible (a creature can see the ritual diagram if they cast Magic Sight or See Invisibility).<br/><br/>

While you are performing the ritual you are able to add a number of alterations to the ritual equal to half your Arcane Magic Level, and you are able to fuel those alterations by expending the necessary mana up to a total of 100 mana. Choose from:<br/><br/>

Alarm: You add an alarm to the ritual by expending 5 mana to add this alteration, so that if a creature tries to open the object before unlocking or disabling the ritual lock. You choose what the alarm sounds like and it can be heard out to 300 feet. The alarm can be turned off by unlocking or disabling the ritual lock.<br/><br/>

Barrier: You make it so that if anything tries to damage the object a thin barrier of energy protects it. The barrier has a number of Hit Points equal to 2 times the number of mana used to fuel this alteration. The barrier can regain Hit Points at the same rate if a creature expends mana into the ritual while within 5 feet of it up to its maximum Hit Points determined while performing the ritual.<br/><br/>

Distracting: You can expend 1 mana to create an invisible distraction field 5 feet around the object, so that any creature entering into the area must make a Mind Save against a DC 12 or forget about the object and use their movement to move away from it. You can increase the area of the distraction field by 5 feet for every mana used to fuel this alteration. Alternatively you can increase the DC by 1 for every 5 mana used to fuel this alteration (max DC 31).<br/><br/>

Explosive Trap: You add a controlled force explosion into the ritual by expending 5 mana so that if a creature tries to open the object without unlocking or disabling the ritual lock the creature takes 1d4 force damage and is thrown 5 feet away from the object. The ritual has 7 charges before a creature must expend 5 mana into the ritual while within 5 feet of it for the ritual to regain all expended charges. You can increase the damage of each charge by 1d4 for every 5 mana used to fuel this alteration.<br/><br/>

Illusory: You can expend 1 mana to create an illusion around the object, so that the object blends into its surroundings (doors look like a blank wall, or a small chest on a bookshelf looks like books) or you can choose what the illusion will be (making a gold box look like a wooden box). A creature can see through the illusion by making a Perception check against a DC 12. If the object is moved to a different location the magic will automatically shift to create a believable illusion. You can increase the DC by 1 for every 5 mana used to fuel this alteration (max DC 31).<br/><br/>

Poison Trap: You add a poison gas trap into the ritual by expending 5 mana so that if a creature tries to open the object without unlocking or disabling the ritual lock a cloud of poison gas fills the area in a 5 foot diameter sphere centered on the object, that lasts for 1 minute (even if the object is moved, the cloud stays with it for the duration). After the trap goes off a creature must expend 5 mana into the ritual while within 5 feet of it for the ritual to regain its expended charge. While a creature is in the cloud they take 1d4 poison damage at the beginning of their turn and they must make a Durability Save against a DC 12 at the beginning of each of their turns as well or only be able to use an action or bonus action, because they can’t stop retching and reeling. You can increase the DC by 1 for every 5 mana used to fuel this alteration (max DC 31). Or you can increase the diameter of the sphere by 5 feet for every 10 mana used to fuel this alteration (a max diameter of 50 feet).<br/><br/>

Alternatively you can use this ritual to disable a ritual lock permanently or partially (1 hour, up to 24 hours), by performing the ritual within 5 feet of the ritual lock you are wanting to disable. You can identify what alterations are on a lock and how much mana was used to make it by making an Arcana check against a DC 12 + 5 x the number of alterations on the ritual. If you expend equal to or more mana than the lock has, you disable it permanently. You can partially disable the lock by expending half the mana the lock has + 1 mana for each hour you want the lock disabled for (max of 24 hours).</p>`,
  },
  // scale guard
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
  // scribe
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
    description: `<p style="margin-top:100%;">You touch a quill and imbue it with magic so that it can move on its own. The quill writes whatever you tell it, or whatever is said within 60 feet of it. Alternatively you can spend the full hour to create a common technique scroll for something you are at least level 2 in (you only need to be proficient in armor or techniques to make a scroll for them).<br/><br/>

Empowering: When you empower this spell you increase the rarity of the technique scroll you scribe. You must be the correct level in the thing you are making a scroll for, and spend the necessary time and mana to make the scroll. The rarity, the level you must be in the thing you are making a scroll for, the time it takes and the mana needed are as follows:<br/><br/>

Common: must be level 2, spend 1 hour and 1 mana.<br/>
Uncommon: must be level 4, spend 2 hours and 3 mana.<br/>
Rare: must be level 6, spend 4 hours and 5 mana.<br/>
Epic: must be level 8, spend 6 hours and 7 mana.<br/>
Legendary: must be level 10, spend 8 hours and 9 mana.<br/></p>`,
  },
  // siphon
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
  // spectral eye
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
  // speed read
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
  // speed tunnel
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
  // stabalize
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
  //Tal’Dar’s Stunning Missiles
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
  //Temporal Glimpse
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
  // Unlock
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
  //Will-o'-the-Wisp
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
    description: `<p style="margin-top:5%;">You call a will-o’-the-wisp into the material plane and it appears within 30 feet of you, and appears as a tiny ball of brilliant colored flames floating in the air, that gives off an eerie light out to 10 feet. For the duration the little spirit obeys your commands and has a flying speed equal to your movement speed, but must stay within range of you (it can follow simple commands like lead us north, stay within 10 feet of me, or touch the first enemy we come across… etc.). If a creature comes in contact with the wisp it explodes and the creature must make a Durability Save against your Arcane DC or take (5)2d4 + your Mind Score necrotic damage (half as much on a success). The spell ends if you dismiss the wisp, if you cast the spell again, or if the wisp comes in contact with a creature and explodes.</p>`,
  },
];
