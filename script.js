function getHumanChoice() {
    // same RNG from getComputerChoice() just to make testing easier
    /*
    randomChoice = Math.random();
    console.log(randomChoice);
    if (randomChoice <= 0.3) {
        return "rock"; 
    } 
    else if (randomChoice <= 0.6) {
        return "paper";
    }
    else {
        return "scissors";
    }
        */

    // gets player choice
    
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
                console.log("Invalid play, try again");
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

    const playerWin = "The player wins.";
    const compWin = "The computer wins.";

    // Output plays
    console.log("The player played " + humanChoice + "!");
    console.log("The computer played " + computerChoice + "!");
    
    // Check for winner or draw
    switch (humanChoice, computerChoice) {
        case (humanChoice === "rock" && computerChoice === "scissors") :
            humanScore += 1;
            console.log(playerWin);
        case (humanChoice === "rock" && computerChoice === "paper") :
            computerScore += 1;
            console.log(compWin);
        case (humanChoice === "paper" && computerChoice ==="rock") :
            humanScore += 1;
            console.log(playerWin);
        case (humanChoice === "paper" && computerChoice === "scissors") :
            computerScore += 1;
            console.log(compWin);
        case (humanChoice === "scissors" && computerChoice === "paper") :
            humanScore += 1;
            console.log(playerWin);
        case (humanChoice === "scissors" && computerChoice === "rock") :
            computerScore += 1;
            console.log(compWin);
        default :
            console.log("It's a draw!");
    }

    // Output scores
    console.log("The player's score is: " + humanScore);
    console.log("The computer's score is: " + computerScore);
}

let humanScore = 0;
let computerScore = 0;
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);