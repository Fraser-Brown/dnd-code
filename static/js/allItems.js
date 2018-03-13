var explorersPack = {
        'name' : 'pack',
        'backpack' : {'name' : 'backpack', 'quantity' :1},
        'bedroll' : {'name' : 'bedroll', 'quantity' :1},
        'messKit' : {'name' : 'messkit', 'quantity' :1},
        'tinderbox' : {'name' : 'tinderbox', 'quantity' :1},
        'torches' : {'name' : 'torches', 'quantity' : 10},
        'dayOfRations' : {'name' : 'dayOfRations', 'quantity' :10},
        'waterskin' : {'name' : 'waterskin', 'quantity' :1},
        'oneFootOfHempenRope' : {'name':'oneFootOfHempenRope', 'quantity':50}
};

var burglarsPack = {
         'name' : 'pack',
         'backpack' : {'name' : 'backpack', 'quantity' : 1},
        'ballbearings' : {'name' : 'ballbearings', 'quantity' :1000},
        'footOfString' : {'name' : 'footOfString', 'quantity' : 10},
        'bell' : {'name' : 'bell', 'quantity' :1},
        'candles' : {'name' : 'candles', 'quantity' :5},
        'crowbar' : {'name' : 'crowbar', 'quantity' :1},
        'hammer' : {'name' : 'hammer', 'quantity' : 1},
        'pitons' : {'name' : 'pitons', 'quantity' :10},
        'hoodedlantern' : {'name' : 'hoodedlantern', 'quantity' :1},
        'flaskOfOil' : {'name' : 'flasksofoil', 'quantity' :2},
        'dayOfRations' : {'name' : 'dayOfRations', 'quantity' :5},
        'tinderbox' : {'name' : 'tinderbox', 'quantity' :1},
        'waterskin' : {'name' : 'waterskin', 'quantity' :1},
        'oneFootOfHempenRope' : {'name':'oneFootOfHempenRope', 'quantity':50}

};

var diplomatsPack = {
    'name' : 'pack',

    'chest' : {'name' : 'chest', 'quantity' :1},
        'casesforMapsAndScrolls' : {'name' : 'casesforMapsAndScrolls', 'quantity' :2},
        'setOfFineClothes' : {'name' : 'setOfFineClothes', 'quantity' :1},
        'bottleOfInk' : {'name' : 'bottleOfInk', 'quantity' :1},
        'inkPen' : {'name' : 'inkPen', 'quantity' :1},
        'lamp' : {'name' : 'lamp', 'quantity' :1},
        'flaskOfOil' : {'name' : 'flasksofoil', 'quantity' :2},
        'sheetOfPaper' : {'name' : 'sheetOfPaper', 'quantity' :5},
        'vialOfPerfume' : {'name' : 'vialOfPerfume', 'quantity' :1},
        'sealingWax' : {'name' : 'sealingWax', 'quantity' :1},
        'soap' : {'name' : 'soap', 'quantity' :1},
};

var dungeoneersPack = {
    'name' : 'pack',

        'backpack' : {'name' : 'backpack', 'quantity' :1},
        'crowbar' : {'name' : 'crowbar', 'quantity' :1},
        'hammer' : {'name' : 'hammer', 'quantity' :1},
        'pitons' : {'name' : 'pitons', 'quantity' :10},
        '1torches' : {'name' : 'torches', 'quantity' :10},
        'tinderbox' : {'name' : 'tinderbox', 'quantity' :1},
        'dayOfRations' : {'name' : 'dayOfRations', 'quantity' :10},
        'waterskin' : {'name' : 'waterskin', 'quantity' :1},
        'oneFootOfHempenRope' : {'name':'oneFootOfHempenRope', 'quantity':50}

};

var entertainersPack = {
    'name' : 'pack',

    'backpack' : {'name' : 'backpack', 'quantity' : 1},
        'bedroll' : {'name' : 'bedroll', 'quantity' : 1},
        'costume' : {'name' : 'costume', 'quantity' : 2},
        'candle' : {'name' : 'candle', 'quantity' : 5},
        'dayOfRations' : {'name' : 'dayOfRations', 'quantity' :5},
        'waterskin' : {'name' : 'waterskin', 'quantity' : 1},
        'disguiseKit' : {'name' : 'disguiseKit', 'quantity' : 1}
};

var priestsPack = {
    'name' : 'pack',
    'backpack' : {'name' : 'backpack', 'quantity' : 1},
        'blanket' : {'name' : 'blanket', 'quantity' : 1},
        'candle' : {'name' : 'candle', 'quantity' : 10},
        'tinderbox' : {'name' : 'tinderbox', 'quantity' : 1},
        'almsbox' : {'name' : 'almsbox', 'quantity' : 1},
        'blocksOfIncense' : {'name' : 'blocksOfIncense', 'quantity' : 2},
        'censer' : {'name' : 'censer', 'quantity' : 1},
        'vestments' : {'name' : 'vestments', 'quantity' : 1},
        'dayOfRations' : {'name' : 'dayOfRations', 'quantity' :2},
        'waterskin' : {'name' : 'waterskin', 'quantity' : 1}

};

var scholarsPack = {
    'name' : 'pack',
        'backpack' : {'name' : 'backpack', 'quantity' : 1},
        'bookOfLore' : {'name' : 'bookOfLore', 'quantity' : 1},
        'bottleOfInk' : {'name' : 'abottleofink', 'quantity' : 1},
        'inkPen' : {'name' : 'inkPen', 'quantity' : 1},
        'sheetsOfParchment' : {'name' : 'sheetsOfParchment', 'quantity' : 10},
        'littleBagOfSand' : {'name' : 'littleBagOfSand', 'quantity' : 1},
        'smallKnife' : {'name' : 'smallKnife', 'quantity' : 1},

};

var simpleWeapons = {
    meleeWeapons : {
        'Club' : {'name' : 'Club' ,'cost' : { 'sp' : '1'} ,'dmgDice' : '1d4' ,'dmgType' : 'bludgeoning' ,'weight' : 2,'type' : 'simple' ,'properties' : ['Light',] },
        'Dagger' : {'name' : 'Dagger' ,'cost' : { 'gp' : '2'} ,'dmgDice' : '1d4' ,'dmgType' : 'piercing' ,'weight' : 1,'type' : 'simple' ,'properties' : ['Finesse','light','thrown','(range','20/60)',] },
        'Greatclub' : {'name' : 'Greatclub' ,'cost' : { 'sp' : '2'} ,'dmgDice' : '1d8' ,'dmgType' : 'bludgeoning' ,'weight' : 10,'type' : 'simple' ,'properties' : ['Two-handed',] },
        'Handaxe' : {'name' : 'Handaxe' ,'cost' : { 'gp' : '5'} ,'dmgDice' : '1d6' ,'dmgType' : 'slashing' ,'weight' : 2,'type' : 'simple' ,'properties' : ['Light','thrown','(range','20/60)',] },
        'javelin' : {'name' : 'javelin' ,'cost' : { 'sp' : '5'} ,'dmgDice' : '1d6' ,'dmgType' : 'piercing' ,'weight' : 2,'type' : 'simple' ,'properties' : ['Thrown','(range','30/120)',] },
        'LightHammer' : {'name' : 'LightHammer' ,'cost' : { 'gp' : '2'} ,'dmgDice' : '1d4' ,'dmgType' : 'bludgeoning' ,'weight' : 2,'type' : 'simple' ,'properties' : ['Light','thrown','(range','20/60)',] },
        'Mace' : {'name' : 'Mace' ,'cost' : { 'gp' : '5'} ,'dmgDice' : '1d6' ,'dmgType' : 'bludgeoning' ,'weight' : 4,'type' : 'simple' ,'properties' : ['—',] },
        'Quarterstaff' : {'name' : 'Quarterstaff' ,'cost' : { 'sp' : '2'} ,'dmgDice' : '1d6' ,'dmgType' : 'bludgeoning' ,'weight' : 4,'type' : 'simple' ,'properties' : ['Versatile','(1d8)',] },
        'Sickle' : {'name' : 'Sickle' ,'cost' : { 'gp' : '1'} ,'dmgDice' : '1d4' ,'dmgType' : 'slashing' ,'weight' : 2,'type' : 'simple' ,'properties' : ['Light',] },
        'Spear' : {'name' : 'Spear' ,'cost' : { 'gp' : '1'} ,'dmgDice' : '1d6' ,'dmgType' : 'piercing' ,'weight' : 3,'type' : 'simple' ,'properties' : ['Thrown','(range','20/60)','versatile','(1d8)',] },

   },

    rangedWeapons : {
        'lightCrossbow' : {'name' : 'lightCrossbow' ,'cost' : { 'gp' : '25'} ,'dmgDice' : '1d8' ,'dmgType' : 'piercing' ,'weight' : 5,'type' : 'simple' ,'properties' : ['Ammunition','(range','80/320)','loading','two-handed',] },
        'Dart' : {'name' : 'Dart' ,'cost' : { 'cp' : '5'} ,'dmgDice' : '1d4' ,'dmgType' : 'piercing' ,'weight' : 1/4,'type' : 'simple' ,'properties' : ['Finesse','thrown','(range','20/60)',] },
        'Shortbow' : {'name' : 'Shortbow' ,'cost' : { 'gp' : '25'} ,'dmgDice' : '1d6' ,'dmgType' : 'piercing' ,'weight' : 2,'type' : 'simple' ,'properties' : ['Ammunition','(range','80/320)','two-handed',] },
        'Sling' : {'name' : 'Sling' ,'cost' : { 'sp' : '1'} ,'dmgDice' : '1d4' ,'dmgType' : 'bludgeoning' ,'weight' : 0,'type' : 'simple' ,'properties' : ['(range','30/120)',] },
    }
};

var martialWeapons = {
    meleeWeapons : {
        'Battleaxe' : {'name' : 'Battleaxe' ,'cost' : { 'gp' : '10'} ,'dmgDice' : '1d8' ,'dmgType' : 'slashing' ,'weight' : 4,'type' : 'martial' ,'properties' : ['Versatile','(1d10)',] },
        'Flail' : {'name' : 'Flail' ,'cost' : { 'gp' : '10'} ,'dmgDice' : '1d8' ,'dmgType' : 'bludgeoning' ,'weight' : 2,'type' : 'martial' ,'properties' : ['—',] },
        'Glaive' : {'name' : 'Glaive' ,'cost' : { 'gp' : '20'} ,'dmgDice' : '1d10' ,'dmgType' : 'slashing' ,'weight' : 6,'type' : 'martial' ,'properties' : ['Heavy','reach','two-handed',] },
        'Greataxe' : {'name' : 'Greataxe' ,'cost' : { 'gp' : '30'} ,'dmgDice' : '1d12' ,'dmgType' : 'slashing' ,'weight' : 7,'type' : 'martial' ,'properties' : ['Heavy','two-handed',] },
        'Greatsword' : {'name' : 'Greatsword' ,'cost' : { 'gp' : '50'} ,'dmgDice' : '2d6' ,'dmgType' : 'slashing' ,'weight' : 6,'type' : 'martial' ,'properties' : ['Heavy','two-handed',] },
        'Halberd' : {'name' : 'Halberd' ,'cost' : { 'gp' : '20'} ,'dmgDice' : '1d10' ,'dmgType' : 'slashing' ,'weight' : 6,'type' : 'martial' ,'properties' : ['Heavy','reach','two-handed',] },
        'Lance' : {'name' : 'Lance' ,'cost' : { 'gp' : '10'} ,'dmgDice' : '1d12' ,'dmgType' : 'piercing' ,'weight' : 6,'type' : 'martial' ,'properties' : ['Reach','special',] },
        'Longsword' : {'name' : 'Longsword' ,'cost' : { 'gp' : '15'} ,'dmgDice' : '1d8' ,'dmgType' : 'slashing' ,'weight' : 3,'type' : 'martial' ,'properties' : ['Versatile','(1d10)',] },
        'Maul' : {'name' : 'Maul' ,'cost' : { 'gp' : '10'} ,'dmgDice' : '2d6' ,'dmgType' : 'bludgeoning' ,'weight' : 10,'type' : 'martial' ,'properties' : ['Heavy','two-handed',] },
        'Morningstar' : {'name' : 'Morningstar' ,'cost' : { 'gp' : '15'} ,'dmgDice' : '1d8' ,'dmgType' : 'piercing' ,'weight' : 4,'type' : 'martial' ,'properties' : ['—',] },
        'Pike' : {'name' : 'Pike' ,'cost' : { 'gp' : '5'} ,'dmgDice' : '1d10' ,'dmgType' : 'piercing' ,'weight' : 18,'type' : 'martial' ,'properties' : ['Heavy','reach','two-handed',] },
        'Rapier' : {'name' : 'Rapier' ,'cost' : { 'gp' : '25'} ,'dmgDice' : '1d8' ,'dmgType' : 'piercing' ,'weight' : 2,'type' : 'martial' ,'properties' : ['Finesse',] },
        'Scimitar' : {'name' : 'Scimitar' ,'cost' : { 'gp' : '25'} ,'dmgDice' : '1d6' ,'dmgType' : 'slashing' ,'weight' : 3,'type' : 'martial' ,'properties' : ['Finesse','light',] },
        'Shortsword' : {'name' : 'Shortsword' ,'cost' : { 'gp' : '10'} ,'dmgDice' : '1d6' ,'dmgType' : 'piercing' ,'weight' : 2,'type' : 'martial' ,'properties' : ['Finesse','light',] },
        'Trident' : {'name' : 'Trident' ,'cost' : { 'gp' : '5'} ,'dmgDice' : '1d6' ,'dmgType' : 'piercing' ,'weight' : 4,'type' : 'martial' ,'properties' : ['Thrown','(range','20/60)','versatile','(1d8)',] },
        'Warpick' : {'name' : 'Warpick' ,'cost' : { 'gp' : '5'} ,'dmgDice' : '1d8' ,'dmgType' : 'piercing' ,'weight' : 2,'type' : 'martial' ,'properties' : ['—',] },
        'Warhammer' : {'name' : 'Warhammer' ,'cost' : { 'gp' : '15'} ,'dmgDice' : '1d8' ,'dmgType' : 'bludgeoning' ,'weight' : 2,'type' : 'martial' ,'properties' : ['Versatile','(1d10)',] },
        'Whip' : {'name' : 'Whip' ,'cost' : { 'gp' : '2'} ,'dmgDice' : '1d4' ,'dmgType' : 'slashing' ,'weight' : 3,'type' : 'martial' ,'properties' : ['Finesse','reach',] },
    },
    rangedWeapons : {
        'Blowgun' : {'name' : 'Blowgun' ,'cost' : { 'gp' : '10'} ,'dmgDice' : '1' ,'dmgType' : 'piercing' ,'weight' : 1,'type' : 'martial' ,'properties' : ['Ammunition','(range','25/100)','loading',] },
        'handCrossbow' : {'name' : 'handCrossbow' ,'cost' : { 'gp' : '75'} ,'dmgDice' : '1d6' ,'dmgType' : 'piercing' ,'weight' : 3,'type' : 'martial' ,'properties' : ['Ammunition','(range','30/120)','light','loading',] },
        'heavyCrossbow' : {'name' : 'heavyCrossbow' ,'cost' : { 'gp' : '50'} ,'dmgDice' : '1d10' ,'dmgType' : 'piercing' ,'weight' : 18,'type' : 'martial' ,'properties' : ['Ammunition','(range','100/400)','heavy','loading','two-handed',] },
        'Longbow' : {'name' : 'Longbow' ,'cost' : { 'gp' : '50'} ,'dmgDice' : '1d8' ,'dmgType' : 'piercing' ,'weight' : 2,'type' : 'martial' ,'properties' : ['Ammunition','(range','150/600)','heavy','two-handed',] },
        'Net' : {'name' : 'Net' ,'cost' : { 'gp' : '1'} ,'dmgDice' : '0d1' ,'dmgType' : 'none' ,'weight' : 3,'type' : 'martial' ,'properties' : ['Special','thrown','(range','5/15)',] },
    }
};

var armour = {
    light : {
        'Padded' : {'name' : 'Padded' ,'cost' : { 'gp' : '5'} ,'ac' : '11' ,'mod' : 'Dex' ,'type' : 'light' ,'strength' : '—' ,'stealth' : 'Disadvantage' ,'weight' : '8'},
        'Leather' : {'name' : 'Leather' ,'cost' : { 'gp' : '10'} ,'ac' : '11' ,'mod' : 'Dex' ,'type' : 'light' ,'strength' : '—' ,'stealth' : '—' ,'weight' : '10'},
        'StuddedLeather' : {'name' : 'StuddedLeather' ,'cost' : { 'gp' : '45'} ,'ac' : '12' ,'mod' : 'Dex' ,'type' : 'light' ,'strength' : '—' ,'stealth' : '—' ,'weight' : '13'}
    },
    medium:{
        'Hide' : {'name' : 'Hide' ,'cost' : { 'gp' : '10'} ,'ac' : '12' ,'mod' : 'Dex' ,'modMax' : '2' ,'type' : 'medium' ,'strength' : '—' ,'stealth' : '—' ,'weight' : '12'},
        'ChainShirt' : {'name' : 'ChainShirt' ,'cost' : { 'gp' : '50'} ,'ac' : '13' ,'mod' : 'Dex' ,'modMax' : '2' ,'type' : 'medium' ,'strength' : '—' ,'stealth' : '—' ,'weight' : '20'},
        'ScaleMail' : {'name' : 'ScaleMail' ,'cost' : { 'gp' : '50'} ,'ac' : '14' ,'mod' : 'Dex' ,'modMax' : '2' ,'type' : 'medium' ,'strength' : '—' ,'stealth' : 'Disadvantage' ,'weight' : '45'},
        'Breastplate' : {'name' : 'Breastplate' ,'cost' : { 'gp' : '400'} ,'ac' : '14' ,'mod' : 'Dex'  ,'modMax' : '2' ,'type' : 'medium' ,'strength' : '—' ,'stealth' : '—' ,'weight' : '20'},
        'HalfPlate' : {'name' : 'HalfPlate' ,'cost' : { 'gp' : '750'} ,'ac' : '15' ,'mod' : 'Dex' ,'modMax' : '2' ,'type' : 'medium' ,'strength' : '—' ,'stealth' : 'Disadvantage' ,'weight' : '40'}
    },
    heavy:{
        'RingMail' : {'name' : 'RingMail' ,'cost' : { 'gp' : '30'} ,'ac' : '14' , 'type' : 'heavy' ,'strength' : 'Disadvantage' ,'stealth' : '40' ,'weight' : 'lb.'},
        'ChainMail' : {'name' : 'ChainMail' ,'cost' : { 'gp' : '75'} ,'ac' : '16' , 'type' : 'heavy' ,'strength' : '13' ,'stealth' : 'Disadvantage' ,'weight' : '55'},
        'Splint' : {'name' : 'Splint' ,'cost' : { 'gp' : '200'} ,'ac' : '17' , 'type' : 'heavy' ,'strength' : '15' ,'stealth' : 'Disadvantage' ,'weight' : '60'},
        'Plate' : {'name' : 'Plate' ,'cost' : { 'gp' : '1500'} ,'ac' : '18' , 'type' : 'heavy' ,'strength' : '15' ,'stealth' : 'Disadvantage' ,'weight' : '65'}
    },
    'shield' : { 'name' : 'shield', 'cost' : {'gp' : '10'}, 'ac' : '2', 'weight': '6'}
};

//plenty of items need to be added but this is sufficient for the starting set;