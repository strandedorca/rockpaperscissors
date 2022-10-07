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
   
   selection.textContent = `Computer chooses ${computerSelection}!`;

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
   if (winner === 'draw') {
      round_winner.textContent = `Round ${round}: Draw!`;
   } else {
      round_winner.textContent = `Round ${round}: ${winner} won!`;
   }
}

// Update scores and round
function updateScores(winner) {
   round++;
   if (winner === 'Computer') {
      computerScore++;
      computer_score.textContent = computerScore;
   } else if (winner === 'Player') {
      playerScore++;
      player_score.textContent = playerScore;
   }
}

// Check if there is a winner (winner is the one who reaches 5 points first)
function checkWinner(comp, player) {
   if ((comp == 5) || (player == 5)) {
      const toremove = document.querySelectorAll('.toRemove');
      for (const e of toremove) {body.removeChild(e)};
      if (comp == 5) {
         winner_display.textContent = 'Game Over. You Lost :/';
         end_image.setAttribute('src', `images/loss_meme.png`);
      } else {
         winner_display.textContent = 'You Won!';
         end_image.setAttribute('src', `images/win_meme.png`);
      }
      end_image.setAttribute('id', 'end_image');
      body.appendChild(end_image);
      body.appendChild(winner_display);
      body.appendChild(restart);
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
const scores = document.createElement('div');
scores.classList.add('flex');

const end_image = document.createElement('img');
const winner_display = document.createElement('h2');
const div = document.createElement('div');
div.classList.add('flex');

const player_block = document.createElement('div');
const computer_block = document.createElement('div');
const player_title  = document.createElement('h3');
const computer_title  = document.createElement('h3');
const player_score = document.createElement('h3');
const computer_score = document.createElement('h3');

const restart = document.createElement('button');
restart.textContent = 'Restart';
restart.setAttribute('onClick', "window.location.reload(false)");

start.addEventListener('click', startGame);

// startGame function - add elements
function startGame() {
   body.removeChild(greetings);
   rule.textContent = 'Winning Condition: First to score 5 wins.';
   addThenRemove(rule);
   round_display.textContent = `Round ${round}`;
   addThenRemove(round_display);
   body.appendChild(scores);
   scores.appendChild(player_block);
   scores.appendChild(computer_block);

   player_title.textContent = 'PLAYER';
   player_block.appendChild(player_title);
   player_block.appendChild(player_score);
   player_score.textContent = playerScore;

   computer_title.textContent = 'COMPUTER';
   computer_block.appendChild(computer_title);
   computer_block.appendChild(computer_score);
   computer_score.textContent = computerScore;
   
   addThenRemove(div);

   rock = addButton('Rock');
   paper = addButton('Paper');
   scissors = addButton('Scissors');

   rock.addEventListener('click', (e) => eventHandler('rock', round_display));
   scissors.addEventListener('click', (e) => eventHandler('scissors', round_display)); 
   paper.addEventListener('click', (e) => eventHandler('paper', round_display)); 
   
   addThenRemove(selection);
   addThenRemove(round_winner);
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
