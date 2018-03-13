var ws;
//add functions or event listeners to send options
//possibly add more js clients to handle different users

var mapClient = (function(){

    function init() {
        ws = new WebSocket('ws://localhost:8080/game');
        ws.onmessage = recieveFromServer;
    }

    return {
        init: init
    }

})();

function join() {
    $('#join').remove();
    var msg = {'type':'mapPage'};
    ws.send(JSON.stringify(msg));
}

function displayMap(img){
    document.getElementById('map').src = img;
}

function recieveFromServer(msg){
    let json = JSON.parse(msg.data);

    switch (json.type){
        case 'newMap':
            var img = json.image;
            displayMap(img);
            break;
    }
}