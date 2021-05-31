var addresses = ["Marco@gmail.com" , "Luigi@gmail.com" , "Valerio@gmail.com" , "Alex@gmail.com"]
var mail_address = prompt('Inserisci qui la tua mail');


var output = document.getElementById('mail');

var check = false; 


for (var i = 0; i < addresses.length; i++) {
    if (addresses[i] === mail_address) {
        check = true;
    }
}

if (check) {
    output.innerHTML += "Ho trovato la tua mail!";
} else {
    output.innerHTML += "Non ho trovato la tua mail!";
}

