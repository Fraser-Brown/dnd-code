let express = require('express');
let app = express();
let bodyParser = require("body-parser");
let expressWs = require('express-ws')(app);
let auth = require('basic-auth');



app.ws('/game', function(ws, req) {
    ws.on('message', function(msg) {
        handleClientMessage(ws, msg);
    });
});

//class proficiencies need to be added to the server for skill checks

players = {};
playerAddresses = {};

dm = {};
dmAddresses = {};

mapAddresses = [];

store = [];
items = {};

function handleClientMessage(ws, msg){
    let json = JSON.parse(msg);

    if(json.dm === true){
        switch (json.type){
            case 'newDm':
                dm[json.username] = ws;
                dmAddresses[ws] = json.username;
                break;

            case 'newSpell':
                var spell = json.spell;
                var player = json.player;

                var msg = {'type' : 'newSpell' , 'spell' : spell};
                players[player].send(JSON.stringify(msg));
                break;
            case 'newItem':
                var item = json.item;
                var player = json.player;

                var msg = {'type' : 'newItem' , 'item' : item};
                players[player].send(JSON.stringify(msg));
                break;
            case 'newWeapon':
                var weapon = json.weapon;
                var player = json.player;

                var msg = {'type' : 'newWeapon' , 'weapon' : weapon};
                players[player].send(JSON.stringify(msg));
                break;
            case 'startCombat':
                for (var p in players){
                    players[p].send(JSON.stringify({'type': 'startCombat'}))
                }
                break;
            case 'updateCombat':
                for (var p in players){
                    players[p].send(JSON.stringify({'type': 'updateCombat'}))
                }
                break;
            case 'xpEvent':
                var details = json.details;
                var xp = json.xp;

                var msg = {'type' : 'xpEvent', 'details' : details, 'xp' : xp};
                for (var p in players){
                    players[p].send(JSON.stringify(msg));
                }
                break;
            case 'dmgPlayer':
                var damage = json.dmg;
                var player = json.player;

                var msg = {'type' : 'takingDmg', 'dmg' : damage};

                players[player].send(JSON.stringify(msg));
                break;
            case 'oldCharacter':
                var player = json.player;
                var msg = {'type' : 'oldCharacter', 'details' : json.details};
                players[player].send(JSON.stringify(msg));
                break;
            case 'endCombat':
                for (var p in players){
                    players[p].send(JSON.stringify({'type': 'endCombat'}))
                }
                break;
            case 'rested':
                for (var p in players){
                    players[p].send(JSON.stringify({'type': 'rested'}))
                }
                break;
            case 'allPlayerStats':
                for (var p in players){
                    players[p].send(JSON.stringify({'type': 'allStats'}))
                }
                break;

            case 'mapUpdate':
                var mapImg = json.map;
                var msg = {'type': 'newMap', 'image' : mapImg};
                for (var x in mapAddresses){
                    mapAddresses[x].send(JSON.stringify(msg));
                }
                break;
        }
    }

    else {
        switch (json.type) {

            case 'newCharacter':
                console.log('new player added ' + json.name);
                players[json.name] = ws;
                playerAddresses[ws] = json.name;

                var newPlayer = {'type' : 'newCharacter', 'name' : json.name, 'stats' : json.playerStats, 'spells' : json.spells, 'attributes': json.attributes, 'inventory' : json.inventory};
                sendDetailsToDm(newPlayer);
                break;
            case 'getCharacter':
                console.log('player rejoined ' + json.name);
                players[json.name] = ws;
                playerAddresses[ws] = json.name;
                sendDetailsToDm(json);
                break;

            case 'store':
                var testItem = {'name' : 'testItem', 'cost':10};
                store.push(testItem);
                items[testItem.name] = testItem;

                let s = {'type' : 'store', 'store' : store} ;
                ws.send(JSON.stringify(s));
                break;
            case 'combatStats':
                var stats = json.stats;
                var equipped = json.equipped;
                var attributes = json.attributes;
                var msg = {'type' : 'combatStats', 'stats':stats, 'equipped' : equipped, 'attributes' : attributes};
                sendDetailsToDm(msg);
                break;
            case 'allMyStats':
                sendDetailsToDm(json);
                break;
            case 'mapPage':
                mapAddresses.push(ws);
                break;
        }
    }
}

function sendDetailsToDm(msg){
    for(var rec in dm){
        dm[rec].send(JSON.stringify(msg));
    }
}


//deals with any server stuff
app.use(express.static(__dirname + '/static'));

// Log any server-side errors to the console and send 500 error code.
app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Something broke!')
});

app.listen(8080);
console.log('Server running, access game by going to http://127.0.0.1:8080/welcome.html');
