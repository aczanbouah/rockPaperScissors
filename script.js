let playerScore = 0;
let computerScore = 0;

function computerPlay() {
    const computerNum = Math.floor(Math.random() * 3) + 1;
    let computerSelection = "";
    if (computerNum === 1) {
        computerSelection = "Rock";
    } else if (computerNum === 2) {
        computerSelection = "Paper";
    } else if (computerNum === 3) {
        computerSelection = "Scissors"
    }
    return computerSelection;
}

function playRound(playerSelection, computerSelection) {
    function playerWins() {
        playerScore++;
        return console.log(`You win! ${playerSelection} beats ${computerSelection}.`);
    }

    function computerWins() {
        computerScore++;
        return console.log(`You lose! ${playerSelection} gets beat by ${computerSelection}.`);
    }
    if (playerSelection === computerSelection) {
        return console.log("Draw");
    } else if (playerSelection === "Rock") {
        if (computerSelection === "Paper") {
            return computerWins();
        } else if (computerSelection === "Scissors") {
            return playerWins();
        }
    } else if (playerSelection === "Paper") {
        if (computerSelection === "Rock") {
            return playerWins();
        } else if (computerSelection === "Scissors") {
            return computerWins();
        }
    } else if (playerSelection === "Scissors") {
        if (computerSelection === "Rock") {
            return computerWins();
        } else if (computerSelection === "Paper") {
            return playerWins();
        }
    }
}

function game() {
    while (playerScore !== 5 && computerScore !== 5) {
        const playerInput = prompt("Enter your choice").toLowerCase();
        const playerSelection = playerInput.charAt(0).toUpperCase() + playerInput.slice(1);
        const computerSelection = computerPlay();
        playRound(playerSelection, computerSelection);
        console.log(`Your score: ${playerScore}`);
        console.log(`Computer score: ${computerScore}`);
    }
    if (playerScore === 5) {
        console.log("Congratulations! You won.");
    } else if (computerScore === 5) {
        console.log("Tough luck! You lost.");
    }
}

function newGame() {
    playerScore = 0;
    computerScore = 0;
    game();
}