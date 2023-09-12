// const playerSelection = "rock";
// const computerSelection = 3;

const game = () => {
  for (i = 0; i <= 4; i++) {
    const playerSelection = prompt("Rock, Paper or Scissors?");
    const getComputerChoice = Math.floor(Math.random() * 3) + 1;
    const computerSelection = getComputerChoice;

    const playRound = (playerSelection, computerSelection) => {
      if (playerSelection.toLowerCase() === "rock" && computerSelection === 2) {
        return "You lose! Paper beats Rock";
      } else if (
        playerSelection.toLowerCase() === "paper" &&
        computerSelection === 3
      ) {
        return "You lose! Scissors beat Paper";
      } else if (
        playerSelection.toLowerCase() === "scissors" &&
        computerSelection === 1
      ) {
        return "You lose! Rock beats Scissors";
      } else if (
        playerSelection.toLowerCase() === "rock" &&
        computerSelection === 3
      ) {
        return "You win! Rock beats scissors";
      } else if (
        playerSelection.toLowerCase() === "paper" &&
        computerSelection === 1
      ) {
        return "You win! Paper beats Rock";
      } else {
        return "It's a draw!";
      }
    };

    console.log(playRound(playerSelection, computerSelection));
  }
};

game();
