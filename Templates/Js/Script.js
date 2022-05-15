// On lance le modal setting afin que les joueur puissent renseigné leur nom
var playerSetting = new bootstrap.Modal(document.getElementById('setting'), {});
playerSetting.show();


let player1Name, player2Name = null;

// Player1
let player1 = document.getElementById('player1Name');
let scorePlayer1 = document.getElementById('scorePlayer1');
let currentScoreP1 = document.getElementById('current1');
let activePlayer1 = document.getElementById('activePlayer1');

// Player2
let player2 = document.getElementById('player2Name');
let scorePlayer2 = document.getElementById('scorePlayer2');
let currentScoreP2 = document.getElementById('current2');
let activePlayer2 = document.getElementById('activePlayer2');


function initializeGame(){
    let checkPlayer1 = document.getElementById('settingPlayer1').value;
    let checkPlayer2 = document.getElementById('settingPlayer2').value;
    
    
    if(checkPlayer1.length >= 1 && checkPlayer2.length >= 1 && checkPlayer1 !== checkPlayer2)
    {
        // Player 1 : attribution du nom à la variable et affichage en jeu du nom du joueur
        player1Name = checkPlayer1;
        player1.innerHTML = player1Name;
        
        // Player 2 : attribution du nom à la variable et affichage en jeu du nom du joueur
        player2Name = checkPlayer2;
        player2.innerHTML = player2Name;
        
        playerSetting.hide();
    }
    else if (checkPlayer1.length >= 1 && checkPlayer2.length >= 1 && checkPlayer1 === checkPlayer2) 
    {
        alert("Les deux joueur ne doivent pas avoir le même pseudo");
    }
    else{
        alert("Un nom est requis pour les 2 joueurs");
    }
}

//myDiv.classList.replace("bg_1", "bg_2");