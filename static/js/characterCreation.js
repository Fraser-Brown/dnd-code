function createForm(){
    $('.creator').append('<p> Create a character</p>'+
        '<div id = "newCharacter"> ' +
        '<p> Name </p><input type="text" id="name"/><br/> '+
        '<br/><p>Roll Attribute Scores  :  </p><button type="button" onclick="attrRoller()"> Roll Me </button> '+
        '</div');
    baseStats(races, 'race', 'newCharacter');
    baseStats(moral, 'moral', 'newCharacter');
    baseStats(reason, 'reason', 'newCharacter');
    baseStats(classes, 'class', 'newCharacter');
    $('#newCharacter').append('<br/> <br/> <button id="startAbilities" type="button" onclick="startAbilities()"> Move onto Abilities </button> ');
    $('#startDiv').remove();
}

function startAbilities() {
    collectAllStats('newCharacter');
    setRaceTraits();
    startingHpandGold();
    $('#newCharacter').remove();
    $('.creator').append('<div id="abilities"> <p> Time to choose abilities</p></div>');
    generateProficiencies();
    generateSpellForCreation();
    generateStartingEquipment();
    //add a begin quest button
    $('.creator').append('<button type = "button" onclick = finalUpdate()>Begin your quest</button>')
}

function startingHpandGold(){
    playerStats['level'] = 1;
    playerStats['xp'] = 0;
    attributes['money'] = {};
    var con = attributes['con'];
    switch(playerStats['class']){
        case 'barbarian':
            attributes['hp'] = 12 + calcMod(con);
            attributes['money']['gp'] = diceRoller(2,4) * 10;
            attributes['hd'] = 12;
            break;
        case 'bard':
            attributes['hp'] = 8 + calcMod(con);
            attributes['money']['gp'] = diceRoller(5,4) * 10;
            attributes['hd'] = 8;
            break;
        case 'cleric':
            attributes['hp'] = 8 + calcMod(con);
            attributes['money']['gp'] = diceRoller(5,4) * 10;
            attributes['hd'] = 8;
            break;
        case 'druid':
            attributes['hp'] = 8 + calcMod(con);
            attributes['money']['gp'] = diceRoller(2,4) * 10;
            attributes['hd'] = 8;
            break;
        case 'fighter':
            attributes['hp'] = 10 + calcMod(con);
            attributes['money']['gp'] = diceRoller(5,4) * 10;
            attributes['hd'] = 10;
            break;
        case 'monk':
            attributes['hp'] = 8 + calcMod(con);
            attributes['money']['gp'] = diceRoller(5,4);
            attributes['hd'] = 8;
            break;
        case 'paladin':
            attributes['hp'] = 10 + calcMod(con);
            attributes['money']['gp'] = diceRoller(5,4) * 10;
            attributes['hd'] = 10;
            break;
        case 'ranger':
            attributes['hp'] = 10 + calcMod(con);
            attributes['money']['gp'] = diceRoller(5,4) * 10;
            attributes['hd'] = 10;
            break;
        case 'rogue':
            attributes['hp'] = 8 + calcMod(con);
            attributes['money']['gp'] = diceRoller(4,4) * 10;
            attributes['hd'] = 8;
            break;
        case 'sorcerer':
            attributes['hp'] = 6 + calcMod(con);
            attributes['money']['gp'] = diceRoller(3,4) * 10;
            attributes['hd'] = 6;
            break;
        case 'warlock':
            attributes['hp'] = 8 + calcMod(con);
            attributes['money']['gp'] = diceRoller(4,4) * 10;
            attributes['hd'] = 8;
            break;
        case 'wizard':
            attributes['hp'] = 6 + calcMod(con);
            attributes['money']['gp']= diceRoller(4,4) * 10;
            attributes['hd'] = 6;
            break;
    }
    attributes['maxHp'] = attributes['hp'];
}

function setRaceTraits(){
    switch (playerStats['race']) {
        case 'dwarf':
            attributes['con'] += 2;
            attributes['str'] += 2;
            alert('race traits updated: now con is ' + attributes['con'] + ' and str is ' + attributes['str']);
            break;
        case 'elf':
            attributes['dex'] += 2;
            attributes['int'] += 1;
            alert('race traits updated: now dex is ' + attributes['dex'] + ' and int is ' + attributes['int']);
            break;
        case 'halfling':
            attributes['dex'] += 2;
            attributes['cha'] += 1;
            alert('race traits updated: now dex is ' + attributes['dex'] + ' and cha is ' + attributes['cha']);
            break;
        case 'human':
            attributes['str'] += 1;
            attributes['dex'] += 1;
            attributes['con'] += 1;
            attributes['int'] += 1;
            attributes['wis'] += 1;
            attributes['cha'] += 1;
            alert('race traits updated: humans recieve +1 to all scores');
            break;
        case 'gnome':
            attributes['int'] += 2;
            attributes['dex'] += 1;
            attributes['con'] += 1;
            alert('race traits updated: now dex is ' + attributes['dex'] +', int is '+ attributes['int'] +' and con is ' + attributes['con']);
            break;
        case 'orc':
            attributes['str'] += 2;
            attributes['con'] += 1;
            alert('race traits updated: now str is ' + attributes['str'] + ' and con is ' + attributes['con']);
            break;
    }
}

function collectAllStats(location){
    let items = document.getElementById(location).children;
    for(let i = 0;i< items.length; i++){
        if(items[i].value !== undefined && items[i].value !== ""){
            playerStats[items[i].id] = items[i].value;
        }
    }

}

function baseStats(options, statName, location){
    $('#' + location).append('<p>'+statName+'</p><select id=' + statName+ '> </select>');

    for (var opt in options){
        $('#'+statName).append('<option value=' +JSON.stringify(options[opt])+ '>'+JSON.stringify(options[opt])+'</option>')
    }
}

function generateProficiencies(){
    proficiencies['bonus'] = 2;
    switch(playerStats['class']){
        case 'barbarian':
            var armour = ['light', 'medium', 'shields'];
            var weapons = ['simple', 'martial'];
            var tools = [];
            var savingThrows = ['str', 'con'];
            var skills = ['animalHandling', 'athletics', 'intimidation', 'nature', 'perception','survival'];
            var pick= 2;
            associatedSpells = barbarianSpells;
            break;
        case 'bard':
            var armour = ['light'];
            var weapons = ['simple', 'hand crossbow', 'longsword', 'rapier', 'shortsword'];
            var tools = ['instruments'];
            var savingThrows = ['dex', 'cha'];
            var skills = ['athletics', 'acrobatics', 'sleight of hand','stealth','arcana','history','investigation', 'nature',
                'religion', 'animalHandling','insight','medicine','perception','survival','deception','intimidation', 'performance', 'persuasion'];
            var pick = 3;
            associatedSpells = bardSpells;
            break;
        case 'cleric':
            var armour = ['light', 'medium', 'shields'];
            var weapons = ['simple'];
            var tools = [];
            var savingThrows = ['wis', 'cha'];
            var skills = ['history', 'insight', 'medicine', 'persuasion', 'religion'];
            var pick = 3;
            associatedSpells = clericSpells;
            break;
        case 'druid':
            var armour = ['light', 'medium', 'shields'];
            var weapons = ['simple', 'martial'];
            var tools = ['herbalism kit'];
            var savingThrows = ['int', 'wis'];
            var skills = ['arcana', 'animalHandling', 'insight', 'Medicine', 'Nature', 'Perception',
                'religion',  'survival'];
            var pick = 2;
            associatedSpells = druidSpells;
            break;
        case 'fighter':
            var armour = ['light', 'medium','heavy', 'shields'];
            var weapons = ['simple', 'martial'];
            var tools = [];
            var savingThrows = ['str', 'con'];
            var skills = ['acrobatics', 'animalHandling', 'athletics', 'history','insight', 'intimidation', 'perception', 'survival'];
            var pick = 2;
            associatedSpells = fighterSpells;
            break;
        case 'monk':
            var armour = [];
            var weapons = ['simple', 'shortswords'];
            var tools = ['artisan', 'instruments'];
            var savingThrows = ['str', 'dex'];
            var skills = ['acrobatics', 'athletics','history','insight','religion','stealth'];
            var pick = 2;
            associatedSpells = monkSpells;
            break;
        case 'paladin':
            var armour = ['light', 'medium','heavy', 'shields'];
            var weapons = ['simple', 'martial'];
            var tools = [];
            var savingThrows = ['wis', 'cha'];
            var skills = ['athletics','intimidation', 'insight', 'medicine', 'persuasion', 'religion'];
            var pick =2;
            associatedSpells = paladinSpells;
            break;
        case 'ranger':
            var armour = ['light', 'medium','shields'];
            var weapons = ['simple', 'martial'];
            var tools = [];
            var savingThrows = ['str', 'dex'];
            var skills = ['animalHandling','athletics', 'insight', 'investigation','nature', 'perception', 'stealth', 'survival'];
            var pick = 3;
            associatedSpells = rangerSpells;
            break;
        case 'rogue':
            var armour = ['light'];
            var weapons = ['simple', 'hand crossbows', 'longswords', 'rapiers','shortswords'];
            var tools = ['theives tools'];
            var savingThrows = ['dex', 'int'];
            var skills = ['acrobatics','athletics','deception','investigation','intimidation', 'insight', 'perception', 'persuasion','performnce', 'sleight of hand', 'stealth'];
            var pick = 4;
            associatedSpells = rogueSpells;
            break;
        case 'sorcerer':
            var armour = [];
            var weapons = ['dagger', 'dart','sling','quarterstaff','light crossbow'];
            var tools = [];
            var savingThrows = ['con', 'cha'];
            var skills = ['arcana','deception','insight', 'intimidation', 'persuasion', 'religion'];
            var pick =2;
            associatedSpells = sorcererSpells;
            break;
        case 'warlock':
            var armour = ['light'];
            var weapons = ['simple'];
            var tools = [];
            var savingThrows = ['wis', 'cha'];
            var skills = ['arcana','deception','history', 'intimidation', 'investigation', 'religion'];
            var pick =2;
            associatedSpells = warlockSpells;
            break;
        case 'wizard':
            var armour = [];
            var weapons = ['dagger', 'dart','sling','quarterstaff','light crossbow'];
            var tools = [];
            var savingThrows = ['int', 'wis'];
            var skills = ['arcana','history','insight', 'investigation','medicine', 'religion'];
            var pick =2;
            associatedSpells = wizardSpells;
            break;
    }
    proficiencies['armour'] = armour;
    proficiencies['weapons'] = weapons;
    proficiencies['tools'] = tools;
    proficiencies['savingThrows'] = savingThrows;
    chooseStuff(skills, pick, 'proficiencies', 'skills', proficiencies);
}

function getDomainSpells(classSpells, domain){ //need to fix this
    var allSpells = [];
    for(var levels in classSpells){
        var x = classSpells[levels];
        allSpells.push(x);
    }
    var domainSpells = [];
    for(var i in allSpells){
        var group = allSpells[i];
        for(var spell in group){
            if(group[spell].domain === domain) {
                domainSpells.push(group[spell]);
            }
        }
    }
    return domainSpells;
} //todo there are also bonuses attributed to domains, add these to the json to add to character

function generateSpellForCreation(){//spells['domainSpells'] = getDomainSpells(associatedSpells,playerStats['chosenDomain']); needs added somewhere
    spells['default'] = associatedSpells.default;
    var c;
    var s;
    switch(playerStats['class']){
        case 'barbarian':
            spellsPerDay['default'] = 2;
            return;
        case 'bard':
            spellsPerDay['level1'] = 2;
            c = 2;
            s = 4;
            break;
        case 'cleric':
            spellsPerDay['level1'] = 2;
            c = 3;
            s = 2;
            break;
        case 'druid':
            spellsPerDay['level1'] = 2;
            c = 2;
            s = 2;
            break;
        case 'fighter':
            return;
        case 'monk':
            return;
        case 'paladin':
            return;
        case 'ranger':
            return;
        case 'rogue':
            return;
        case 'sorcerer':
            spellsPerDay['level1'] = 2;
            c =4;
            s=2;
            //a bunch of specific stuff associated
            break;
        case 'warlock':
            spellsPerDay['level1'] = 1;
            c=2;
            s=2;
            break;//technically gets an expanded spell list not domain spells, do i just give them freely?
        case 'wizard':
            spellsPerDay['level1'] = 2;
            c=3;
            s=6;
            break;
    }
    chooseStuff(associatedSpells.domains, 1, 'domain', 'chosenDomain', playerStats);
    chooseStuff(associatedSpells.cantrips, c, 'cantrips', 'level0', spells);
    chooseStuff(associatedSpells.levelOne, s, 'levelOne', 'level1',spells);
}

function generateStartingEquipment(){
    inventory['weapons'] = {};
    inventory['equipment'] = {};
    inventory['tools'] = {};
    inventory['armour'] = {};
    switch(playerStats['class']){
        case 'barbarian':
            var handaxes = {'handaxe' : {'name' : 'Handaxe' ,'cost' : { 'gp' : '5'} ,'dmgDice' : '1d6' ,'dmgType' : 'slashing' ,'weight' : 2,'type' : 'simple' ,'properties' : ['Light','thrown','(range','20/60)',], 'quantity' : 2 }}
            var choice1 = martialWeapons.meleeWeapons;
            var choice2 = Object.assign({},handaxes, simpleWeapons.meleeWeapons, simpleWeapons.rangedWeapons);
            inventory['equipment']['pack'] = explorersPack;
            inventory['weapons']['javelin'] = simpleWeapons.meleeWeapons.javelin;
            inventory['weapons']['javelin']['quantity'] = 4;
            chooseStuff(choice1,1,'startingWeapon1','weapons', inventory);
            chooseStuff(choice2, 1, 'startingWeapon2', 'weapons', inventory);
            break;
        case 'bard':
            choice2 = [diplomatsPack, entertainersPack];
            choice1 = [martialWeapons.meleeWeapons['Rapier'], martialWeapons.meleeWeapons['Longsword']];

            chooseStuff(choice1,1,'startingWeapon1','weapons', inventory);
            chooseStuff(choice2, 1, 'pack', 'equipment', inventory);
            inventory['instrument'] = 'lute';
            inventory['armour']['leather'] = armour.light.Leather;
            inventory['weapons']['dagger'] = simpleWeapons.meleeWeapons.Dagger;
            break;
        case 'cleric':
            choice1 = [simpleWeapons.meleeWeapons.Mace, martialWeapons.meleeWeapons.Warhammer];
            choice2 = [armour.medium.ScaleMail, armour.light.Leather, armour.heavy.ChainMail];
            var choice3 = Object.assign({}, simpleWeapons.meleeWeapons, simpleWeapons.rangedWeapons);
            var choice4 = [priestsPack, explorersPack];
            inventory['weapons']['shield'] = armour.shield; //and a holy symbol

            chooseStuff(choice1,1, 'startingWeapon1', 'weapons', inventory);
            chooseStuff(choice2,1, 'armourChoice', 'armour', inventory);
            chooseStuff(choice3,1, 'startingWeapon2', 'weapons', inventory);
            chooseStuff(choice4,1, 'pack', 'equipment', inventory);
            break;
        case 'druid':
            var shield = {'shield' : armour.shield};
            var scimitar = {'scimitar' : martialWeapons.meleeWeapons.Scimitar};
            choice1 = Object.assign({}, shield, simpleWeapons.meleeWeapons, simpleWeapons.rangedWeapons);
            choice2 = Object.assign({}, scimitar, simpleWeapons.meleeWeapons);
            inventory['armour']['leather'] = armour.light.Leather;
            inventory['equipment']['pack'] = explorersPack;
            //and a focus;
            chooseStuff(choice1,1, 'startingWeapon1', 'weapons', inventory);
            chooseStuff(choice2,1, 'startingWeapon2', 'weapons', inventory);
            break;
        case 'fighter':
            var shield = {'shield' : armour.shield};
            var handaxe = {'handaxe' : {'name' : 'Handaxe' ,'cost' : { 'gp' : '5'} ,'dmgDice' : '1d6' ,'dmgType' : 'slashing' ,'weight' : 2,'type' : 'simple' ,'properties' : ['Light','thrown','(range','20/60)',], 'quantity' : 2 }}
            var opt = Object.assign({}, armour.light.Leather, martialWeapons.rangedWeapons.Longbow); //and 20 arrows
            choice1 = [armour.heavy.ChainMail, opt];
            choice2 = Object.assign({}, shield, martialWeapons.meleeWeapons, martialWeapons.rangedWeapons);
            choice3 = Object.assign({},martialWeapons.meleeWeapons, martialWeapons.rangedWeapons);
            choice4 = [simpleWeapons.rangedWeapons.lightCrossbow, handaxe ];
            var choice5 = [dungeoneersPack, explorersPack];

            chooseStuff(choice1,1, 'armour1', 'armour', inventory);
            chooseStuff(choice2,1, 'startingWeapon1', 'weapons', inventory);
            chooseStuff(choice3,1, 'startingWeapon2', 'weapons', inventory);
            chooseStuff(choice4,1, 'startingWeapon3', 'weapons', inventory);
            chooseStuff(choice5,1, 'pack', 'equipment', inventory);

        case 'monk':
            var shortSword = {'shortSword' :martialWeapons.meleeWeapons.Shortsword };
            choice1 = Object.assign({},shortSword, simpleWeapons.meleeWeapons, simpleWeapons.rangedWeapons);
            choice2 = [dungeoneersPack, explorersPack];
            inventory['weapons']['darts'] = {'name' : 'Dart' ,'cost' : { 'cp' : '5'} ,'dmgDice' : '1d4' ,'dmgType' : 'piercing' ,'weight' : 1/4,'type' : 'simple' ,'properties' : ['Finesse','thrown','(range','20/60)',], 'quantity' : 10 };
            chooseStuff(choice2, 1,'pack', 'equipment', inventory);
            chooseStuff(choice1, 1,'startingWeapon1', 'weapons', inventory);
            break;
        case 'paladin':
            var shield = {'shield' : armour.shield};
            var javelin = {'javelin' :{'name' : 'javelin' ,'cost' : { 'sp' : '5'} ,'dmgDice' : '1d6' ,'dmgType' : 'piercing' ,'weight' : 2,'type' : 'simple' ,'properties' : ['Thrown','(range','30/120)',], 'quantity' : 5 }}
            choice2 = Object.assign({},shield, martialWeapons.meleeWeapons, martialWeapons.rangedWeapons);
            choice3 = Object.assign({},martialWeapons.meleeWeapons, martialWeapons.rangedWeapons);
            choice1 = Object.assign({}, simpleWeapons.rangedWeapons, simpleWeapons.meleeWeapons,javelin);
            choice4 = [priestsPack, explorersPack];

            inventory['armour']['chainmail'] = armour.heavy.ChainMail; //and a holy symbol
            chooseStuff(choice4, 1,'pack', 'equipment', inventory);
            chooseStuff(choice1, 1,'startingWeapon1', 'weapons', inventory);
            chooseStuff(choice2, 1,'startingWeapon2', 'weapons', inventory);
            chooseStuff(choice3, 1,'startingWeapon3', 'weapons', inventory);
            break;
        case 'ranger':
            var shortSword = {'shortSword' :martialWeapons.meleeWeapons.Shortsword };
            choice1 = [armour.medium.ScaleMail, armour.light.Leather];
            choice2 = Object.assign({}, shortSword, simpleWeapons.meleeWeapons, simpleWeapons.rangedWeapons);
            choice3 = [dungeoneersPack, explorersPack];
            inventory['weapons']['Longbow'] = martialWeapons.rangedWeapons.Longbow;

            chooseStuff(choice1, 1 , 'armour', 'armour', inventory);
            chooseStuff(choice2, 1,'startingWeapon1', 'weapons', inventory);
            chooseStuff(choice2, 1,'startingWeapon2', 'weapons', inventory);
            chooseStuff(choice3, 1,'pack', 'equipment', inventory);
            break;
        case 'rogue':
            choice1 = [martialWeapons.meleeWeapons.Rapier, martialWeapons.meleeWeapons.Shortsword];
            choice2 = [martialWeapons.meleeWeapons.Shortsword, simpleWeapons.rangedWeapons.Shortbow];
            choice3 = [burglarsPack, dungeoneersPack, explorersPack];

            inventory['armour']['leather'] = armour.light.Leather;
            inventory['weapons']['Dagger'] = {'name' : 'Dagger' ,'cost' : { 'gp' : '2'} ,'dmgDice' : '1d4' ,'dmgType' : 'piercing' ,'weight' : 1,'type' : 'simple' ,'properties' : ['Finesse','light','thrown','(range','20/60)',], 'quantity' : 2 };
            inventory['tools'] = {};
            inventory['tools']['thievesTools'] = 'thievesTools';

            chooseStuff(choice1, 1,'startingWeapon1', 'weapons', inventory);
            chooseStuff(choice2, 1,'startingWeapon2', 'weapons', inventory);
            chooseStuff(choice3, 1,'pack', 'equipment', inventory);
            break;
        case 'sorcerer':
            choice1 = Object.assign({},simpleWeapons.meleeWeapons, simpleWeapons.rangedWeapons);
            choice2 = ['componentPouch', 'arcaneFocus']; //need to add these items and others as well
            choice3 = [dungeoneersPack, explorersPack];
            inventory['weapons']['Dagger'] = {'name' : 'Dagger' ,'cost' : { 'gp' : '2'} ,'dmgDice' : '1d4' ,'dmgType' : 'piercing' ,'weight' : 1,'type' : 'simple' ,'properties' : ['Finesse','light','thrown','(range','20/60)',], 'quantity' : 2 };
            chooseStuff(choice1, 1,'startingWeapon1', 'weapons', inventory);
            chooseStuff(choice2, 1,'equipment', 'tools', inventory);
            chooseStuff(choice3, 1,'pack', 'equipment', inventory);
            break;
        case 'warlock':
            choice1 = Object.assign({},simpleWeapons.meleeWeapons, simpleWeapons.rangedWeapons);
            choice2 = ['componentPouch', 'arcaneFocus']; //need to add these items and others as well
            choice3 = [dungeoneersPack, scholarsPack];
            inventory['armour']['leather'] = armour.light.Leather;
            inventory['weapons']['Dagger'] = {'name' : 'Dagger' ,'cost' : { 'gp' : '2'} ,'dmgDice' : '1d4' ,'dmgType' : 'piercing' ,'weight' : 1,'type' : 'simple' ,'properties' : ['Finesse','light','thrown','(range','20/60)',], 'quantity' : 2 };
            chooseStuff(choice1, 1,'startingWeapon1', 'weapons', inventory);
            chooseStuff(choice1, 1,'startingWeapon2', 'weapons', inventory);
            chooseStuff(choice2, 1,'equipment', 'tools', inventory);
            chooseStuff(choice3, 1,'pack', 'equipment', inventory);
            break;
        case 'wizard':
            choice1 = [simpleWeapons.meleeWeapons.Quarterstaff, simpleWeapons.meleeWeapons.Dagger];
            choice2 = ['componentPouch', 'arcaneFocus']; //need to add these items and others as well
            choice3 = [scholarsPack, explorersPack];

            inventory['equipment']['spellbook'] = 'spellbook';

            chooseStuff(choice1, 1,'startingWeapon1', 'weapons', inventory);
            chooseStuff(choice2, 1,'equipment', 'tools', inventory);
            chooseStuff(choice3, 1,'pack', 'equipment', inventory);

            break;
    }

}

function finalUpdate(){
    //goes through all extra things added by domains and adds them to character info
    $('.creator').remove();
    spells['domainSpells'] = getDomainSpells(associatedSpells, playerStats['chosenDomain']);

    var msg = {'dm':false,'type': 'newCharacter' ,'name': playerStats.name, 'playerStats' : playerStats, 'spells' : spells, 'attributes': attributes, 'inventory' : inventory};
    ws.send(JSON.stringify(msg));

    $('.info').append('<button type="button" onclick="weaponChoice()"> Choose equipped Weapons</button>');
    $('.info').append('<br/><br/><button type="button" id="updateStats" onclick="updateStats()"> Update Stats</button>');

    $('.info').append('<div id="notes"> <h1>Notes</h1><textarea rows = "4" cols = "50"></textarea></div>');
    spellsLeft = Object.assign({},spellsPerDay);

    updateStats();

}

function spellDisplay(){
    $('#spells').remove();
    $('.info').append('<div id="spells"></div>');

    var spellLevels = ['default','domain','level0', 'level1', 'level2'];

    $('#spells').append('<select id="spellLevel"> </select>');
    for (var opt in spellLevels){
        $('#spellLevel').append('<option value=' +JSON.stringify(spellLevels[opt])+ '>'+JSON.stringify(spellLevels[opt])+'</option>')
    }
    $('#spells').append('<button type="button" onclick="useSpell()">Cast Spell</button>');

    spellLevelDisplay('default');
    spellLevelDisplay('domain');
    spellLevelDisplay('level0');
    spellLevelDisplay('level1');

    spellsLeftDisplay();
}

function spellLevelDisplay(location){
    $('#spells').append('<h3>'+location+'</h3><div id="'+location+'"></div>');
    for(var spell in spells[location]){
        $('#'+location).append('<p>'+spells[location][spell].name+'</p>');
    }
}

function spellsLeftDisplay(){
    $('#spellsLeft').remove();
    $('#spells').append('<div id="spellsLeft"></div>');
    $('#spellsLeft').append('<h2>Spells Available: </h2><p>'+JSON.stringify(spellsLeft)+'</p>');
}

function attrRoller(){
    if(rerollCount === 0){
        alert('Tough luck, you are stuck with that');
        $('#scores').remove();
    }
    else {
        //needs to generate random attributes - should be acceptable and delete the button after
        var str = Math.floor(Math.random() * 15 + 5);
        var dex = Math.floor(Math.random() * 15 + 5);
        var con = Math.floor(Math.random() * 15 + 5);
        var int = Math.floor(Math.random() * 15 + 5);
        var wis = Math.floor(Math.random() * 15 + 5);
        var cha = Math.floor(Math.random() * 15 + 5);

        rerollCount--;
        var attributeScores = {'str': str, 'dex': dex, 'con': con, 'int': int, 'wis': wis, 'cha': cha};
        attributes = attributeScores;

        $('#stats').remove();
        $('#newCharacter').append('</br><p id="stats">' + JSON.stringify(attributeScores) + '</p>');
    }
}

function retrieveCharacter(){
    var name = document.getElementById('existingName').value;
    var msg = {'type': 'getCharacter', 'name':name};
    $('#startDiv').remove();

    ws.send(JSON.stringify(msg));
}