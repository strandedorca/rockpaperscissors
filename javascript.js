// Generate the list of choices
choices = ['rock', 'paper', 'scissors'];

// Let the computer play (generate a random choice)
function computerPlay() {
   // Generate a random choice from the list of choices
   let random_index = Math.floor(Math.random() * choices.length);
   return value = choices[random_index];
}

let computerScore = playerScore = 0;
let round = 1;

// Play a single round - return winner (comp/player) or draw
function playRound(playerSelection) {
   let computerSelection = computerPlay();
   console.log(`Round ${round}:`);
   console.log(`Player: ${playerSelection} - Computer: ${computerSelection}`);
   
   selection.textContent = `Computer chooses ${computerSelection}`;

   if (computerSelection === playerSelection) {
      return 'draw';
   }
   else {
      if (computerSelection === 'rock') {
         if (playerSelection === 'paper') {
            return 'Player';
         } else {
            return 'Computer';
         }
      } else if (computerSelection === 'paper') {
         if (playerSelection === 'rock') {
            return 'Computer';
         } else {
            return 'Player'
         }
      } else {
         if (playerSelection === 'rock') {
            return 'Player';
         } else {
            return 'Computer';
         }
      }
   }
}

// print the winner of a round
function printWinner(winner) {
   console.log(`${winner} won this round`);
   if (winner === 'draw') {
      round_winner.textContent = "Draw!";
   } else {
      round_winner.textContent = `${winner} won this round!`;
   }
}

// Update scores and round
function updateScores(winner) {
   round++;
   if (winner === 'Computer') {
      computerScore++;
   } else if (winner === 'Player') {
      playerScore++;
   }
   console.log(`Current score (comp : player): ${computerScore} : ${playerScore}`);
   scores.textContent = `Current score (comp : player): ${computerScore} : ${playerScore}`;
}

// Check if there is a winner (winner is the one who reaches 5 points first)
function checkWinner(comp, player) {
   if ((comp == 5) || (player == 5)) {
      end.textContent = 'The Game Ended.';
      const toremove = document.querySelectorAll('.toRemove');
      for (const e of toremove) {body.removeChild(e)};
      scores.textContent = `Final Score (comp : player): ${computerScore} : ${playerScore}`;
      if (comp == 5) {
         winner_display.textContent = 'Game Over';
      } else {
         winner_display.textContent = 'You Won!';
      }
   }
} // returns boolean

// DOM -----------------------------------------------------------------------
// target + create elements
const body = document.querySelector('body');
const greetings = body.querySelector('.greetings');

const rule = document.createElement('p');
const round_display = document.createElement('h1');
const selection = document.createElement('p');
const round_winner = document.createElement('p');
const scores = document.createElement('p');
const end = document.createElement('p');
const winner_display = document.createElement('p');
const div = document.createElement('div');
div.classList.add('flex');

start.addEventListener('click', startGame);

// startGame function - add elements
function startGame() {
   // body.style.backgroundColor = '#222629';
   body.removeChild(greetings);
   // const rule = document.createElement('p');
   rule.textContent = 'Winning Condition: First to score 5 wins.';
   addThenRemove(rule);
   // const round_display = document.createElement('h1');
   round_display.textContent = `Round ${round}`;
   addThenRemove(round_display);
   addThenRemove(div);

   rock = addButton('Rock');
   paper = addButton('Paper');
   scissors = addButton('Scissors');

   rock.addEventListener('click', (e) => eventHandler('rock', round_display));
   scissors.addEventListener('click', (e) => eventHandler('scissors', round_display)); 
   paper.addEventListener('click', (e) => eventHandler('paper', round_display)); 
   
   addThenRemove(selection);
   addThenRemove(round_winner);
   body.appendChild(scores);
   body.appendChild(end);
   body.appendChild(winner_display);
}

function addThenRemove(element) {
   element.classList.add('toRemove');
   body.appendChild(element);
}

function addButton(content) {
   const inner_div = document.createElement('div');
   div.appendChild(inner_div);
   const img = document.createElement('img');
   img.setAttribute('src', `images/${content.toLowerCase()}.png`);
   img.style.maxWidth = '200px';

   const button = document.createElement('button');
   button.setAttribute('id', content);
   button.textContent = content;

   inner_div.appendChild(img);
   inner_div.appendChild(button);
   return body.querySelector(`#${content}`);
}

// eventHandler
function eventHandler(playerSelection, round_display) {
   winner = playRound(playerSelection);
   printWinner(winner);
   updateScores(winner);
   round_display.textContent = `Round ${round}`;
   checkWinner(computerScore, playerScore);
}
