
// function getComputerChoice
// create computer choice at random from rock, paper, scissors

const options = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
    const result = options[Math.floor(Math.random() * options.length)];
    return result;
} 

// function checkWinner
// outlines conditions to declare winner of single round 
// passes through variables playerSelection and computerSelection

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

// function playRound
// runs checkWinner function
// prints user-friendly message to understand result of round

let playerScore = 0;
let computerScore = 0;
let roundCounter = 0;

function playRound(playerSelection, computerSelection) {
    const result = checkWinner(playerSelection, computerSelection);
    const roundResults = document.querySelector("#roundResults");
    if (result == 'tie') {
        roundResults.textContent = "Tie game! No points this round.";
        roundCounter++;
    } else if (result == 'humans') {
        roundResults.textContent = `${playerSelection} beats ${computerSelection}, humans win this round!`;
        roundCounter++;
        playerScore++;
    } else if (result == 'machines') {
        roundResults.textContent = `${computerSelection} beats ${playerSelection}, machines win this round.`;
        roundCounter++;
        computerScore++;
    }
}

// displays playerScore, computerScore, and roundCounter

function displayNumbers() {
    let roundNumber = document.querySelector("#roundNumber");
    roundNumber.textContent = `Round number: ${roundCounter}`;
    let humanScore = document.querySelector("#humanScore");
    humanScore.textContent = `Humans score: ${playerScore}`;
    let machineScore = document.querySelector("#machineScore");
    machineScore.textContent = `Machines score: ${computerScore}`;
}

// indicates game is over when player or computer reaches max score, 
// or game hits 10 rounds. resets round counter and scores. 

function gameLogic() {

    if (playerScore == 5 || computerScore == 5 || roundCounter == 10) {
        const gameOverStatus = document.querySelector("#gameOverStatus");
        if (playerScore > computerScore) {
            gameOverStatus.textContent = "GAME OVER. Human willpower has prevailed! Take that, cyborg punks.";
        } else if (playerScore < computerScore) {
            gameOverStatus.textContent = "GAME OVER. Machines have taken over. Artificial intelligence has decimated the human race.";
        } else {
            gameOverStatus.textContent = "Tie game - humans and machines live in perfect harmony... for now.";
        }
        roundCounter = 0;
        playerScore = 0;
        computerScore = 0;
    }
}

// adds a user interface so player can select choice via button
// instead of interacting with console log

const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");

rockBtn.addEventListener("click", () => {
    playerSelection = 'rock';
    playRound(playerSelection, getComputerChoice());
    displayNumbers();
    gameLogic();
})

paperBtn.addEventListener("click", () => {
    playerSelection = 'paper';
    playRound(playerSelection, getComputerChoice());
    displayNumbers();
    gameLogic();
})

scissorsBtn.addEventListener("click", () => {
    playerSelection = 'scissors';
    playRound(playerSelection, getComputerChoice());
    displayNumbers();
    gameLogic();
})
