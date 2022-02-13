let playerScore = 0;
let computerScore = 0;
const roundResult = document.querySelector('#result');
updateScore();

function computerPlay() {
    const computerNum = Math.floor(Math.random() * 3) + 1;
    let computerSelection;
    if (computerNum === 1) {
        computerSelection = "Rock";
    } else if (computerNum === 2) {
        computerSelection = "Paper";
    } else if (computerNum === 3) {
        computerSelection = "Scissors"
    }
    return computerSelection;
}

function updateScore() {
    const playerScoreCounter = document.querySelector('#playerScoreCount');
    const computerScoreCounter = document.querySelector('#computerScoreCount');
    playerScoreCounter.innerText = `${playerScore}`;
    computerScoreCounter.innerText = `${computerScore}`;
}

function playRound(playerSelection, computerSelection) {
    const playerSelectionText = document.querySelector('#playerSelect').innerText = `${playerSelection}`
    const computerSelectionText = document.querySelector('#computerSelect').innerText = `${computerSelection}`

    if (playerSelection === computerSelection) {
        roundResult.innerText = 'Draw!'
        updateScore()
    } else if (playerSelection === "Rock") {
        if (computerSelection === "Paper") {
            computerWins();
            updateScore();
        } else {
            playerWins();
            updateScore();
        }
    } else if (playerSelection === "Paper") {
        if (computerSelection === "Rock") {
            playerWins();
            updateScore();
        } else {
            computerWins();
            updateScore();
        }
    } else if (playerSelection === "Scissors") {
        if (computerSelection === "Rock") {
            computerWins();
            updateScore();
        } else {
            playerWins();
            updateScore();
        }
    }

    function playerWins() {
        playerScore++;
        roundResult.innerText = `You win! ${playerSelection} beats ${computerSelection}.`
    }

    function computerWins() {
        computerScore++;
        roundResult.innerText = `You lose! ${playerSelection} gets beat by ${computerSelection}.`
    }

}

const rockSelection = document.querySelector('#rock').addEventListener('click', () => {
    const playerSelection = "Rock"
    const computerSelection = computerPlay();
    return playRound(playerSelection, computerSelection);
});
const paperSelection = document.querySelector('#paper').addEventListener('click', () => {
    const playerSelection = "Paper"
    const computerSelection = computerPlay();
    return playRound(playerSelection, computerSelection);
});
const scissorsSelection = document.querySelector('#scissors').addEventListener('click', () => {
    const playerSelection = "Scissors"
    const computerSelection = computerPlay();
    return playRound(playerSelection, computerSelection);
});

const startNewGame = document.querySelector('#newGameBtn').addEventListener('click', () => {
    newGame();
})


function newGame() {
    playerScore = 0;
    computerScore = 0;
    roundResult.innerText = "";
    updateScore();
}