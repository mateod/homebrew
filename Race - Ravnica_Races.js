/*	-WHAT IS THIS?-
	The script featured here is made as an optional addition to "MPMB's Character Record Sheet" found at http://flapkan.com/mpmb/dmsguild
	You can add the content to the Character Sheet's functionality by adding the script below in the "Add Custom Script" dialogue.
	
	-KEEP IN MIND-
	Note that you can add as many custom codes as you want, but you have to add the code in at once (i.e. copy all the code into a single, long file and copy that into the sheet).
	It is recommended to enter the code in a fresh sheet before adding any other information.
*/

/*	-INFORMATION-
	Subject:	Races
	Effect:		This script adds various player races for the plane of Ravnica, City of Guilds.
				This is taken from a homebrewed document http://homebrewery.naturalcrit.com/share/HybOBZfXE-)
				Please note that the content was made by the author of the content. I just coded the races.
	Code by:	MorePurpleMoreBetter(creator of the sheet but you all ready knew that) and JuJu2569(me)
	Date:		2018-01-05 (sheet v12.999)
*/

RaceList["ravnican vedalken"] = {
	regExpSearch : /vedalken/i,
	name : "Ravnican Vedalken",
	sortname : "Vedalken, Ravnican",
	source : ["H", 6],
	plural : "Vedalken",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", "Vedalken"],
	skills : ["Deception"],
	savetxt : { text : ["Adv. on Int/Wis/Cha saves vs. magic"] },
	age : " reach adulthood around 40 and live up to 500 years",
	height : " range from 6 to 6 1/2 feet tall",
	weight : " weigh less than 200 lb",
	improvements : "Vedalken: +2 Intelligence, +1 Wisdom;",
	scores : [0, 0, 0, 2, 1, 0],
	trait : "Vedalken (+2 Intelligence, +1 Wisdom)\nVedalken Cunning: I have advantage on all Intelligence, Wisdom, and Charisma saving throws against magic.\nAncient History: Whenever you make an Intelligence (History) check related to magic items or relics of the past, you can add twice your proficiency bonus, instead of any proficiency bonus you normally apply. \nApathetic Your natural lack of emotion gives you proficiency in deception."
};

RaceList["Silhana elf"] = {
	regExpSearch : /^(?!.*half)((?=.*(grugach|kagonesti))|((?=.*\b(elfs?|elves|elvish|elven)\b)(?=.*\b(woodlands?|woods?|forests?|wilds?|green)\b))).*$/i,
	name : "Silhana elf",
	sortname : "Elf, Silhana",
	source : ["H"],
	plural : "Silhana elves",
	size : 3,
	speed : {
		walk : { spd : 35, enc : 25 }
	},
	languageProfs : ["Common", "Elvish"],
	vision : [["Darkvision", 60]],
	savetxt : {
		text : ["Magic can't put me to sleep"],
		adv_vs : ["charmed"]
	},
	weaponprofs : [false, false, ["longsword", "shortsword", "longbow", "shortbow"]],
	skills : ["Perception"],
	age : " typically claim adulthood around age 100 and can live to be 750 years old",
	height : " range from under 5 to over 6 feet tall (4'6\" + 2d10\")",
	weight : " weigh around 115 lb (90 + 2d10 \xD7 1d4 lb)",
	heightMetric : " range from under 1,5 to over 1,8 metres tall (140 + 5d10 cm)",
	weightMetric : " weigh around 55 kg (40 + 5d10 \xD7 2d4 / 10 kg)",
	improvements : "Silhana Elf: +2 Dexterity, +1 Wisdom;",
	scores : [0, 2, 0, 0, 1, 0],
	trait : "Silhana Elf (+2 Dexterity, +1 Wisdom)\nTrance: Elves don't need to sleep, but meditate semiconsciously, for 4 hours a day. While meditating, I can dream after a fashion; such dreams are actually mental exercises that have become reflexive through years of practice. After resting in this way, I gain the same benefit that a human does from 8 hours of sleep, thus needing only 4 hours for a long rest.\nUrban Wild Hunter: I can attempt to hide even when I am only lightly obscured by foliage, heavy rain, falling snow, mist, and other natural phenomena."
};

RaceList["Devkarin elf"] = {
	regExpSearch : /^(?!.*half)((?=.*(grugach|kagonesti))|((?=.*\b(elfs?|elves|elvish|elven)\b)(?=.*\b(woodlands?|woods?|forests?|wilds?|green)\b))).*$/i,
	name : "Devkarin elf",
	sortname : "Elf, Devkarin",
	source : ["H"],
	plural : "Devkarin elves",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", "Elvish"],
	vision : [["Darkvision", 120]],
	savetxt : {
		text : ["Magic can't put me to sleep"],
		adv_vs : ["charmed, disease, ingested poisons, and becoming nauseated or sickened"],
	},
	skills : ["Perception"],
	age : " typically claim adulthood around age 100 and can live to be 750 years old",
	height : " range from under 5 to over 6 feet tall (4'6\" + 2d10\")",
	weight : " weigh around 115 lb (90 + 2d10 \xD7 1d4 lb)",
	heightMetric : " range from under 1,5 to over 1,8 metres tall (140 + 5d10 cm)",
	weightMetric : " weigh around 55 kg (40 + 5d10 \xD7 2d4 / 10 kg)",
	improvements : "Devkarin Elf: +2 Dexterity, +1 Constitution;",
	scores : [0, 2, 1, 0, 0, 0],
	trait : "Devkarin Elf (+2 Dexterity, +1 Constitution)\nTrance: Elves don't need to sleep, but meditate semiconsciously, for 4 hours a day. While meditating, I can dream after a fashion; such dreams are actually mental exercises that have become reflexive through years of practice. After resting in this way, I gain the same benefit that a human does from 8 hours of sleep, thus needing only 4 hours for a long rest.\nUnderground Dwelling. Whenever you make an Intelligence or Wisdom check related to the terrain while underground, you can add twice your proficiency bonus, instead of any proficiency bonus you normally apply."
};

RaceList["Strong Ravnician Minotaur"] = {
	regExpSearch : /Minotaur/i,
	name : "Ravnician Minotaur",
	sortname : "Minotaur, Strong Ravnician",
	source : ["H"],
	plural : "Ravnician Minotaurs",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", "Minotaur"],
	savetxt : {
		adv_vs : ["being frightened, all checks made to shove a creature, but not to avoid being shoved yourself."]
	},
	age : " typically claim adulthood around age 17 and can live to be 150 years old",
	height : " Over 6 feet tall (4'6\" + 2d10\")",
	weight : " weigh around 300 lbs (290 + 2d10 \xD7 1d4 lb)",
	improvements : "Ravnician Minotaur: +2 Strength;",
	scores : [2, 0, 0, 0, 0, 0],
	trait : "Ravnician Minotaur (+2 Strength)\nHorns. You are never unarmed. You are proficient with your horns, which are a melee weapon that deals 1d10 piercing damage. Your horns grant you advantage on all checks made to shove a creature, but not to avoid being shoved yourself. \nGoring Rush. When you use the Dash action during your turn, you can make a melee attack with your horns as a bonus action. \nHammering Horns. When you use the Attack action during your turn to make a melee attack, you can attempt to shove a creature with your horns as a bonus action. You cannot use this shove attempt to knock a creature prone. \nNatural Strategist. You can perfectly recall any path you have traveled. \nBrave. You have advantage on saving throws against being frightened."  
};
// Racial weapons (Minotaur Horns)
WeaponsList["horns"] = {
	regExpSearch : /\bhorns\b/i,
	name : "Horns",
	source : ["H"],
	ability : 1,
	type : "Natural",
	damage : [1, 10, "piercing"],
	range : "Melee",
	description : "Your horns grant you advantage on all checks made to shove a creature, but not to avoid being shoved yourself.",
	abilitytodamage : true,
	monkweapon : true,


};
RaceList["Smart Ravnician Minotaur"] = {
	regExpSearch : /Minotaur/i,
	name : "Ravnician Minotaur",
	sortname : "Minotaur, Smart Ravnician",
	source : ["H"],
	plural : "Ravnician Minotaurs",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", "Minotaur"],
	savetxt : {
		adv_vs : ["being frightened, all checks made to shove a creature, but not to avoid being shoved yourself."]
	},
	age : " typically claim adulthood around age 17 and can live to be 150 years old",
	height : " Over 6 feet tall (4'6\" + 2d10\")",
	weight : " weigh around 300 lbs (290 + 2d10 \xD7 1d4 lb)",
	improvements : "Ravnician Minotaur: +1 Strength, +1 Intelligence;",
	scores : [1, 0, 0, 1, 0, 0],
	trait : "Ravnician Minotaur (+1 Strength, +1 Intelligence)\nHorns. You are never unarmed. You are proficient with your horns, which are a melee weapon that deals 1d10 piercing damage. Your horns grant you advantage on all checks made to shove a creature, but not to avoid being shoved yourself. \nGoring Rush. When you use the Dash action during your turn, you can make a melee attack with your horns as a bonus action. \nHammering Horns. When you use the Attack action during your turn to make a melee attack, you can attempt to shove a creature with your horns as a bonus action. You cannot use this shove attempt to knock a creature prone. \nNatural Strategist. You can perfectly recall any path you have traveled. \nBrave. You have advantage on saving throws against being frightened."
};
// Racial weapons (Minotaur Horns)
WeaponsList["horns"] = {
	regExpSearch : /\bhorns\b/i,
	name : "Horns",
	source : ["H"],
	ability : 1,
	type : "Natural",
	damage : [1, 10, "piercing"],
	range : "Melee",
	description : "Your horns grant you advantage on all checks made to shove a creature, but not to avoid being shoved yourself.",
	abilitytodamage : true,
	monkweapon : true,

};
RaceList["Leadership Ravnician Minotaur"] = {
	regExpSearch : /Minotaur/i,
	name : "Ravnician Minotaur",
	sortname : "Minotaur, Leadership Ravnician",
	source : ["H"],
	plural : "Ravnician Minotaurs",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", "Minotaur"],
	savetxt : {
		adv_vs : ["being frightened, all checks made to shove a creature, but not to avoid being shoved yourself."]
	},
	age : " typically claim adulthood around age 17 and can live to be 150 years old",
	height : " Over 6 feet tall (4'6\" + 2d10\")",
	weight : " weigh around 300 lbs (290 + 2d10 \xD7 1d4 lb)",
	improvements : "Ravnician Minotaur: +1 Strength, +1 Charisma;",
	scores : [1, 0, 0, 0, 0, 1],
	trait : "Ravnician Minotaur (+1 Strength, +1 Charisma)\nHorns. You are never unarmed. You are proficient with your horns, which are a melee weapon that deals 1d10 piercing damage. Your horns grant you advantage on all checks made to shove a creature, but not to avoid being shoved yourself. \nGoring Rush. When you use the Dash action during your turn, you can make a melee attack with your horns as a bonus action. \nHammering Horns. When you use the Attack action during your turn to make a melee attack, you can attempt to shove a creature with your horns as a bonus action. You cannot use this shove attempt to knock a creature prone. \nNatural Strategist. You can perfectly recall any path you have traveled. \nBrave. You have advantage on saving throws against being frightened."
};
// Racial weapons (Minotaur Horns)
WeaponsList["horns"] = {
	regExpSearch : /\bhorns\b/i,
	name : "Horns",
	source : ["H"],
	ability : 1,
	type : "Natural",
	damage : [1, 10, "piercing"],
	range : "Melee",
	description : "Your horns grant you advantage on all checks made to shove a creature, but not to avoid being shoved yourself.",
	abilitytodamage : true,
	monkweapon : true,

};

RaceList["Loxodon"] = {
	regExpSearch : /Loxodon/i,
	name : "Loxodon",
	sortname : "Loxodon",
	source : ["H"],
	plural : "Loxodons",
	size : 3,
	speed : {
		walk : { spd : 25, enc : 15 }
	},
	languageProfs : ["Common", "Lox"],
	age : " typically claim adulthood around age 20 and can live to be 200 years old",
	height : " Over 6 feet tall (6'0\" + 2d10\")",
	weight : " weigh around 400 lbs (290 + 2d10 \xD7 1d4 lb)",
	improvements : "Loxodon: +1 Strength, +1 Charisma;",
	scores : [1, 0, 1, 0, 1, 0],
	trait : "Loxodon (+1 Strength, +1 Charisma)\nPowerful Build. You count as one size larger when determining your carrying capacity and the weight you can push, drag, or lift \nThick Skin Your natural protective hide gives you a +1 bonus to armor class. \nElephant's Memory. If you spend a minute thinking, you can accurately recall any face, name, or location you have seen in the past year. The recall increases by one year for every minute you spend thinking. \nTrunk. You can use your trunk to pick up and hold items up to twenty pounds. This cannot be used to wield a weapon or shield. \nHeavyweight. Your immense size can be used to your advantage in battle. When you forced to move against your will, you may use your reaction to reduce the distance pushed by 5ft."

};

RaceList["Viashino"] = {
	regExpSearch : /Viashino/i,
	name : "Viashino",
	sortname : "Viashino",
	source : ["H"],
	plural : "Viashino",
	size : 3,
	speed : {
		walk : { spd : 35, enc : 25 }
	},
	languageProfs : ["Common", "Viashino"],
	skills : ["Stealth"],
	age : " typically claim adulthood around age 5 and can live to be 70 years old",
	height : " between 5 and 6 feet tall (5'6\" + 2d10\")",
	weight : " weigh around 200 lbs (290 + 2d10 \xD7 1d4 lb)",
	improvements : "Viashino: +2 Dexterity;",
	scores : [0, 2, 0, 0, 0, 0],
trait : "Viashino (+2 Dexterity) \nNatural Hunter. Your primal instinct as a natural hunter gives you proficiency in the stealth skill. \nBloodthirsty You can follow the scent of blood for long distances. You have advantage on Wisdom (Survival) checks to track a creature that has been previously injured. \nAlert Your natural tendencies grant to the Alert feat."
};

RaceList["Tough Ravnican Goblin"] = {
	regExpSearch : /Goblin/i,
	name : "Tough Ravnican Goblin",
	sortname : "Goblin, Tough Ravnican",
	source : ["H"],
	plural : "Tough Ravnican Goblins",
	size : 4,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", "Goblin"],
	vision : [["Darkvision", 60]],
	age : " reach adulthood at age 12 and live around 50 years",
	height : " average about 3 feet tall (2'7\" + 2d4\")",
	weight : " weigh around 40 lb (35 + 2d4 lb)",
	improvements : "Tough Ravnican Goblins: +2 Dexterity, +1 Constitution;",
	scores : [0, 2, 1, 0, 0, 0],
	trait : "Tough Ravnican Goblins (+2 Dexterity, +1 Constitution)\n\nNimble Escape. You can take the Disengage or Hide action as a bonus action on each of your turns.\n\nGoblin Agility. I can move through the space of any creature that is of a size larger than me."
};

RaceList["Clever Ravnican Goblin"] = {
	regExpSearch : /Goblin/i,
	name : "Clever Ravnican Goblin",
	sortname : "Goblin, Clever Ravnican",
	source : ["H"],
	plural : "Clever Ravnican Goblins",
	size : 4,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", "Goblin"],
	vision : [["Darkvision", 60]],
	age : " reach adulthood at age 12 and live around 50 years",
	height : " average about 3 feet tall (2'7\" + 2d4\")",
	weight : " weigh around 40 lb (35 + 2d4 lb)",
	improvements : "Clever Ravnican Goblins: +2 Dexterity, +1 Intelligence;",
	scores : [0, 2, 0, 1, 0, 0],
	trait : "Clever Ravnican Goblins (+2 Dexterity, +1 Intelligence)\n\nNimble Escape. You can take the Disengage or Hide action as a bonus action on each of your turns.\n\nGoblin Agility. I can move through the space of any creature that is of a size larger than me."
};

RaceList["Charming Ravnican Goblin"] = {
	regExpSearch : /Goblin/i,
	name : "Charming Ravnican Goblin",
	sortname : "Goblin, Charming Ravnican",
	source : ["H"],
	plural : "Charming Ravnican Goblins",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", "Goblin"],
	vision : [["Darkvision", 60]],
	age : " reach adulthood at age 12 and live around 50 years",
	height : " average about 3 feet tall (2'7\" + 2d4\")",
	weight : " weigh around 40 lb (35 + 2d4 lb)",
	improvements : "Charming Ravnican Goblins: +2 Dexterity, +1 Charisma;",
	scores : [0, 2, 0, 0, 0, 1],
	trait : "Charming Ravnican Goblins (+2 Dexterity, +1 Charisma)\n\nNimble Escape. You can take the Disengage or Hide action as a bonus action on each of your turns.\n\nGoblin Agility. I can move through the space of any creature that is of a size larger than me."
};
RaceList["Dryad"] = {
	regExpSearch : /Dryad/i,
	name : "Dryad",
	sortname : "Dryad",
	source : ["H"],
	plural : "Dryad",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", "Sylvan"],
	vision : [["Darkvision", 60]],
	skills : ["Nature"],
	age : " reach adulthood at age 20 and live around 800 years",
	height : " average about 6 feet tall (5'7\" + 2d4\")",
	weight : " weigh around 40 lb (35 + 2d4 lb)",
	improvements : "Dryad: +2 Wisdom, +1 Charisma;",
	scores : [0, 0, 0, 0, 2, 1],
		abilitySave : 5,
	spellcastingAbility : 5,
	spellcastingBonus : {
		name : "Innate Spellcasting (1)",
		spells : ["druidcraft"],
		selection : ["druidcraft"],
		atwill : true
	},
	features : {
		"animal friendship" : {
			name : "Speak With Animals",
			minlevel : 3,
			action : ["action", ""],
			spellcastingBonus : {
				name : "Innate Spellcasting (3)",
				spells : ["speak with animals"],
				selection : ["speak with animals"],
				atwill : true
			}
		},
		"suggestion" : {
			name : "Speak To Plants",
			minlevel : 5,
			usages : 1,
			recovery : "long rest",
			tooltip : " (Innate Spellcasting)",
			action : ["action", ""],
			spellcastingBonus : {
				name : "Innate Spellcasting (5)",
				spells : ["speak to plants"],
				selection : ["speak to plants"],
				oncelr : true
			}
		}
	},
	trait : "Dryad (+2 Wisdom, +1 Charisma)\n\nNatural Connection Your deep connection to the natural world gives you proficiency in the nature skill.\n\nSylvan Safekeeping. Whenever you make an Dexterity (Stealth) check to hide among trees, you can add twice your proficiency bonus, instead of any proficiency bonus you normally apply."
	
};

RaceList["ravnican vampire"] = {
	regExpSearch : /ravnican vampire/i,
	name : "Ravnican Vampire",
	sortname : "Vampire, Ravnican",
	source : ["H"],
	plural : "Vampires",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", "One language of your choice"],
	vision : [["Darkvision", 60], ["Sunlight Sensitivity", 0]],
	dmgres : ["Necrotic"],
	weapons : ["blood thirst"],
	age : " One is not born a vampire, but rather becomes one from contracting the vampire's curse. The curse of the vampire bestows immortality, halting the aging process. However vampire's destructive nature will cause most to be killed sooner or later.",
	height : " average about 6 feet tall (5'7\" + 2d4\")",
	weight : " weigh around 150 lb (135 + 2d4 lb)",
	improvements : "Ravnican Vampire: +2 Charisma, +1 Intelligence;",
	scores : [0, 0, 0, 1, 0, 2],
	
	trait : "Ravnican Vampire (+2 Charisma, +1 Intelligence)\n\nSunlight Sensitivity. You have disadvantage on attack rolls and on Wisdom (Perception) checks that rely on sight when you, the target of your attack, or whatever you are trying to perceive is in direct sunlight. \n\nVampiric Flight. You can spend your bonus action to initiate vampiric flight, this lasts for 10 minutes, or until you are knocked out of the air. While in this state you have a flying speed of 30 feet. You can use this ability once with this trait and regain the ability to do so once you finish a long rest.\n\nBlood Thirst. You can drain blood and life energy from a willing creature, or one that is grappled by you, incapacitated, or restrained. Make a melee attack against the target. If you hit, you deal 1 piercing damage and 1d6 necrotic damage. The target’s hit point maximum is reduced by an amount equal to the necrotic damage taken, and you regain hit points equal to that amount. The reduction lasts until the target finishes a long rest. The target dies if this effect reduces its hit point maximum to 0. A humanoid killed this way may be brought back as a zombie under the vampire's control. You may only have one zombie under your control from this ability at a time."
	};
	WeaponsList["blood thirst"] = {
	regExpSearch : /^(?=.*blood)(?=.*thirst).*$/i,
	name : "Blood Thirst",
	source : ["PS:Z", 15],
	list : "Melee",
	ability : 1,
	type : "Natural",
	damage : [1, 6, "necrotic"],
	range : "Melee",
	description : "+1 piercing damage; Reduces max HP by the necrotic damage, while healing me for the same",
	abilitytodamage : false,
	monkweapon : false

};

RaceList["gruul centaur"] = {
	regExpSearch : /gruul centaur/i,
	name : "Gruul Centaur",
	sortname : "Centaur, Gruul",
	source : ["H"],
	plural : "centaurs",
	size : 3,
	speed : {
		walk : { spd : 40, enc : 30 }
	},
	languageProfs : ["Common", "Sylvan"],
	age : " Centaur enter adulthood in their late teens and typically live up to 120 years.",
	height : " average about 6 feet tall (6'0\" + 2d4\")",
	weight : " weigh around 1100 lb (1000 + 2d20 lb)",
	improvements : "Gruul Centaur: +1 Constitution, +1 Strength;",
	scores : [1, 0, 1, 0, 0, 0],
	trait : "Gruul Centaur (+1 Constitution, +1 Strength)\n\nHeavy. You have disadvantage on Dexterity (Acrobatics) and Strength (Athletics) checks made to climb. \n\nPowerful Build. You count as one size larger when determining your carrying capacity and the weight you can push, drag, or lift. \n\nNatural Cavalry. You may serve as a mount for a single creature your size or smaller, when you do so you always act independently of your rider. You also count as mounted at all times for the purposes of equipment, and any creature you carry in this way counts as half their normal weight for the purpose of determining whether or not you are encumbered. \n\nCharge. If you move at least 30 feet straight toward a target and then hit it with a melee weapon attack, you can choose to make the attack with advantage."
	
};

RaceList["selesnya centaur"] = {
	regExpSearch : /selesnya centaur/i,
	name : "Selesnya Centaur",
	sortname : "Centaur, Selesnya",
	source : ["H"],
	plural : "centaurs",
	size : 3,
	speed : {
		walk : { spd : 40, enc : 30 }
	},
	languageProfs : ["Common", "Sylvan"],
	age : " Centaur enter adulthood in their late teens and typically live up to 120 years.",
	height : " average about 6 feet tall (6'0\" + 2d4\")",
	weight : " weigh around 1100 lb (1000 + 2d20 lb)",
	improvements : "Selesnya Centaur: +1 Constitution, +1 Wisdom;",
	scores : [0, 0, 1, 0, 1, 0],
	trait : "Selesnya Centaur (+1 Constitution, +1 Wisdom)\n\nHeavy. You have disadvantage on Dexterity (Acrobatics) and Strength (Athletics) checks made to climb. \n\nPowerful Build. You count as one size larger when determining your carrying capacity and the weight you can push, drag, or lift. \n\nNatural Cavalry. You may serve as a mount for a single creature your size or smaller, when you do so you always act independently of your rider. You also count as mounted at all times for the purposes of equipment, and any creature you carry in this way counts as half their normal weight for the purpose of determining whether or not you are encumbered. \n\nCharge. If you move at least 30 feet straight toward a target and then hit it with a melee weapon attack, you can choose to make the attack with advantage."
	
};

RaceList["Kraul"] = {
	regExpSearch : /Kraul/i,
	name : "Kraul",
	sortname : "Kraul",
	source : ["H"],
	plural : "Kraul",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 },
		fly : { spd : 30, enc : 0 }
  },
  languageProfs : ["Common", "Kraul"],
  vision : [["Darkvision", 120]],
  addarmor : "Natural Armor",
	age : " Kraul mature incredibly fast, reaching adulthood at around age 1 after a larval stage. Kraul typically don't live longer than 50 years.",
	height : " average about 6 feet tall (5'5\" + 2d4\")",
	weight : " weigh around 100 lb (100 + 2d20 lb)",
	improvements : "Kraul: +2 Intelligence, +1 Constitution, -1 Charisma;",
	scores : [0, 0, 1, 2, 0, -1],
	trait : "Kraul (+2 Intelligence, +1 Constitution, -1 Charisma)\n\nInsectile Flight. Your wings can carry your heavy frame over short distances. You can spend your movement action on your turn to fly up to 30 feet. You must land at the end of your turn. \n\nSuperior Darkvision. Accustomed to the depths of the Undercity, you have superior vision in dark and dim conditions. You can see in dim light within 120 feet of you as if it were bright light, and in darkness as if it were dim light. You can’t discern color in darkness, only shades of gray. \n\nNatural Armor You have a tough chitin exoskeleton. When you aren't wearing armor, your AC is 13+ your Dexterity modifier. You can use your natural armor to determine your AC if the armor you wear would leave you with a lower AC. A shield's benefits apply as normal while you use your natural armor. \n\nTorpor. Rather than sleep, Kraul enter a torpid state. In this state, you remain aware of your surroundings, and you require only 4 hours of torpor. After resting in this way, you gain the same benefit that a human does from 8 hours of sleep."
};
RaceList["Hunter Ravnican Merfolk"] = {
	regExpSearch : /Hunter Ravnican Merfolk/i,
	name : "Hunter Ravnican Merfolk",
	sortname : "Merfolk, Ravnican, Hunter",
	source : ["H"],
	plural : "Hunter Ravnican Merfolk",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 },
		swim : { spd : 40, enc : 30 }
	},
  vision : [["Darkvision", 60]],
	savetxt : { text : ["Adv. on Dex saves vs. against being grappled or restrained"] },
	languageProfs : ["Common", "Merfolk"],
	weaponprofs : [false, false, ["net", "spear", "trident"]],
	age : " Merfolk have a similar lifespan to humans, reaching adulthood in their teens, and living up to 120 years.",
	height : " average about 6 feet tall (5'5\" + 2d4\")",
	weight : " weigh around 100 lb (100 + 2d20 lb)",
	improvements : "Hunter Ravnican Merfolk: +2 Wisdom, +1 Strength;",
	scores : [1, 0, 0, 0, 2, 0],
	trait : "Hunter Ravnican Merfolk (+2 Wisdom, +1 Strength)\n\nAmphibious. You can breathe air and water. \n\nMerfolk Weapon Training. You have proficiency with the net, spear, and trident.\n\nDepth Dweller. You ignore any drawbacks caused by an underwater environment.\n\nSlippery. You have advantage on dexterity saving throws against being grappled or restrained."

};
RaceList["Studious Ravnican Merfolk"] = {
	regExpSearch : /Studious Ravnican Merfolk/i,
	name : "Studious Ravnican Merfolk",
	sortname : "Merfolk, Ravnican, Studious",
	source : ["H"],
	plural : "Studious Ravnican Merfolk",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 },
		swim : { spd : 40, enc : 30 }
	},
  vision : [["Darkvision", 60]],
	savetxt : { text : ["Adv. on Dex saves vs. against being grappled or restrained"] },
	languageProfs : ["Common", "Merfolk"],
	weaponprofs : [false, false, ["net", "spear", "trident"]],
	age : " Merfolk have a similar lifespan to humans, reaching adulthood in their teens, and living up to 120 years.",
	height : " average about 6 feet tall (5'5\" + 2d4\")",
	weight : " weigh around 100 lb (100 + 2d20 lb)",
	improvements : "Studious Ravnican Merfolk: +2 Wisdom, +1 Intelligence;",
	scores : [0, 0, 0, 1, 2, 0],
	trait : "Studious Ravnican Merfolk (+2 Wisdom, +1 Intelligence)\n\nAmphibious. You can breathe air and water. \n\nMerfolk Weapon Training. You have proficiency with the net, spear, and trident.\n\nDepth Dweller. You ignore any drawbacks caused by an underwater environment.\n\nSlippery. You have advantage on dexterity saving throws against being grappled or restrained."

};
RaceList["Diplomatic Ravnican Merfolk"] = {
	regExpSearch : /Diplomatic Ravnican Merfolk/i,
	name : "Diplomatic Ravnican Merfolk",
	sortname : "Merfolk, Ravnican, Diplomatic",
	source : ["H"],
	plural : "Diplomatic Ravnican Merfolk",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 },
		swim : { spd : 40, enc : 30 }
	},
  vision : [["Darkvision", 60]],
	savetxt : { text : ["Adv. on Dex saves vs. against being grappled or restrained"] },
	languageProfs : ["Common", "Merfolk"],
	weaponprofs : [false, false, ["net", "spear", "trident"]],
	age : " Merfolk have a similar lifespan to humans, reaching adulthood in their teens, and living up to 120 years.",
	height : " average about 6 feet tall (5'5\" + 2d4\")",
	weight : " weigh around 100 lb (100 + 2d20 lb)",
	improvements : "Diplomatic Ravnican Merfolk: +2 Wisdom, +1 Charisma;",
	scores : [0, 0, 0, 0, 2, 1],
	trait : "Diplomatic Ravnican Merfolk (+2 Wisdom, +1 Intelligence)\n\nAmphibious. You can breathe air and water. \n\nMerfolk Weapon Training. You have proficiency with the net, spear, and trident.\n\nDepth Dweller. You ignore any drawbacks caused by an underwater environment.\n\nSlippery. You have advantage on dexterity saving throws against being grappled or restrained."

};