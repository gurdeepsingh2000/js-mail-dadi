var player_1 = parseInt(Math.floor(Math.random()* 6 + 1));
var player_2 = parseInt(Math.floor(Math.random()* 6 + 1));
var adv_1 = parseInt(player_1) - parseInt(player_2);
var adv_2 = parseInt(player_2) - parseInt(player_1);

var output = document.getElementById('dice');

if (player_1 > player_2){
    output.innerHTML += "Giocatore 1 Ha vinto con lo scarto di " + adv_1 + ' Punti !';
}else if (player_1 < player_2){
    output.innerHTML += "Giocatore 2 Ha vinto con lo scarto di " + adv_2 + ' Punti !';
}else{
    output.innerHTML += "E un pareggio!";
}