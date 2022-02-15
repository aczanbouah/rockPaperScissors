let playerScore = 0;
let computerScore = 0;
const roundResult = document.querySelector('#result');
updateScore();
const endResult = document.querySelector('#endResultText');

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

function gameEnd() {
    if (playerScore || computerScore === 5) {
        if (playerScore === 5) {
            endResult.innerText = 'Congratulations! You won! Press the new game button to start over.';
            removeListeners();
        } else if (computerScore === 5) {
            endResult.innerText = 'You lost! Better luck next time! Press the new game button to start over.';
            removeListeners();
        }
    }
}


function updateScore() {
    const playerScoreCounter = document.querySelector('#playerScoreCount');
    const computerScoreCounter = document.querySelector('#computerScoreCount');
    playerScoreCounter.innerText = `${playerScore}`;
    computerScoreCounter.innerText = `${computerScore}`;
}

function playRound(playerSelection, computerSelection) {
    playerSelectionText.innerText = `${playerSelection}`
    computerSelectionText.innerText = `${computerSelection}`

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
    gameEnd();
}

function playRock() {
    const playerSelection = "Rock"
    const computerSelection = computerPlay();
    return playRound(playerSelection, computerSelection);
}

function playPaper() {
    const playerSelection = "Paper"
    const computerSelection = computerPlay();
    return playRound(playerSelection, computerSelection);
}

function playScissors() {
    const playerSelection = "Scissors"
    const computerSelection = computerPlay();
    return playRound(playerSelection, computerSelection);
}

function removeListeners() {
    rockSelection.removeEventListener('click', playRock);
    paperSelection.removeEventListener('click', playPaper);
    scissorsSelection.removeEventListener('click', playScissors);
}

const rockSelection = document.querySelector('#rock');
rockSelection.addEventListener('click', playRock);
rockSelection.addEventListener('mouseover', () => {
    rockSelection.classList.toggle('hover');
})
rockSelection.addEventListener('mouseout', () => {
    rockSelection.classList.toggle('hover');
})

const paperSelection = document.querySelector('#paper')
paperSelection.addEventListener('click', playPaper);
paperSelection.addEventListener('mouseover', () => {
    paperSelection.classList.toggle('hover');
})
paperSelection.addEventListener('mouseout', () => {
    paperSelection.classList.toggle('hover');
})

const scissorsSelection = document.querySelector('#scissors')
scissorsSelection.addEventListener('click', playScissors);
scissorsSelection.addEventListener('mouseover', () => {
    scissorsSelection.classList.toggle('hover');
})
scissorsSelection.addEventListener('mouseout', () => {
    scissorsSelection.classList.toggle('hover');
})

const newGameButton = document.querySelector('.newGameBtn')
newGameButton.addEventListener('click', () => {
    newGame();
})
newGameButton.addEventListener('mouseover', () => {
    newGameButton.classList.toggle('hover');
})
newGameButton.addEventListener('mouseout', () => {
    newGameButton.classList.toggle('hover');
})

const computerSelectionText = document.querySelector('#computerSelect')
const playerSelectionText = document.querySelector('#playerSelect')

function newGame() {
    playerScore = 0;
    computerScore = 0;
    playerSelectionText.innerText = "";
    computerSelectionText.innerText = "";
    roundResult.innerText = "";
    endResult.innerText = "";
    rockSelection.addEventListener('click', playRock);
    paperSelection.addEventListener('click', playPaper);
    scissorsSelection.addEventListener('click', playScissors);
    updateScore();
}