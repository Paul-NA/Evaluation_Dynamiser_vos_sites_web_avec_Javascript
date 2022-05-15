// On lance le modal setting afin que les joueur puissent renseigné leur nom
var playerSetting = new bootstrap.Modal(document.getElementById('setting'), {});
playerSetting.show();

// Variable par defaut pour afficher les nom si besoins
let player1Name, player2Name = null;

// Player1
let player1 = document.getElementById('player1Name');
let scorePlayer1 = document.getElementById('scorePlayer1');
let currentScoreP1 = document.getElementById('currentPlayer1');
let activePlayer1 = document.getElementById('activePlayer1');

// Player2
let player2 = document.getElementById('player2Name');
let scorePlayer2 = document.getElementById('scorePlayer2');
let currentScoreP2 = document.getElementById('currentPlayer2');
let activePlayer2 = document.getElementById('activePlayer2');

// Variable locale du jeu
let localeCurrentScore, localeCurrentPlayer, scoreTotalPlayer1, scoreTotalPlayer2;

// Liste des boutons du jeu 
let startGame = document.getElementById('startGame');
let rollDice = document.getElementById('rollDice');
let hold = document.getElementById('hold');

/**
 * Initialise le jeu et les joueurs une foi le form remplis correctement
 */
function initializeGame(){
    let checkPlayer1 = document.getElementById('settingPlayer1').value;
    let checkPlayer2 = document.getElementById('settingPlayer2').value;
    
    
    if(checkPlayer1.length >= 1 && checkPlayer2.length >= 1 && checkPlayer1 !== checkPlayer2)
    {
        // Player 1 : attribution du nom à la variable et affichage en jeu du nom du joueur
        player1Name = checkPlayer1;
        player1.textContent = player1Name;
        
        // Player 2 : attribution du nom à la variable et affichage en jeu du nom du joueur
        player2Name = checkPlayer2;
        player2.textContent = player2Name;
        
        // On ferme la modal
        playerSetting.hide();
        
        // On lance le jeu
        StartGame();
    }
    else if (checkPlayer1.length >= 1 && checkPlayer2.length >= 1 && checkPlayer1 === checkPlayer2) 
    {
        alert("Les deux joueur ne doivent pas avoir le même pseudo");
    }
    else{
        alert("Un nom est requis pour les 2 joueurs");
    }
}

/**
 * Début du jeu
 */
function StartGame(){
    // il faut être sur que tout les score sont à zero au démarrage du jeu (JS et HTML)
    Reset();
    // Initialisation des bouton de jeu
    startGame.addEventListener('click', StartGame);
    
}

function Reset(){
    // On Reset tout les scores
    localeCurrentScore = localeCurrentPlayer = scoreTotalPlayer1 = scoreTotalPlayer2 = 0;
    
    // On Reset l'affichage aussi
    scorePlayer1.textContent = scorePlayer2.textContent = currentScoreP1.textContent = currentScoreP2.textContent = 0;
    
    // On reassigne l'indicateur du joueur en cours au joueur 1 et cache pour le joueur 2
    activePlayer1.classList.replace("d-none","text-danger");
    activePlayer2.classList.replace("text-danger","d-none");
}

//myDiv.classList.replace("bg_1", "bg_2");