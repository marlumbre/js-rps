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
    console.log(randomChoice);
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
    // round logic
    console.log("The player played " + humanChoice + "!");
    console.log("The computer played " + computerChoice + "!");
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);