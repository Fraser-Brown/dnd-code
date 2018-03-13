var barbarianSpells = {
    default:{
        'rage' : {'name':'rage', 'cost': 1},
        'unarmouredDefense' : {'name' : 'unarmouredDefense'}
    }
};

var bardSpells = {
    default : {
        'bardicInspiration' : {'name': 'bardicInspiration', 'dice': 6}
    },
    cantrips : {
        'BladeWard' : {'name' : 'BladeWard' , 'level' : 0},
        'DancingLights' : {'name' : 'DancingLights' , 'level' : 0},
        'Friends' : {'name' : 'Friends' , 'level' : 0},
        'Light' : {'name' : 'Light' , 'level' : 0},
        'MageHand' : {'name' : 'MageHand' , 'level' : 0},
        'Mending' : {'name' : 'Mending' , 'level' : 0},
        'Message' : {'name' : 'Message' , 'level' : 0},
        'MinorIllusion' : {'name' : 'MinorIllusion' , 'level' : 0},
        'Prestidigitation' : {'name' : 'Prestidigitation' , 'level' : 0},
        'TrueStrike' : {'name' : 'TrueStrike' , 'level' : 0},
        'ViciousMockery' : {'name' : 'ViciousMockery' , 'level' : 0}
    },
    levelOne : {
        'AnimalFriendship' : {'name' : 'AnimalFriendship' , 'level' : 1},
        'Bane' : {'name' : 'Bane' , 'level' : 1},
        'CharmPerson' : {'name' : 'CharmPerson' , 'level' : 1},
        'ComprehendLanguages' : {'name' : 'ComprehendLanguages' , 'level' : 1},
        'CureWounds' : {'name' : 'CureWounds' , 'level' : 1},
        'DetectMagic' : {'name' : 'DetectMagic' , 'level' : 1},
        'DisguiseSelf' : {'name' : 'DisguiseSelf' , 'level' : 1},
        'DissonantWhispers' : {'name' : 'DissonantWhispers' , 'level' : 1},
        'FaerieFire' : {'name' : 'FaerieFire' , 'level' : 1},
        'FeatherFall' : {'name' : 'FeatherFall' , 'level' : 1},
        'HealingWord' : {'name' : 'HealingWord' , 'level' : 1},
        'Heroism' : {'name' : 'Heroism' , 'level' : 1},
        'Identify' : {'name' : 'Identify' , 'level' : 1},
        'IllusoryScript' : {'name' : 'IllusoryScript' , 'level' : 1},
        'Longstrider' : {'name' : 'Longstrider' , 'level' : 1},
        'SilentImage' : {'name' : 'SilentImage' , 'level' : 1},
        'Sleep' : {'name' : 'Sleep' , 'level' : 1},
        'SpeakwithAnimals' : {'name' : 'SpeakwithAnimals' , 'level' : 1},
        'TashasHideousLaughter' : {'name' : 'TashasHideousLaughter' , 'level' : 1},
        'Thunderwave' : {'name' : 'Thunderwave' , 'level' : 1},
        'UnseenServant' : {'name' : 'UnseenServant' , 'level' : 1}

    }
};
//todo : need to add domains and whether a spell is a specific domain, add extra spells afforded by the domain choices
var clericSpells = {
        default: {

        },
        cantrips : {
            'Guidance' : {'name' : 'Guidance' , 'level' : 0},
            'Light' : {'name' : 'Light' , 'level' : 0, 'domain' : 'light'},
            'Mending' : {'name' : 'Mending' , 'level' : 0},
            'Resistance' : {'name' : 'Resistance' , 'level' : 0},
            'SacredFlame' : {'name' : 'SacredFlame' , 'level' : 0},
            'SparetheDying' : {'name' : 'SparetheDying' , 'level' : 0},
            'Thaumaturgy' : {'name' : 'Thaumaturgy' , 'level' : 0}
        },

        levelOne : {
            'Bane' : {'name' : 'Bane' , 'level' : 1},
            'Bless' : {'name' : 'Bless' , 'level' : 1, 'domain' : 'life'},
            'Command' : {'name' : 'Command' , 'level' : 1, 'domain' : 'knowledge'},
            'CreateorDestroyWater' : {'name' : 'CreateorDestroyWater' , 'level' : 1},
            'CureWounds' : {'name' : 'CureWounds' , 'level' : 1, 'domain' : 'life'},
            'DetectEvilandGood' : {'name' : 'DetectEvilandGood' , 'level' : 1},
            'DetectMagic' : {'name' : 'DetectMagic' , 'level' : 1},
            'DetectPoisonandDisease' : {'name' : 'DetectPoisonandDisease' , 'level' : 1},
            'GuidingBolt' : {'name' : 'GuidingBolt' , 'level' : 1},
            'HealingWord' : {'name' : 'HealingWord' , 'level' : 1},
            'InflictWounds' : {'name' : 'InflictWounds' , 'level' : 1},
            'Protectionfrom' : {'name' : 'Protectionfrom' , 'level' : 1},
            'EvilandGood' : {'name' : 'EvilandGood' , 'level' : 1},
            'PurifyFoodandDrink' : {'name' : 'PurifyFoodandDrink' , 'level' : 1},
            'Sanctuary' : {'name' : 'Sanctuary' , 'level' : 1},
            'ShieldofFaith' : {'name' : 'ShieldofFaith' , 'level' : 1, 'domain' : 'war'},
            'identify' : {'name' : 'identify' , 'level' : 1, 'domain' : 'knowledge'},
            'bless' : {'name' : 'bless' , 'level' : 1, 'domain' : 'life'},
            'burningHands' : {'name' : 'burningHands' , 'level' : 1, 'domain' : 'light'},
            'faerieFire' : {'name' : 'faerieFire' , 'level' : 1, 'domain' : 'light'},
            'animalFriendship' : {'name' : 'animalFriendship' , 'level' : 1, 'domain' : 'nature'},
            'speakWithAnimals' : {'name' : 'speakWithAnimals' , 'level' : 1, 'domain' : 'nature'},
            'fogCloud' : {'name' : 'fogCloud' , 'level' : 1, 'domain' : 'tempest'},
            'thunderWave' : {'name' : 'thunderWave' , 'level' : 1, 'domain' : 'tempest'},
            'charmPerson' : {'name' : 'charmPerson' , 'level' : 1, 'domain' : 'trickery'},
            'disguiseSelf' : {'name' : 'disguiseSelf' , 'level' : 1, 'domain' : 'trickery'},
            'divineFavour' : {'name' : 'divineFavour' , 'level' : 1, 'domain' : 'war'},
        },

        domains: ['knowledge', 'life', 'light', 'nature', 'tempest', 'trickery', 'war']
};

var druidSpells = {
    default:{
        'druidic' : {'name': 'druidic', 'detail':'lets you leave secret messages'}
    },
    cantrips: {
        'Druidcraft' : {'name' : 'Druidcraft' , 'level' : 0},
        'Guidance' : {'name' : 'Guidance' , 'level' : 0},
        'Mending' : {'name' : 'Mending' , 'level' : 0},
        'PoisonSpray' : {'name' : 'PoisonSpray' , 'level' : 0},
        'ProduceFlame' : {'name' : 'ProduceFlame' , 'level' : 0},
        'Resistance' : {'name' : 'Resistance' , 'level' : 0},
        'Shillelagh' : {'name' : 'Shillelagh' , 'level' : 0},
        'ThornWhip' : {'name' : 'ThornWhip' , 'level' : 0}
    },
    levelOne:{
        'AnimalFriendship' : {'name' : 'AnimalFriendship' , 'level' : 1},
        'CharmPerson' : {'name' : 'CharmPerson' , 'level' : 1},
        'CreateorDestroyWater' : {'name' : 'CreateorDestroyWater' , 'level' : 1},
        'CureWounds' : {'name' : 'CureWounds' , 'level' : 1},
        'DetectMagic' : {'name' : 'DetectMagic' , 'level' : 1},
        'DetectPoisonandDisease' : {'name' : 'DetectPoisonandDisease' , 'level' : 1},
        'Entangle' : {'name' : 'Entangle' , 'level' : 1},
        'FaerieFire' : {'name' : 'FaerieFire' , 'level' : 1},
        'FogCloud' : {'name' : 'FogCloud' , 'level' : 1},
        'Goodberry' : {'name' : 'Goodberry' , 'level' : 1},
        'HealingWord' : {'name' : 'HealingWord' , 'level' : 1},
        'Jump' : {'name' : 'Jump' , 'level' : 1},
        'Longstrider' : {'name' : 'Longstrider' , 'level' : 1},
        'PurifyFoodandDrink' : {'name' : 'PurifyFoodandDrink' , 'level' : 1},
        'SpeakwithAnimals' : {'name' : 'SpeakwithAnimals' , 'level' : 1},
        'Thunderwave' : {'name' : 'Thunderwave' , 'level' : 1}
    }
};

var fighterSpells = {
    default : {
        'fightingStyle' : {'name':'fightingStyle'},//needs to be chosne, just like the cleric domain
        'secondWind': {'name':'secondWind'}
    },
    domains : ['archery', 'defense', 'dueling', 'greatWeaponFighting', 'protection', 'twoWeaponFighting']
};

var monkSpells = {
  default : {
      'unarmouredDefense' : {'name' : 'unarmouredDefense'},
      'martialArts' : {'name' : 'martialArts'}
      //may need to add more things to the barbarian default as they both have unarmoured defense options
      //need to give extra notice to unarmed attacks and martial weapons
  }
};

var paladinSpells = {
    default : {
        'divineSense' : {'name': 'divineSense'},
        'layOnHands' : {'name' : 'layOnHands'}
    },
    cantrips: {

    },
    levelOne:{
        'Bless' : {'name' : 'Bless' , 'level' : 1},
        'Command' : {'name' : 'Command' , 'level' : 1},
        'CompelledDuel' : {'name' : 'CompelledDuel' , 'level' : 1},
        'CureWounds' : {'name' : 'CureWounds' , 'level' : 1},
        'DetectEvilandGood' : {'name' : 'DetectEvilandGood' , 'level' : 1},
        'DetectMagic' : {'name' : 'DetectMagic' , 'level' : 1},
        'DetectPoisonandDisease' : {'name' : 'DetectPoisonandDisease' , 'level' : 1},
        'DivineFavor' : {'name' : 'DivineFavor' , 'level' : 1},
        'Heroism' : {'name' : 'Heroism' , 'level' : 1},
        'ProtectionfromEvilandGood' : {'name' : 'ProtectionfromEvilandGood' , 'level' : 1},
        'PurifyFoodandDrink' : {'name' : 'PurifyFoodandDrink' , 'level' : 1},
        'SearingSmite' : {'name' : 'SearingSmite' , 'level' : 1},
        'ShieldofFaith' : {'name' : 'ShieldofFaith' , 'level' : 1},
        'ThunderousSmite' : {'name' : 'ThunderousSmite' , 'level' : 1},
        'WrathfulSmite' : {'name' : 'WrathfulSmite' , 'level' : 1}
    }
};

var rangerSpells = {
    default : {
        'favouredEnemy' : {'name' : 'favouredEnemy'}, // picks a favour
        'naturalExplorer' : {'name' :'naturalExplorer'} //choose environment
    },
    cantrips: {

    },
    levelOne:{
        'Alarm' : {'name' : 'Alarm' , 'level' : 1},
        'AnimalFriendship' : {'name' : 'AnimalFriendship' , 'level' : 1},
        'CureWounds' : {'name' : 'CureWounds' , 'level' : 1},
        'DetectMagic' : {'name' : 'DetectMagic' , 'level' : 1},
        'DetectPoisonandDisease' : {'name' : 'DetectPoisonandDisease' , 'level' : 1},
        'EnsnaringStrike' : {'name' : 'EnsnaringStrike' , 'level' : 1},
        'FogCloud' : {'name' : 'FogCloud' , 'level' : 1},
        'Goodberry' : {'name' : 'Goodberry' , 'level' : 1},
        'HailofThorns' : {'name' : 'HailofThorns' , 'level' : 1},
        'HuntersMark' : {'name' : 'HuntersMark' , 'level' : 1},
        'Jump' : {'name' : 'Jump' , 'level' : 1},
        'Longstrider' : {'name' : 'Longstrider' , 'level' : 1},
        'SpeakwithAnimals' : {'name' : 'SpeakwithAnimals' , 'level' : 1}
    },
    domains : ['aberrations', 'beasts', 'celestials', 'constructs', 'dragons', 'elementals', 'fey',
        'fiends', 'giants', 'monstrosities', 'oozes', 'plants', 'undead', 'humanoid']
};

var rogueSpells = {
  default : {
      'expertise': {'name' : 'expertise'},
      'sneakAttack' : {'name' : 'sneakAttack'},
      'theivesCant' : {'name':'theivesCant'}
  }
};

var sorcererSpells = {
    default : {
        'sorcerousOrigin' : {'name' : 'sorcerousOrigin'} //where is the magic derived
    },
    cantrips: {
        'AcidSplash' : {'name' : 'AcidSplash' , 'level' : 0},
        'BladeWard' : {'name' : 'BladeWard' , 'level' : 0},
        'ChillTouch' : {'name' : 'ChillTouch' , 'level' : 0},
        'DancingLights' : {'name' : 'DancingLights' , 'level' : 0},
        'FireBolt' : {'name' : 'FireBolt' , 'level' : 0},
        'Friends' : {'name' : 'Friends' , 'level' : 0},
        'Light' : {'name' : 'Light' , 'level' : 0},
        'MageHand' : {'name' : 'MageHand' , 'level' : 0},
        'Mending' : {'name' : 'Mending' , 'level' : 0},
        'Message' : {'name' : 'Message' , 'level' : 0},
        'MinorIllusion' : {'name' : 'MinorIllusion' , 'level' : 0},
        'PoisonSpray' : {'name' : 'PoisonSpray' , 'level' : 0},
        'Prestidigitation' : {'name' : 'Prestidigitation' , 'level' : 0},
        'RayofFrost' : {'name' : 'RayofFrost' , 'level' : 0},
        'ShockingGrasp' : {'name' : 'ShockingGrasp' , 'level' : 0},
        'TrueStrike' : {'name' : 'TrueStrike' , 'level' : 0},
    },
    levelOne:{
        'BurningHands' : {'name' : 'BurningHands' , 'level' : 1},
        'CharmPerson' : {'name' : 'CharmPerson' , 'level' : 1},
        'ChromaticOrb' : {'name' : 'ChromaticOrb' , 'level' : 1},
        'ColorSpray' : {'name' : 'ColorSpray' , 'level' : 1},
        'ComprehendLanguages' : {'name' : 'ComprehendLanguages' , 'level' : 1},
        'DetectMagic' : {'name' : 'DetectMagic' , 'level' : 1},
        'DisguiseSelf' : {'name' : 'DisguiseSelf' , 'level' : 1},
        'ExpeditiousRetreat' : {'name' : 'ExpeditiousRetreat' , 'level' : 1},
        'FalseLife' : {'name' : 'FalseLife' , 'level' : 1},
        'FeatherFall' : {'name' : 'FeatherFall' , 'level' : 1},
        'FogCloud' : {'name' : 'FogCloud' , 'level' : 1},
        'Jump' : {'name' : 'Jump' , 'level' : 1},
        'MageArmor' : {'name' : 'MageArmor' , 'level' : 1},
        'MagicMissile' : {'name' : 'MagicMissile' , 'level' : 1},
        'RayofSickness' : {'name' : 'RayofSickness' , 'level' : 1},
        'Shield' : {'name' : 'Shield' , 'level' : 1},
        'SilentImage' : {'name' : 'SilentImage' , 'level' : 1},
        'Sleep' : {'name' : 'Sleep' , 'level' : 1},
        'Thunderwave' : {'name' : 'Thunderwave' , 'level' : 1},
        'WitchBolt' : {'name' : 'WitchBolt' , 'level' : 1},
    },
    domains : ['dragonicBloodLine', 'wildMagic']
};

var warlockSpells = {
    default: {
      'otherworldlyPatron'  : {'name':'otherWorldyPatron'}, //needs to be chosen
        'pactMagic' : {'name' : 'pactMagic'}
    },
    cantrips: {
        'BladeWard' : {'name' : 'BladeWard' , 'level' : 0},
        'ChillTouch' : {'name' : 'ChillTouch' , 'level' : 0},
        'EldritchBlast' : {'name' : 'EldritchBlast' , 'level' : 0},
        'Friends' : {'name' : 'Friends' , 'level' :0},
        'MageHand' : {'name' : 'MageHand' , 'level' : 0},
        'MinorIllusion' : {'name' : 'MinorIllusion' , 'level' : 0},
        'PoisonSpray' : {'name' : 'PoisonSpray' , 'level' : 0},
        'Prestidigitation' : {'name' : 'Prestidigitation' , 'level' : 0},
        'TrueStrike' : {'name' : 'TrueStrike' , 'level' : 0},
    }
    ,
    levelOne:{
        'ArmorofAgathys' : {'name' : 'ArmorofAgathys' , 'level' : 1},
        'ArmsofHadar' : {'name' : 'ArmsofHadar' , 'level' : 1},
        'CharmPerson' : {'name' : 'CharmPerson' , 'level' : 1},
        'ComprehendLanguages' : {'name' : 'ComprehendLanguages' , 'level' : 1},
        'ExpeditiousRetreat' : {'name' : 'ExpeditiousRetreat' , 'level' : 1},
        'HellishRebuke' : {'name' : 'HellishRebuke' , 'level' : 1},
        'Hex' : {'name' : 'Hex' , 'level' : 1},
        'IllusoryScript' : {'name' : 'IllusoryScript' , 'level' : 1},
        'ProtectionfromEvilandGood' : {'name' : 'ProtectionfromEvilandGood' , 'level' : 1},
        'UnseenServant' : {'name' : 'UnseenServant' , 'level' : 1},
        'WitchBolt' : {'name' : 'WitchBolt' , 'level' : 1},
        'faerieFire' : {'name' : 'faerieFire' , 'level' : 1, 'domain': 'archfey'},
        'sleep' : {'name' : 'sleep' , 'level' : 1, 'domain': 'archfey'},
        'burningHands' : {'name' : 'burningHands' , 'level' : 1, 'domain': 'fiend'},
        'command' : {'name' : 'command' , 'level' : 1, 'domain': 'fiend'},
        'dissonantWhisper' : {'name' : 'dissonantWhisper' , 'level' : 1, 'domain': 'greatOldOne'},
        'tashasHideousLaughter' : {'name' : 'tashasHideousLaughter' , 'level' : 1, 'domain': 'greatOldOne'}
    },
    domains : ['archfey', 'fiend', 'greatOldOne']
};

var wizardSpells = {
    default:{
        'arcaneRecovery' : {'name' : 'arcaneRecovery'}
    },
    cantrips: {
        'AcidSplash' : {'name' : 'AcidSplash' , 'level' : 0},
        'BladeWard' : {'name' : 'BladeWard' , 'level' : 0},
        'ChillTouch' : {'name' : 'ChillTouch' , 'level' : 0},
        'DancingLights' : {'name' : 'DancingLights' , 'level' : 0},
        'FireBolt' : {'name' : 'FireBolt' , 'level' : 0},
        'Friends' : {'name' : 'Friends' , 'level' : 0},
        'Light' : {'name' : 'Light' , 'level' : 0},
        'MageHand' : {'name' : 'MageHand' , 'level' : 0},
        'Mending' : {'name' : 'Mending' , 'level' : 0},
        'Message' : {'name' : 'Message' , 'level' : 0},
        'MinorIllusion' : {'name' : 'MinorIllusion' , 'level' : 0},
        'PoisonSpray' : {'name' : 'PoisonSpray' , 'level' : 0},
        'Prestidigitation' : {'name' : 'Prestidigitation' , 'level' : 0},
        'RayofFrost' : {'name' : 'RayofFrost' , 'level' : 0},
        'ShockingGrasp' : {'name' : 'ShockingGrasp' , 'level' : 0},
        'TrueStrike' : {'name' : 'TrueStrike' , 'level' : 0},
    },
    levelOne:{
        'Alarm' : {'name' : 'Alarm' , 'level' : 1},
        'BurningHands' : {'name' : 'BurningHands' , 'level' : 1},
        'CharmPerson' : {'name' : 'CharmPerson' , 'level' : 1},
        'ChromaticOrb' : {'name' : 'ChromaticOrb' , 'level' : 1},
        'ColorSpray' : {'name' : 'ColorSpray' , 'level' : 1},
        'ComprehendLanguages' : {'name' : 'ComprehendLanguages' , 'level' : 1},
        'DetectMagic' : {'name' : 'DetectMagic' , 'level' : 1},
        'DisguiseSelf' : {'name' : 'DisguiseSelf' , 'level' : 1},
        'ExpeditiousRetreat' : {'name' : 'ExpeditiousRetreat' , 'level' : 1},
        'FalseLife' : {'name' : 'FalseLife' , 'level' : 1},
        'FeatherFall' : {'name' : 'FeatherFall' , 'level' : 1},
        'FindFamiliar' : {'name' : 'FindFamiliar' , 'level' : 1},
        'FogCloud' : {'name' : 'FogCloud' , 'level' : 1},
        'Grease' : {'name' : 'Grease' , 'level' : 1},
        'Identify' : {'name' : 'Identify' , 'level' : 1},
        'IllusoryScript' : {'name' : 'IllusoryScript' , 'level' : 1},
        'Jump' : {'name' : 'Jump' , 'level' : 1},
        'Longstrider' : {'name' : 'Longstrider' , 'level' : 1},
        'MageArmor' : {'name' : 'MageArmor' , 'level' : 1},
        'MagicMissile' : {'name' : 'MagicMissile' , 'level' : 1},
        'ProtectionfromEvilandGood' : {'name' : 'ProtectionfromEvilandGood' , 'level' : 1},
        'RayofSickness' : {'name' : 'RayofSickness' , 'level' : 1},
        'Shield' : {'name' : 'Shield' , 'level' : 1},
        'SilentImage' : {'name' : 'SilentImage' , 'level' : 1},
        'Sleep' : {'name' : 'Sleep' , 'level' : 1},
        'TashasHideousLaughter' : {'name' : 'Tasha’sHideousLaughter' , 'level' : 1},
        'TensersFloatingDisk' : {'name' : 'Tenser’sFloatingDisk' , 'level' : 1},
        'Thunderwave' : {'name' : 'Thunderwave' , 'level' : 1},
        'UnseenServant' : {'name' : 'UnseenServant' , 'level' : 1},
        'WitchBolt' : {'name' : 'WitchBolt' , 'level' : 1},
    }
};