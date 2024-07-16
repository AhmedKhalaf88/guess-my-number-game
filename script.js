'use strict';

//Project 1:

let again = document.querySelector('.again');
let number = document.querySelector('.number');
let check = document.querySelector('.check');
let highscore = document.querySelector('.highscore');
let message = document.querySelector('.message');
//console.log(message.textContent);
let score = Number(document.querySelector('.score').textContent);

let randomNumber = Math.trunc(Math.random() * 20) + 1;
console.log(randomNumber);

const displayMessage = function (message1) {
  message.textContent = message1;
};

check.addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);

  //When there is no input
  if (!guess) {
    //message.textContent = '⛔ No Number';
    displayMessage('⛔ No Number');

    //When the Number is high
  } else if (guess !== randomNumber) {
    if (score > 1) {
      //message.textContent =guess > randomNumber ? '📈 Too high!' : '📉 Too low!';
      displayMessage(guess > randomNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      score = 0;
      //message.textContent = '💥 You lost the game';
      displayMessage('💥 You lost the game');
      document.querySelector('.score').textContent = score;
    }
  } else {
    //message.textContent = '🎉 Correct Number!';
    displayMessage('🎉 Correct Number!');
    number.textContent = guess;
    document.body.style.backgroundColor = '#60b347';
    number.style.width = '30rem';
    if (Number(highscore.textContent) < score) {
      highscore.textContent = score;
    }
  }
});

again.addEventListener('click', function () {
  randomNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(randomNumber);
  document.querySelector('.guess').value = '';
  //message.textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.body.style.backgroundColor = '#222';
  number.style.width = '15rem';
  number.textContent = '?';
  score = 20;
  document.querySelector('.score').textContent = score;
});

/*
else if (guess > randomNumber) {
    if (score > 1) {
      message.textContent = '📈 Too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      score = 0;
      message.textContent = '💥 You lost the game';
      document.querySelector('.score').textContent = score;
    }

    //When the Number is low
  } else if (guess < randomNumber) {
    if (score > 1) {
      message.textContent = '📉 Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      score = 0;
      message.textContent = '💥 You lost the game';
      document.querySelector('.score').textContent = score;
    }

    //When the player wins
  } 
  */

/*
  const displayMessage = function (message1) {
    if (score > 1) {
      message.textContent = message1;
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      score = 0;
      message.textContent = '💥 You lost the game';
      document.querySelector('.score').textContent = score;
    }
  };
  */

//Project 2:
