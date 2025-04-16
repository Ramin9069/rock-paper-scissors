function getComputerChoice(){
    let randomNumber = Math.random();
    let randomChoice
    if (randomNumber < 1/3) {
        randomChoice = "Rock"
    }else if (randomNumber >= 1/3 && randomNumber < 2/3) {
        randomChoice = "Paper"
    }else {
        randomChoice = "Scissors"
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