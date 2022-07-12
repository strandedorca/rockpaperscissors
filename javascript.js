// Generate the list of choices
choices = ['rock', 'paper', 'scissors'];

// Prompting user for input -------- tested
function playerPlay() {
   do {
      playerSelection = prompt("Choose:");
   } while (!isIn(playerSelection));
   return playerSelection;
}

// Check if the input is in the "choices" array -------- tested
function isIn(input) {
   for (choice of choices)
   {
      if (choice === input) {
         return true;
      }
   }
   return false;
}

// Let the computer play ---------- tested
function computerPlay() {
   // Generate a random choice from the list of choices
   let random_index = Math.floor(Math.random() * choices.length);
   return value = choices[random_index];
}

// Play a single round - return winner/draw ----------- tested
function playRound(computerSelection, playerSelection) {
   if (computerSelection === playerSelection) {
      return 'draw';
   }
   else {
      if (computerSelection === 'rock') {
         if (playerSelection === 'paper') {
            return 'player';
         } else {
            return 'comp';
         }
      } else if (computerSelection === 'paper') {
         if (playerSelection === 'rock') {
            return 'comp';
         } else {
            return 'player'
         }
      } else {
         if (playerSelection === 'rock') {
            return 'player';
         } else {
            return 'comp';
         }
      }
   }
}

// Play a game of 5 rounds and announce winner for each round.
game();
function game() {
   let computerScore = playerScore = 0;

   for (i = 0; i < 5; i++) {
      console.log(`Round ${i+1}:`)
      let playerSelection = playerPlay();
      let computerSelection = computerPlay();
      console.log(`Player chooses: ${playerSelection}`);
      console.log(`Computer chooses: ${computerSelection}`);
      
      winner = playRound(computerSelection, playerSelection);
      console.log(`${winner} wins`);
      if (winner === 'comp') {
         computerScore++;
      } else if (winner === 'player') {
         playerScore++;
      }
   }

   console.log(`Scores (comp : player): ${computerScore} : ${playerScore}`);
   
   if (computerScore > playerScore) {
      console.log('Computer wins.');
   } else if (playerScore > computerScore) {
      console.log('Player wins.');
   } else {
      console.log('Draw');
   }
}
