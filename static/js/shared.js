var anticollide = 0;

var races = ['dwarf','human','halfling','elf','orc', 'gnome'];
var moral = ['good', 'neutral', 'evil'];
var reason = ['lawful', 'neutral', 'chaotic'];
var classes = ['barbarian','bard','cleric','druid','fighter','monk','paladin','ranger','rogue','sorcerer','warlock','wizard'];

var allAbilities = {'athletics': 'str', 'acrobatics':'dex', 'sleight of hand':'dex','stealth':'dex','arcana':'int','history':'int',
    'investigation':'int', 'nature':'int', 'religion':'int', 'animalHandling':'wis','insight':'wis','medicine':'wis','perception':'wis',
    'survival':'wis','deception':'cha','intimidation':'cha', 'performance':'cha', 'persuasion':'cha'};

var attrTypes = ['str', 'dex', 'con', 'wis', 'int', 'cha'];

function diceRoller(number, size){
    var total = 0;
    for(var i = 0; i < number; i++){
        total += Math.floor(Math.random() * size) +1
    }
    return total ;
}

function dropDownGenerator(options, statName, location){
    anticollide++;
    $('#' + location).append('<p>'+statName+'</p><select id=' + statName+ anticollide + '> </select>');

    for (var opt in options){
        $('#'+statName + anticollide).append('<option value=' +JSON.stringify(options[opt])+ '>'+JSON.stringify(options[opt])+'</option>')
    }
}

function chooseStuff(choices, numberOfChoices, nameOfDiv, nameOfStat, variable){
    $('.info').append('<div id='+ nameOfDiv+'><h1>'+nameOfDiv +'</h1></div>');
    for(var i=1; i<=numberOfChoices; i++){
        dropDownGenerator(choices, nameOfStat + i, nameOfDiv)
    }
    var button = document.createElement("div");
    button.innerHTML = '<button type="button">Submit choices</button>';
    button.onclick = function(){ submitChoices(nameOfDiv.toString(),nameOfStat.toString(), variable)};
    $('#' + nameOfDiv).append(button);
}

function submitChoices(nameOfDiv, nameOfStat, variable){
    var stats = {};
    var strings = [];
    let items = document.getElementById(nameOfDiv).children;
    for (var i in items){
        if(items[i].value !== undefined && items[i].value !== '') {
            var x = items[i].value;
            try{
                x = JSON.parse(x);
                stats[x.name] = x;
            }
            catch(e){
                strings.push(x);
            }
        }
    }
    if(strings.length === 1){
        variable[nameOfStat] = strings[0];
    }
    else if (strings.length > 1) {
        variable[nameOfStat] = strings;
    }
    else{
        if (variable[nameOfStat] === undefined){
            variable[nameOfStat] = {};
        }
        for(var i in stats) {
            variable[nameOfStat][stats[i].name] = stats[i];
        }
    }
    $('#'+nameOfDiv).remove();
}

function calcMod(attr){
    attr -= 10;
    var mod = Math.floor(attr/2);
    return mod;
}
