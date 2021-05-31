var player_1 = parseInt(Math.floor(Math.random()* 6 + 1));
var player_2 = parseInt(Math.floor(Math.random()* 6 + 1));

var output = document.getElementById('dice');

if (player_1 > player_2){
    output.innerHTML += "Giocatore 1 Ha vinto!";
}else{
    output.innerHTML += "Giocatore 2 Ha vinto!";
}