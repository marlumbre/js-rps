function getHumanChoice() {
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
    // return(prompt("Rock, Paper, or Scissors?", "Your choice"));
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
    console.log("The player played " + humanSelection + "!");
    console.log("The computer played " + computerSelection + "!");
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);