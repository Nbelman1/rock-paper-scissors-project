
//function getComputerChoice
//generate random number
//convert random number to computer's choice

let randomInt = Math.floor(Math.random() * (3 - 1 + 1) + 1);

function getComputerChoice() {
    if (randomInt === 1) {
        return 'rock';
    } else if (randomInt === 2) {
        return 'paper';
    } else if (randomInt === 3) {
        return 'scissors';
    } else {
        return 'error: game is broken';
    }
} 

let computerSelection = getComputerChoice();

//function getPlayerChoice
//prompt player for their choice
//make input case-insensitive

function getPlayerChoice() {
    let playerChoice = prompt("Choose your weapon: rock, paper, or scissors?", "Enter choice here");
    return playerChoice.toLowerCase(); 
}

let playerSelection = getPlayerChoice();

//function playRound
//take two parameters, playerSelection and computerSelection
//weigh two choices together
//return string stating result
let playerScore = 0;
let computerScore = 0;
let roundNumber = 0;

function playRound(playerSelection, computerSelection) {
    ++roundNumber;
    if (playerSelection === computerSelection) {
        return console.log('Tie game! No points this round.');
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        ++playerScore;
        return console.log('Rock beats scissors! One point for humans.');
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        ++playerScore;
        return console.log('Paper beats rock! One point for humans.');
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        ++playerScore;
        return console.log('Scissors beats paper! One point for humans.');
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        ++computerScore;
        return console.log('Paper beats rock! One point for the machines.'); 
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        ++computerScore;
        return console.log('Scissors beats paper! One point for the machines.');
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        ++computerScore;
        return console.log('Rock beats scissors! One point for the machines.');
    }
}

console.log('Player\'s choice: ' + playerSelection);
console.log('Computer\'s choice: ' + computerSelection);

//function playGame
//run playRound function 5 times
//keep score
//declare winner with string


function playGame() {
    if (roundNumber < 5) {
        playRound();
    } else if (roundNumber > 5) {
        if (playerScore > computerScore) {
            return `Congrats, you\'ve saved the humans! Player won with ${playerScore} points.`;
        } else if (computerScore > playerScore) {
            return `Oh no, computers have taken over! Computer won with ${computerScore} points.`;
        } else {
            return 'Tie game! Humans and computers live together peacefully.';
        }
    } else {
        return 'error: game is broken.';
    }
}

console.log('Player\'s score: ' + playerScore);
console.log('Computer\'s score: ' + computerScore);
console.log('Round number: ' + roundNumber);
