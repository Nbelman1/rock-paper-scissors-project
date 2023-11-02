
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
        return 'error: not recognized';
    }
} 

console.log('Computer\'s choice: ' + getComputerChoice());
let computerSelection = getComputerChoice();


//function playRound
//take two parameters, playerSelection and computerSelection
    //make choice case-insensitive
//weigh two choices together
//return string stating result

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === computerSelection) {
        return 'Tie game! No points this round.';
    } else if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'scissors') {
        return 'Rock beats scissors! One point for humans.';
    } else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'rock') {
        return 'Paper beats rock! One point for humans.';
    } else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'paper') {
        return 'Scissors beats paper! One point for humans.';
    } else if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'paper') {
        return 'Paper beats rock! One point for the machines.'; 
    } else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'scissors') {
        return 'Scissors beats paper! One point for the machines.';
    } else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'rock') {
        return 'Rock beats scissors! One point for the machines.';
    }
}

//function game
//run playRound function 5 times
//keep score
//declare winner with string
let playerScore = 0;
let computerScore = 0;
let playerSelection = prompt("Choose your weapon: rock, paper, or scissors?", "Enter choice here");

console.log('Player\'s choice: ' + playerSelection);
console.log(playRound(playerSelection, computerSelection));

function assignPoint() {
    if ((playerSelection.toLowerCase() === 'rock' && computerSelection === 'scissors') ||
        (playerSelection.toLowerCase() === 'paper' && computerSelection === 'rock') ||
        (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'paper')) {
            return ++playerScore;
    } else if ((playerSelection.toLowerCase() === 'rock' && computerSelection === 'paper') ||
            (playerSelection.toLowerCase() === 'paper' && computerSelection === 'scissors') || 
            (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'rock')) {
            return ++computerScore;
    }
}

function game() {
    playRound(playerSelection, computerSelection);
    assignPoint();
}

console.log('Human\'s points: ' + playerScore);
console.log('Machine\'s points: ' + computerScore);

