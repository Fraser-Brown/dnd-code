var ws;

var DMClient = (function(){

    function init() {
        ws = new WebSocket('ws://localhost:8080/game');
        ws.onmessage = recieveFromServer;
    }

    return {
        init: init
    }

})();

players = {};

enemies = {};

initiative = [];

function joinSession() {
    var msg = {'dm' : true, 'type': 'newDm', 'username' : $('#username').value};
    ws.send(JSON.stringify(msg));
    $('#startup').remove();
    //now add stuff to the page so they can do stuff
    $('#dmScreen').append('<div id="players"><h1>Players</h1></div>');
    $('#manager').append('<button type="button" onclick="createEnemy()"> Create an enemy</button>');
    $('#manager').append('<button type="button" onclick="createItem()"> Create an item</button>');
    $('#manager').append('<button type="button" onclick="createSpell()"> Create a spell</button>');
    $('#manager').append('<button type="button" onclick="createWeapon()"> Create a weapon</button>');
    $('#manager').append('<button type="button" onclick="startCombat()"> Start a Combat Encounter</button>');
    $('#manager').append('<button type="button" onclick="whatDoTheyNeedToRoll()"> Roll Checker</button>');
    $('#manager').append('<button type="button" onclick="resetSpells()">Party stops to rest / reset spells</button>');
    $('#manager').append('<button type="button" onclick="retrieveAllStats()">Get All Player Stats</button>');
    $('#manager').append('<div id="mapFile">\n' +
        '    <label for="map">Choose a map</label>\n' +
        '    <input type="file" onchange="readURL(this)" id="map" accept=".jpg, .jpeg, .png">\n' +
        '    <button type="button" onclick="sendMap()">Submit</button>\n' +
        '    <br/><br/><img src="#" id="mapImg">'+
        '  </div>');

    $('#dmScreen').append('<div id="recentActivity"><p>Recent Activity</p><button type="button" onclick="clearLog()">Clear</button></div>');
    $('#dmScreen').append('<div id="playOrder"><p>Current Initiative Order</p><div id="initiative"></div><button type="button" onclick="initiativeRoller()">Initiative Roll</button></div>');

    $('#dmScreen').append('<h1>Notes</h1><textarea id="notes" rows = "4" cols = "50"></textarea>');
//may wish to add function to create items from a json file

}

function sendMap() {
    var mapImg = getBase64Image(document.getElementById('mapImg'));
    var msg = {'dm':true, 'type':'mapUpdate', 'map' :mapImg};

    ws.send(JSON.stringify(msg));
}
function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#mapImg').attr('src', e.target.result);
        };

        reader.readAsDataURL(input.files[0]);
    }
}//borrowed : zupexifaka
function getBase64Image(img) {
    // Create an empty canvas element
    var canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;

    // Copy the image contents to the canvas
    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);

    // Get the data-URL formatted image
    // Firefox supports PNG and JPEG. You could check img.src to guess the
    // original format, but be aware the using "image/jpg" will re-encode the image.
    var dataURL = canvas.toDataURL("image/png");
    return dataURL;
}//borrowed :aybabtu

function createStore(){}

function whatDoTheyNeedToRoll(){
    var options = Object.keys(players);
    $('#manager').append('<div id ="howMuch"></div>');
    $('#howMuch').append('<input type="text" id = "dc">DC / AC</input>');

    $('#howMuch').append('<p> player </p><select id="player"> </select>');
    for (var opt in options ){
        $('#player').append('<option value=' +options[opt] + '>'+JSON.stringify(options[opt])+'</option>')
    }

    $('#howMuch').append('<p>attr</p><select id="attr"> </select>');
    for (var t = 0; t < attrTypes.length; t++ ){
        $('#attr').append('<option value=' +attrTypes[t] + '>'+JSON.stringify(attrTypes[t])+'</option>')
    }

    $('#howMuch').append('<button type="button" onclick="submitRollCheck()">Submit check</button> ');
}

function submitRollCheck(){
    var player = document.getElementById('player').value;
    var attr = document.getElementById('attr').value;
    var dc = document.getElementById('dc').value;

    var p = JSON.parse(localStorage.getItem(player));
    var mod = calcMod(p['attributes'][attr]);


    var total = dc - mod;

    alert(player + ' needs ' + total + ' in order to succeed, unless they have extra modifiers');

    $('#howMuch').remove();
}

function startCombat(){
    $('#dmScreen').append('<div id="combat"><h2>Combat</h2></div>');
    var msg = {'dm':true,'type' : 'startCombat'};
    ws.send(JSON.stringify(msg));

    for (var i in enemies){
        $('#combat').append('<p>'+ JSON.stringify(enemies[i])+'</p>')
    }

    $('#combat').append('<button type="button" onclick="endCombat()">End Combat Encounter</button>');
    $('#combat').append('<button type="button" onclick="damageEnemy()" id="npcDmg">Damage NPC</button>');
    $('#combat').append('<button type="button" onclick="damagePlayer()" id="playerDmg">Damage Player</button>');
}

function damageEnemy(){
    var options = Object.keys(enemies);
    $('#npcDmg').remove();
    $('#combat').append('<div id = "dmgEnemy"></div>');
    $('#dmgEnemy').append('<input type="text" id ="dmg">Damage</input> ');
    $('#dmgEnemy').append('<p> Enemy to damage </p><select id="enemyToDmg"> </select>');
    for (var opt in options ){
        $('#enemyToDmg').append('<option value=' +options[opt] + '>'+JSON.stringify(options[opt])+'</option>')
    }
    $('#dmgEnemy').append('<button type="button" onclick="submitDamageToEnemy()">Submit damage</button> ');

}

function submitDamageToEnemy(){
    var damage = document.getElementById('dmg').value;
    var enemy = document.getElementById('enemyToDmg').value;
    enemies[enemy]['hp'] -= damage;
    $('#recentActivity').append('<p>'+ enemy +' took '+ damage+' damage</p>');


    if (enemies[enemy]['hp'] <= 0){
        alert(enemy + ' is dead, party earns '+ enemies[enemy]['xp']); //add a msg to update xp
        var msg = {'dm' : true, 'type' : 'xpEvent', 'details':enemy + ' is dead, party earns '+ enemies[enemy]['xp'], 'xp' : enemies[enemy]['xp'] }
        ws.send(JSON.stringify(msg));
        $('#recentActivity').append('<p>'+ enemy +' has died</p>');

        delete enemies[enemy];
    }
    updateCombatView();
}

function updateCombatView(){
    $('#combat').remove();
    $('#dmScreen').append('<div id="combat"></div>');
    var msg = {'dm':true,'type' : 'updateCombat'};
    ws.send(JSON.stringify(msg));

    for (var i in enemies){
        $('#combat').append('<p>'+ JSON.stringify(enemies[i])+'</p>')
    }

    $('#combat').append('<button type="button" onclick="endCombat()">End Combat Encounter</button>');
    $('#combat').append('<button type="button" onclick="damageEnemy()" id="npcDmg">Damage NPC</button>');
    $('#combat').append('<button type="button" onclick="damagePlayer()" id="playerDmg">Damage Player</button>');

}

function damagePlayer(){
    var options = Object.keys(players);
    $('#playerDmg').remove();
    $('#combat').append('<div id = "dmgPlayer"></div>');
    $('#dmgPlayer').append('<input type="text" id ="dmg">Damage</input> ');
    $('#dmgPlayer').append('<p> Player to damage </p><select id="playerToDmg"> </select>');
    for (var opt in options ){
        $('#playerToDmg').append('<option value=' +options[opt] + '>'+JSON.stringify(options[opt])+'</option>')
    }
    $('#dmgPlayer').append('<button type="button" onclick="submitDamageToPlayer()">Submit damage</button> ');
} //reduce the hp of the target player

function submitDamageToPlayer(){
    var damage = document.getElementById('dmg').value;
    var player = document.getElementById('playerToDmg').value;

    $('#recentActivity').append('<p>'+ player +' took '+ damage+' damage</p>');

    var msg = {'dm': true, 'type' : 'dmgPlayer', 'dmg' : damage, 'player' : player};
    ws.send(JSON.stringify(msg));
    updateCombatView();
}

function endCombat() {
    $('#combat').remove();
    var msg = {'dm' : true, 'type' :'endCombat'};
    ws.send(JSON.stringify(msg));
}

function retrieveAllStats(){
    var msg= {'dm':true , 'type':'allPlayerStats'};
    ws.send(JSON.stringify(msg));
} //to check up on everyone's position

function clearLog() {
    $('#recentActivity').remove();
    $('#dmScreen').append('<div id="recentActivity"><p>Recent Activity</p><button type="button" onclick="clearLog()">Clear</button></div>');
}

function createWeapon(){
    $('#manager').append('<div id="newWeapon"></div>');
    $('#newWeapon').append('<input type="text" id="player">player</input><br/>');
    $('#newWeapon').append('<input type="text" id="name">Name</input><br/>');
    $('#newWeapon').append('<input type="text" id="gp"> gp</input><br/>');
    $('#newWeapon').append('<input type="text" id="sp"> sp</input><br/>');
    $('#newWeapon').append('<input type="text" id="dmgDice">damage dice</input><br/>');
    $('#newWeapon').append('<input type="text" id="dmgType">damage type</input><br/>');
    $('#newWeapon').append('<input type="text" id="weight">weight</input><br/>');
    $('#newWeapon').append('<input type="text" id="type">type</input><br/>');
    $('#newWeapon').append('<input type="text" id="properties">properties</input><br/>');

    $('#newWeapon').append('<button type="button" onclick="submitWeapon()">Submit item</button>');
}
function submitWeapon(){
    var weapon = {};
    var cost = {};
    cost['gp'] = document.getElementById('gp').value;
    cost['sp'] = document.getElementById('sp').value;

    var properties = document.getElementById('properties').value;
    properties = properties.split(',');

    weapon['name'] = document.getElementById('name').value;
    weapon['cost'] = cost;
    weapon['dmgDice'] = document.getElementById('dmgDice').value;
    weapon['dmgType'] = document.getElementById('dmgType').value;
    weapon['weight'] = document.getElementById('weight').value;
    weapon['type'] = document.getElementById('type').value;
    weapon['properties'] = properties;

    var msg = {'dm':true,'type' : 'newWeapon', 'weapon': weapon, 'player': document.getElementById('player').value};
    ws.send(JSON.stringify(msg));

    $('#recentActivity').append('<p> A new weapon '+ weapon.name +' was created and given to '+document.getElementById('player').value +'</p>');
    $('#newWeapon').remove();
}

function createItem(){

    $('#manager').append('<div id="newItem"></div>');
    $('#newItem').append('<input type="text" id="player">player</input><br/>');
    $('#newItem').append('<input type="text" id="name">Name</input><br/>');
    $('#newItem').append('<input type="text" id="description">description</input><br/>');
    $('#newItem').append('<button type="button" onclick="submitItem()">Submit item</button>');
}
function submitItem() {
    var item = {};
    item['name'] = document.getElementById('name').value;
    item['description'] = document.getElementById('description').value;


    var msg = {'dm':true,'type' : 'newItem', 'item': item, 'player': document.getElementById('player').value};
    ws.send(JSON.stringify(msg));
    $('#recentActivity').append('<p> A new item '+ item.name +' was created and given to '+document.getElementById('player').value +'</p>');

    $('#newItem').remove();
}

function createSpell(){
    $('#manager').append('<div id="newSpell"></div>');
    $('#newSpell').append('<input type="text" id="player">player</input><br/>');
    $('#newSpell').append('<input type="text" id="name">Name</input><br/>');
    $('#newSpell').append('<input type="text" id="level">Level</input><br/>');
    $('#newSpell').append('<button type="button" onclick="submitSpell()">Submit spell</button>');


}//create a spell
function submitSpell() {
    var spell = {};
    spell['name'] = document.getElementById('name').value;
    spell['level'] = document.getElementById('level').value;

    var msg = {'dm':true,'type' : 'newSpell', 'spell': spell, 'player': document.getElementById('player').value};
    ws.send(JSON.stringify(msg));
    $('#recentActivity').append('<p> A new spell '+ spell.name +' was created and given to '+document.getElementById('player').value +'</p>');

    $('#newSpell').remove();
}
function resetSpells(){
    var msg = {'dm':true,'type' : 'rested'};
    ws.send(JSON.stringify(msg));
}

function createEnemy(){
    //needs a name, attributes, ac, and hp
    $('#manager').append('<div id="newEnemy"></div>');

    $('#newEnemy').append('<input type="text" id="name">Name</input><br/>');
    $('#newEnemy').append('<input type="text" id="type">Type</input><br/>');
    $('#newEnemy').append('<input type="text" id="ac">ac</input><br/>');
    $('#newEnemy').append('<input type="text" id="hp">hp</input><br/>');
    $('#newEnemy').append('<input type="text" id="str">str</input><br/>');
    $('#newEnemy').append('<input type="text" id="dex">dex</input><br/>');
    $('#newEnemy').append('<input type="text" id="con">con</input><br/>');
    $('#newEnemy').append('<input type="text" id="int">int</input><br/>');
    $('#newEnemy').append('<input type="text" id="wis">wis</input><br/>');
    $('#newEnemy').append('<input type="text" id="cha">cha</input><br/>');
    $('#newEnemy').append('<input type="text" id="xp">xp</input><br/>');

    //needs a submit button
    $('#newEnemy').append('<button type="button" onclick="submitEnemy()">Submit Enemy</button>');

}//should give them weapons or something
function submitEnemy(){
    var enemy = {};
    var items = document.getElementById('newEnemy').children;
    for(let i = 0;i< items.length; i++){
        if(items[i].value !== undefined && items[i].value !== ""){
            enemy[items[i].id] = items[i].value
        }
    }
    enemies[enemy.name] = enemy;
    $('#newEnemy').remove();

    $('#recentActivity').append('<p> A new enemy '+ enemy.name +' was created</p>');
    displayEnemies();
}

function displayEnemies() {
    $('#enemies').remove();
    $('#dmScreen').append('<ul id = "enemies"></ul>');
    $('#enemies').append('<h3>Enemy List</h3>');
    for(var en in enemies){
        $('#enemies').append('<li>'+enemies[en].name+'</li>');
    }
}

function initiativeRoller(){
    $('#playOrder').remove();
    $('#dmScreen').append('<div id="playOrder"><p>Current Initiative Order</p><ol id="initiative"></ol><button type="button" onclick="initiativeRoller()">Initiative Roll</button></div>');

    var p = Object.keys(players);
    var e = Object.keys(enemies);
    var initiatives = p.concat(e);

    initiatives = shuffle(initiatives);


    for (var i = 0; i<initiatives.length; i++){
        $('#initiative').append('<li>' + initiatives[i] +'</li>')
    }
}
function shuffle(arra1) {
    var ctr = arra1.length, temp, index;

// While there are elements in the array
    while (ctr > 0) {
// Pick a random index
        index = Math.floor(Math.random() * ctr);
// Decrease ctr by 1
        ctr--;
// And swap the last element with it
        temp = arra1[ctr];
        arra1[ctr] = arra1[index];
        arra1[index] = temp;
    }
    return arra1;
}

function recieveFromServer(msg){
    let json = JSON.parse(msg.data);

    switch (json.type){
        case 'newCharacter':
            $('#players').append('<div id="'+ json.name +'"> ' +
                '<p>'+ JSON.stringify(json.name)+'</p>' +
                '</div>');
            players[json.name]= json;
            retrieveAllStats();
            $('#recentActivity').append('<p> A new player joined the quest,  '+ json.name +' has joined</p>');
            break;
        case 'combatStats':
            var stats = json.stats;
            var equipped = json.equipped;
            var attributes = json.attributes;
            $('#combat').append('<p>'+ JSON.stringify(stats)+ ' '+ JSON.stringify(attributes)+ JSON.stringify(equipped) + '</p>');
            break;
        case 'allMyStats':
            console.log(json);
            localStorage.setItem(json.player, JSON.stringify(json));
            break;
        case 'getCharacter':
            var details = localStorage.getItem(json.name);
            var msg = {'dm':true, 'type':'oldCharacter','player':json.name ,'details':details};
            ws.send(JSON.stringify(msg));

            $('#players').append('<div id="'+ json.name +'"> ' +
                '<p>'+ JSON.stringify(json.name)+'</p>' +
                '</div>');
            players[json.name]= json;

            $('#recentActivity').append('<p> A player joined the quest,  '+ json.name +' has joined</p>');
            break;
    }
}