function getHumanChoice() {
    while(true) {
        playerChoice = prompt("Rock, Paper, or Scissors?");
        playerChoice = playerChoice.toLowerCase();
        switch (playerChoice) {
            case "rock":
                return "rock";
            case "paper" :
                return "paper";
            case "scissors" :
                return "scissors";
            default:
                alert("Invalid play, try again");
        }
    }
}

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

function playRound(humanChoice, computerChoice) {

    choicesMade = humanChoice + computerChoice;

    const playerWin = "The player wins.";
    const compWin = "The computer wins.";

    // Output plays
    console.log("Player: " + humanChoice);
    console.log("Computer: " + computerChoice);
    
    // Check for winner or draw
    switch (choicesMade) {
        case ("rockscissors") :
            humanScore++;
            console.log(playerWin);
            break;
        case ("rockpaper") :
            computerScore++;
            console.log(compWin);
            break;
        case ("paperrock") :
            humanScore++;
            console.log(playerWin);
            break;
        case ("paperscissors") :
            computerScore++;
            console.log(compWin);
            break;
        case ("scissorspaper") :
            humanScore++;
            console.log(playerWin);
            break;
        case ("scissorsrock") :
            computerScore++;
            console.log(compWin);
            break;
        default :
            console.log("It's a draw!");
            break;
    }

    // Output scores
    console.log("Player: " + humanScore + ", Computer: " + computerScore);
}

let humanScore = 0;
let computerScore = 0;
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
playRound(getHumanChoice(), getComputerChoice());
playRound(getHumanChoice(), getComputerChoice());
playRound(getHumanChoice(), getComputerChoice());
playRound(getHumanChoice(), getComputerChoice());