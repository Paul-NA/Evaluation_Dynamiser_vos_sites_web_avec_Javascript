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

// Dé
let dice = document.getElementById('dice');


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
    ResetGame();
    // Initialisation des bouton de jeu
    startGame.addEventListener('click', StartGame);
    rollDice.addEventListener('click', RollDice);
    hold.addEventListener('click', Hold);
}

/**
 * Reset le jeu
 */
function ResetGame(){
    // On Reset tout les scores
    localeCurrentScore = localeCurrentPlayer = scoreTotalPlayer1 = scoreTotalPlayer2 = 0;
    
    // On Reset l'affichage aussi
    scorePlayer1.textContent = scorePlayer2.textContent = currentScoreP1.textContent = currentScoreP2.textContent = 0;
    
    // On reassigne l'indicateur du joueur en cours au joueur 1 et cache pour le joueur 2
    activePlayer1.classList.replace("d-none","text-danger");
    activePlayer2.classList.replace("text-danger","d-none");
}

/**
 * Lance le dé
 */
function RollDice(){
    //Ici on lance le dé
    var result = RandomMinMax(1,6);
    
    //Selection de la classe actuelle du dé
    var className = dice.classList.item(1);
    
    // Remplacement par le nouveau résultat (affichage)
    switch(result){
        case 1 : dice.classList.replace(className,"bi-dice-1-fill"); break
        case 2 : dice.classList.replace(className,"bi-dice-2-fill"); break
        case 3 : dice.classList.replace(className,"bi-dice-3-fill"); break
        case 4 : dice.classList.replace(className,"bi-dice-4-fill"); break
        case 5 : dice.classList.replace(className,"bi-dice-5-fill"); break
        case 6 : dice.classList.replace(className,"bi-dice-6-fill"); break
    }
    
    // on ajoute le score du dé au current du joueur ainsi que dans l'html ?
    /**
     * Regle du jeu, si on fait 1 on vide le localeCurrentScore et on passe au joueur suivant, sinon on ajoute au localeCurrentScore la valeur du dé 
     */
    if(result === 1){
        ChangePlayer();
    }
    else{
        AddCurrentScore(result);
    }
}

/**
 * Changement de joueur (dé valeur de 1, ou hold)
 */
function ChangePlayer(){
        // réinitialisation du  currentScore du currentScoreP1 et du currentScoreP2 à 0
        localeCurrentScore = currentScoreP1.textContent = currentScoreP2.textContent = 0;

        // changer le currentPlayer
        localeCurrentPlayer === 0 ? localeCurrentPlayer = 1 : localeCurrentPlayer = 0;

        // changer l'indicateur de joueur actif
        if(localeCurrentPlayer === 0){
            activePlayer1.classList.replace("d-none","text-danger");
            activePlayer2.classList.replace("text-danger","d-none");
        }
        else{
            activePlayer1.classList.replace("text-danger","d-none");
            activePlayer2.classList.replace("d-none","text-danger");
        }
        
        //Invertion du background
        //activePlayer2.classList.replace("text-danger","d-none");
}


/**
 * On monte le score du joueur en cours de parti
 * @param {type} score : valeur à ajouter
 */
function AddCurrentScore(score){
    localeCurrentScore += score;
    localeCurrentPlayer === 0 ? currentScoreP1.textContent = localeCurrentScore : currentScoreP2.textContent = localeCurrentScore;
}

function RandomMinMax(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function Hold(){
    // Ici on ajoute les points au joueurs qui est actif

    // ensuite on passe la main a l'autre joueur
}
