
//function getComputerChoice
//create computer choice at random from rock, paper, scissors

const options = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
    const result = options[Math.floor(Math.random() * options.length)];
    return result;
} 

//function checkWinner
//outlines conditions to declare winner of single round 
//passes through vars playerSelection and computerSelection

function checkWinner(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return 'tie';
    } else if (
        (playerSelection == 'rock' && computerSelection == 'scissors') ||
        (playerSelection == 'paper' && computerSelection == 'rock') ||
        (playerSelection == 'scissors' && computerSelection == 'paper') 
    ){
        return 'humans';
    } else if (
        (playerSelection == 'rock' && computerSelection == 'paper') ||
        (playerSelection == 'paper' && computerSelection == 'scissors') ||
        (playerSelection == 'scissors' && computerSelection == 'rock')
    ){
        return 'machines';
    }
}

//function playRound
//runs checkWinner function
//prints user-friendly message to understand result of round

function playRound(playerSelection, computerSelection) {
    const result = checkWinner(playerSelection, computerSelection);
    if (result == 'tie') {
        return 'Tie game! No points this round.';
    } else if (result == 'humans') {
        return `${playerSelection} beats ${computerSelection}, humans win this round!`;
    } else if (result == 'machines') {
        return `${computerSelection} beats ${playerSelection}, machines win this round.`;
    }
}

//function getPlayerChoice
//runs loop that prompts player for their input, 
//keeps running until user inputs valid choice from options array
//converts player input to lowercase

function getPlayerChoice() {
    let validatedInput = false;
    while (validatedInput == false) {
        const choice = prompt('Choose your weapon: rock, paper, or scissors?', 'Type choice here.');
        if (choice == null) {
            continue;
        }
        const choiceInLower = choice.toLowerCase();
        if (options.includes(choiceInLower)) {
            validatedInput = true;
            return choiceInLower;
        }
    }
}

//function game
//keeps score of multiple rounds
//if there haven't been five rounds, run getPlayerChoice and getComputerChoice
//assign points based on winner
//after five rounds, declare winner and print user-friendly message

function game(){
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        console.log('-------');
        if (checkWinner(playerSelection, computerSelection) == 'humans') {
            playerScore++;
        } else if (checkWinner(playerSelection, computerSelection) == 'machines') {
            computerScore++;
        }
    }
    console.log('GAME OVER.')
    if (playerScore > computerScore) {
        console.log('Victory for humans! Take that, cyborg punks.');
    } else if (playerScore < computerScore) {
        console.log('Machines have won, artificial intelligence has wiped out humanity.');
    } else {
        console.log('Tie game - humans and machines live in perfect harmony... for now.')
    }
}

game();