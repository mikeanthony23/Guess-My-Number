'use strict'

let secretNumber = Math.trunc(Math.random() * 20) + 1
let score = 20
let highScore = 0

const printMessage = message => (document.querySelector('.message').textContent = message)

document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value)
  console.log(guess, typeof guess)

  // When there is no input
  if (!guess) {
    printMessage('No Number - Please Select')

    // When you guess the correct number
  } else if (guess === secretNumber) {
    printMessage('Correct Number')
    document.querySelector('.number').textContent = secretNumber
    document.querySelector('body').style.backgroundColor = '#60b347'
    document.querySelector('.number').style.width = '30rem'
    document.querySelector('.check').style.visibility = 'hidden'

    if (score > highScore) {
      highScore = score
      document.querySelector('.highscore').textContent = highScore
    }
    // When your score returns to zero
  } else if (score < 2) {
    printMessage('You Lost!')
    document.querySelector('.score').textContent = 0

    // When your guess is too high to the exact number
  } else if (guess > secretNumber) {
    printMessage('Too High!')
    score--
    document.querySelector('.score').textContent = score

    // When your guess is too low to the exact number
  } else if (guess < secretNumber) {
    printMessage('Too Low!')
    score--
    document.querySelector('.score').textContent = score
  }
})

// RESETS THE GAME

document.querySelector('.again').addEventListener('click', () => {
  //assigns new guessing number
  secretNumber = Math.trunc(Math.random() * 20) + 1
  score = 20
  //resets the score
  document.querySelector('.score').textContent = score
  //resets the message
  printMessage('Start guessing...')
  //resets the guess icon
  document.querySelector('.number').textContent = '?'
  //resets the width of the guess number placeholder
  document.querySelector('.number').style.width = '15rem'
  //resets the background color
  document.querySelector('body').style.backgroundColor = '#222'
  //resets the input
  document.querySelector('.guess').value = ''
  //displays the check button
  document.querySelector('.check').style.visibility = 'unset'
})
