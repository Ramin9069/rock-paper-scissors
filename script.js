//creating a function to get computer choice
function getComputerChoice() {
  let randomNumber = Math.random();
  let randomComputerChoice;
  if (randomNumber < 1 / 3) {
    randomComputerChoice = "rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    randomComputerChoice = "paper";
  } else {
    randomComputerChoice = "scissors";
  }

  return randomComputerChoice;
}

//creating a function to get human choice
function getHumanChoice() {
  let randomHumanChoice = prompt(
    "What is your Choice? Rock, Paper or Scissors?"
  ).toLowerCase();

  return randomHumanChoice;
}

// creating a function to play the entire game
function playGame() {
  // variables to hold human and computer scores
  let humanScore = 0;

  let computerScore = 0;

  // creating a function to play the game for a single round
  function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
      return console.log("Its is a tie! ");
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
      ++humanScore;
      return console.log("You win! rock beats scissors ");
    } else if (humanChoice === "paper" && computerChoice === "rock") {
      ++humanScore;
      return console.log("You win! paper beats rock ");
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
      ++humanScore;
      return console.log("You win! scissors beat paper ");
    } else if (humanChoice === "rock" && computerChoice === "paper") {
      ++computerScore;
      return console.log("You loose! paper beats rock ");
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
      ++computerScore;
      return console.log("You loose! scissors beat paper ");
    } else {
      ++computerScore;
      return console.log("You loose! rock beats scissors ");
    }
  }

  // a loop to play game 5 times
  for (let i = 1; i <= 5; ++i) {
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }
  // checking and showing the score and the winner
  if (humanScore > computerScore) {
    console.log(
      `You Won the Game! Your Score: ${humanScore}, Computer's Score: ${computerScore} `
    );
  } else if (humanScore < computerScore) {
    console.log(
      `You Lost the Game! Your Score: ${humanScore}, Computer's Score: ${computerScore} `
    );
  } else {
    console.log(
      `The Game Ended in a Tie! Your Score: ${humanScore}, Computer's Score: ${computerScore} `
    );
  }
}

playGame();
