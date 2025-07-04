function getComputerChoice() {
    randomChoice = Math.random(); // generates random number for computer choice
    // console.log(randomChoice);
    if (randomChoice <= 0.33) {
        return "rock"; 
    } 
    else if (randomChoice <= 0.66) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

function updateGameLogs(result, humanChoice, computerChoice) {
            const scoreDisplay = document.querySelector('.scores');
            const gameLogs = document.querySelector('.logs');
            const winLog = document.createElement('h3');
            const choiceLog = document.createElement('p');

            const scores = `Player ${humanScore}:${computerScore} Computer`;
            const choices = `Player chose ${humanChoice}, computer chose ${computerChoice}.`;

            winLog.textContent = result;
            scoreDisplay.textContent = scores;
            choiceLog.textContent = choices;

            gameLogs.prepend(winLog);
            gameLogs.prepend(choiceLog);
            gameLogs.prepend(document.createElement('hr'));
        }

function playRound(humanChoice) {
    const computerChoice = getComputerChoice();
    const choicesMade = humanChoice + computerChoice;

    let result = "";
    
    // Check for winner or draw
    switch (choicesMade) {
        case ("rockscissors") :
        case ("paperrock") :
        case ("scissorspaper") :
            humanScore++;
            result = "Player wins!";
            break;
        case ("rockpaper") :
        case ("paperscissors") :
        case ("scissorsrock") :
            computerScore++;
            result = "Computer wins!";
            break;
        default :
            result = "It's a draw!";
            break;
    }

    updateGameLogs(result, humanChoice, computerChoice);

    if (humanScore >= 5) {
        updateGameLogs("Game Over! The player wins.", humanChoice, computerChoice);
        alert("Player wins!");
        disableButtons();
    } else if (computerScore >= 5) {
        updateGameLogs("Game Over! The computer wins.", humanChoice, computerChoice);
        alert("Computer wins!");
        disableButtons();
    }
}

function disableButtons() {
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;
}

let humanScore = 0;
let computerScore = 0;

const rockBtn = document.querySelector('button.rock');
rockBtn.addEventListener("click", () => {
    playRound("rock", getComputerChoice());
});

const paperBtn = document.querySelector('button.paper');
paperBtn.addEventListener("click", () => {
    playRound("paper", getComputerChoice());

});

const scissorsBtn = document.querySelector('button.scissors');
scissorsBtn.addEventListener("click", () => {
    playRound("scissors", getComputerChoice());
});

// playRound(humanSelection, computerSelection);


