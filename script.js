let playerScore = 0;
let computerScore = 0;

function computerPlay() {
    const computerNum = Math.floor(Math.random() * 3) + 1;
    let computerSelection = "";
    if (computerNum === 1) {
        computerSelection = "rock";
    } else if (computerNum === 2) {
        computerSelection = "paper";
    } else if (computerNum === 3) {
        computerSelection = "scissors"
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
    } else if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            return computerWins();
        } else if (computerSelection === "scissors") {
            return playerWins();
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            return playerWins();
        } else if (computerSelection === "scissors") {
            return computerWins();
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            return computerWins();
        } else if (computerSelection === "paper") {
            return playerWins();
        }
    }
}

function game() {
    while (playerScore !== 5 && computerScore !== 5) {
        const playerSelection = prompt("Enter your choice").toLowerCase();
        const computerSelection = computerPlay();
        playRound(playerSelection, computerSelection);
        console.log(`Your score: ${playerScore}`)
        console.log(`Computer score: ${computerScore}`)
    }
    if (playerScore === 5) {
        console.log("Congratulations! You won.")
    } else if (computerScore === 5) {
        console.log("Tough luck! You lost.")
    }
}