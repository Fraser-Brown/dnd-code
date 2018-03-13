var ws;
//add functions or event listeners to send options
//possibly add more js clients to handle different users
var rerollCount = 3;

var associatedSpells;

var proficiencies = {};
var attributes = {};
var inventory ={};
var playerStats = {};
var spells = {};
var spellsPerDay = {};
var spellsLeft = {};
var equippedWeapons = {};

var store = {};

var UserClient = (function(){

    function init() {
        ws = new WebSocket('ws://localhost:8080/game');
        ws.onmessage = recieveFromServer;
    }

    return {
        init: init
    }

})();
//todo the retrieve players doent add update button
function updateStats(){
    //needs to check ac
    attributes['ac'] = checkAc();
    displayInfo();
    displayAttributes();
    displayInventory();
    displayProficiencies();
    displayEquippedItems();
    spellDisplay();
}

function displayInfo(){
    $('#characterInfo').remove();

    $('.info').append('<div id ="characterInfo"></div>');
    $('#characterInfo').append('<h3>Name</h3> <p>'+playerStats.name+'</p>'+
        '<h3>Race</h3>  <p>'+playerStats.race+'</p>'+
        '<h3>Alignment</h3>  <p>'+playerStats.reason+' ' + playerStats.moral+'</p>'+
        '<h3>Class</h3> <p>'+playerStats.class+'</p>'+
        '<h3>Level</h3> <p>'+playerStats.level+'</p>'+
        '<h3>XP</h3><p>'+playerStats.xp+'</p>'
    )
}
function displayAttributes() {
    $('#characterAttr').remove();

    $('.info').append('<div id ="characterAttr"></div>');
    $('#characterAttr').append('<h3>Str</h3> <p>'+attributes.str+'</p>'+
        '<h3>Dex</h3>  <p>'+attributes.dex+'</p>'+
        '<h3>Con</h3>  <p>'+attributes.con+'</p>'+
        '<h3>Int</h3> <p>'+attributes.int+'</p>'+
        '<h3>Wis</h3> <p>'+attributes.wis+'</p>'+
        '<h3>Cha</h3><p>'+attributes.cha+'</p>'+
        '<h3>Hp</h3><p>'+attributes.hp+'</p>'+
        '<h3>AC</h3><p>'+attributes.ac+'</p>'+
        '<h3>Money</h3><p>'+JSON.stringify(attributes.money)+'</p>'

    )
}
function displayProficiencies(){
    $('#characterProf').remove();

    $('.info').append('<div id ="characterProf"><h2>Proficiencies</h2></div>');
    $('#characterProf').append('<h3>Bonus</h3><p>'+proficiencies.bonus+'</p>'+
        '<h3>Armour</h3><p>'+JSON.stringify(proficiencies.armour)+'</p>'+
        '<h3>Weapons</h3><p>'+JSON.stringify(proficiencies.weapons)+'</p>'+
        '<h3>Tools</h3><p>'+JSON.stringify(proficiencies.tools)+'</p>'+
        '<h3>Saving Throws</h3><p>'+JSON.stringify(proficiencies.savingThrows)+'</p>'+
        '<h3>Skills</h3><p>'+JSON.stringify(proficiencies.skills)+'</p>'
    )
}
function displayInventory(){
 var weapons = inventory['weapons'];
 var equipment = Object.assign({},inventory['equipment'], inventory['equipment']['pack']);
 var tools = inventory['tools'];

 var combined = Object.assign({}, equipment, tools);

 displayAsList('weapons', weapons);
 displayAsList('equipment', equipment);

}
function displayEquippedItems(){
    $('#characterEquip').remove();
    var rh = {};
    var lh = {};
    var ar = {};

    for(var x in equippedWeapons.rightHand){
        rh = equippedWeapons.rightHand[x];
    }
    for(var y in equippedWeapons.leftHand){
        lh = equippedWeapons.leftHand[y];
    }
    for(var z in equippedWeapons.armour){
        ar = equippedWeapons.armour[z];
    }

    $('.info').append('<div id ="characterEquip"><h3>Equipped</h3></div>');
    $('#characterEquip').append('<h3>Right Hand</h3><p>'+rh.name+ ' dmg Dice'+ rh.dmgDice+'</p>'+
        '<h3>Left Hand</h3><p>'+lh.name+ ' dmg Dice'+ lh.dmgDice+'</p>'+
        '<h3>Armour</h3><p>'+ ar.name + '  AC: '+ar.ac +'</p>'
    );
}

function checkAc(){
    var ac = 0;

    if(spells['default'].hasOwnProperty('unarmouredDefense')){
        ac =10;
    }

    for (var x in equippedWeapons){
        var y = equippedWeapons[x];
        for(var z in y) {
            var armour = y[z];
            if (armour.ac !== undefined) {
                ac += parseInt(armour.ac);
            }
        }
    }
    return ac;
}

function displayAsList(name, items){
    $('#'+name).remove();

    $('.info').append('<div id ="'+name+'"></div>');
    $('#'+name).append('<h3>'+name+'</h3>');
    $('#'+name).append('<ul id="'+name+'List"></ul>');

    for(var x in items) {
        if (items[x].name !== undefined){
            if(items[x]['quantity'] === undefined){
                items[x]['quantity'] = 1;
            }
            $('#' + name + 'List').append('<li>' + items[x].name + '  Quantity : ' + items[x].quantity+'</li>');
        }
    }
}

function useSpell(){
    var level = document.getElementById('spellLevel').value;
    if(spellsLeft[level] <= 0){
        alert('You have run out of '+ level +'spells, wait to recharge')
    }
    else {
        alert('a ' + level + ' spell was used');
        spellsLeft[level] -= 1;
        spellsLeftDisplay();
    }
}

function weaponChoice(){
    $('#weaponRight').remove();
    $('#weaponLeft').remove();
    $('#armour').remove();
    var armourChoice = inventory['armour'];
    chooseStuff(inventory['weapons'], 1, 'weaponRight', 'rightHand', equippedWeapons);
    chooseStuff(inventory['weapons'], 1, 'weaponLeft', 'leftHand', equippedWeapons);
    chooseStuff(armourChoice, 1, 'armour', 'armour', equippedWeapons);
    updateStats();
}

function addItem(item , type){
    if (inventory[type].hasOwnProperty(item.name)){
        if (inventory[type][item.name].hasOwnProperty('quantity')) {
            inventory[item.name].quantity += 1;
        }
        else{
            inventory[type][item.name]['quantity'] = 2;
        }
    }
    else{
        inventory[type][item.name] = item;
    }
}

function populateStore(storeContents){
    $('.encounter').append('<div id= "store"></div>');
    for(var i in storeContents){
        var item = storeContents[i];
        store[item.name] = item;
        $('#store').append('<p>'+item.name+'</p><button type="button" onclick="buyItem(this.id)" id = '+ item.name+'> buy for ' +item.cost + ' </button> ')
    }
    $('#store').append('<p>'+item.name+'</p><button type="button" onclick="$(\'#store\').remove()" id = '+ item.name+'> buy for ' +item.cost + ' </button> ')
}

function recieveFromServer(msg){

    let json = JSON.parse(msg.data);

    switch (json.type){
        case 'store':
            populateStore(json.store);
            break;
        case 'newSpell':
            var spell = json.spell;
            var level = spell.level;
            if (spells['level' + level] === undefined){
                spells['level' + level] = {};
            }
            spells['level' + level][spell.name] = spell;
            updateStats();
            break;
        case 'newItem':
            var item = json.item;
            addItem(item, 'equipment');
            updateStats();
            break;
        case 'newWeapon':
            var weapon = json.weapon;
            addItem(weapon, 'weapons');
            updateStats();
            break;
        case 'startCombat':
            alert('You have now entered Combat');

            var msg = {'type' : 'combatStats', 'stats' : playerStats, 'equipped': equippedWeapons, 'attributes' : attributes};
            ws.send(JSON.stringify(msg));
            break;
        case 'updateCombat':
            var msg = {'type' : 'combatStats', 'stats' : playerStats, 'equipped': equippedWeapons, 'attributes' : attributes};
            ws.send(JSON.stringify(msg));
            break;
        case 'xpEvent':
            alert(json.details);
            //also needs to add onto current xp
            playerStats['xp'] += parseInt(json.xp);
            updateStats();
            break;
        case 'takingDmg':
            alert('you have taken ' + json.dmg + ' damage');
            attributes['hp'] -= json.dmg;
            updateStats();
            break;
        case 'endCombat':
            alert('You have now left Combat');
            break;
        case 'rested':
            spellsLeft = Object.assign({},spellsPerDay);
            spellsLeftDisplay();
            alert('You have rested, your spells have been restored');
        case 'allStats':
            var msg = {'type':'allMyStats','player': playerStats['name'] ,'proficiencies' : proficiencies, 'attributes': attributes, 'inventory':inventory,
            'playerStats':playerStats, 'spells':spells, 'spellsPerDay':spellsPerDay, 'spellsLeft':spellsLeft, 'equippedWeapons':equippedWeapons};
            ws.send(JSON.stringify(msg));
            break;
        case 'oldCharacter':
            var details = JSON.parse(json.details);
            proficiencies = details.proficiencies;
            equippedWeapons = details.equippedWeapons;
            attributes = details.attributes;
            inventory = details.inventory;
            playerStats = details.playerStats;
            spells = details.spells;
            spellsLeft = details.spellsLeft;
            spellsPerDay = details.spellsPerDay;

            $('.info').append('<button type="button" onclick="weaponChoice()"> Choose equipped Weapons</button>');
            $('.info').append('<br/><br/><button type="button" id="updateStats" onclick="updateStats()"> Update Stats</button>');

            $('.info').append('<div id="notes"> <h1>Notes</h1><textarea rows = "4" cols = "50"></textarea></div>');
            spellsLeft = Object.assign({},spellsPerDay);
            updateStats();
            break;
    }

}