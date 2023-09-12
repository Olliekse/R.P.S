// const playerSelection = "rock";
// const computerSelection = 3;

const game = () => {
  for (i = 0; i <= 4; i++) {
    const playerSelection = prompt("Rock, Paper or Scissors?").toLowerCase();
    const choices = ["Rock", "Paper", "Scissors"];
    const computerSelection =
      choices[Math.floor(Math.random() * choices.length)];

    const playRound = (playerSelection, computerSelection) => {
      if (playerSelection === "rock" && computerSelection === 2) {
        return "You lose! Paper beats Rock";
      } else if (playerSelection === "paper" && computerSelection === 3) {
        return "You lose! Scissors beat Paper";
      } else if (playerSelection === "scissors" && computerSelection === 1) {
        return "You lose! Rock beats Scissors";
      } else if (playerSelection === "rock" && computerSelection === 3) {
        return "You win! Rock beats scissors";
      } else if (playerSelection === "paper" && computerSelection === 1) {
        return "You win! Paper beats Rock";
      } else {
        return "It's a draw!";
      }
    };

    console.log(playRound(playerSelection, computerSelection));
  }
};

game();
