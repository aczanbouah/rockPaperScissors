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
    if (playerSelection === computerSelection) {
        return "Draw";
    } else if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            return `You lose! Paper beats rock.`;
        } else if (computerSelection === "scissors") {
            return `You win! Rock beats scissors.`;
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            return `You win! Paper beats rock.`
        } else if (computerSelection === "scissors") {
            return `You lose! Scissors beats paper.`
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            return `You lose! Rock beats scissors.`
        } else if (computerSelection === "paper") {
            return `You win! Scissors beats paper.`
        }
    }
}

function game() {
    const playerSelection = prompt("Enter your choice").toLowerCase();
    const computerSelection = computerPlay();


}