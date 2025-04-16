function getComputerChoice(){
    let randomNumber = Math.random();
    let randomChoice
    if (randomNumber < 1/3) {
        randomChoice = "rock"
    }else if (randomNumber >= 1/3 && randomNumber < 2/3) {
        randomChoice = "paper"
    }else {
        randomChoice = "scissors"
    }

    console.log(randomChoice);
}

getComputerChoice();

function getHumanChoice(){
    randomChoice = prompt("What is your Choice? Rock, Paper or Scissors?");

    console.log(randomChoice);
}

getHumanChoice();

let humanScore = 0;

let computerScore = 0;

function playRound(humanChoice, computerChoice){
    if (humanChoice === computerChoice) {
        console.log("Its is a tie! ");
    }else if (humanChoice === rock && computerChoice === scissors) {
        humanScore ++;
        console.log("You win! rock beats scissors ");
    }else if (humanChoice === paper && computerChoice === rock) {
        humanChoice ++;
        console.log("You win! paper beats rock ");
    } else if (humanChoice === scissors && computerChoice === paper) {
        humanChoice ++;
        console.log("You win! scissors beat paper ");
    }else if (humanChoice === rock && computerChoice === paper) {
        computerScore ++;
        console.log("You loose! paper beats rock ");
    }else if (humanChoice === paper && computerChoice === scissors) {
        computerScore ++;
        console.log("You loose! scissors beat paper ");
    }else {
        computerScore ++;
        console.log("You loose! rock beats scissors ")
    }
}

let humanSelection = getHumanChoice();
let computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

console.log(humanScore);
console.log(computerScore);