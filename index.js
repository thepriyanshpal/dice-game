const diceImages = document.querySelectorAll('.dice img');
const resultHeading = document.getElementById('result');

function rollOnce() {
  const randomNumber1 = Math.floor(Math.random() * 6) + 1;
  const randomNumber2 = Math.floor(Math.random() * 6) + 1;

  diceImages[0].setAttribute('src', `images/dice${randomNumber1}.png`);
  diceImages[1].setAttribute('src', `images/dice${randomNumber2}.png`);

  if (randomNumber1 > randomNumber2) {
    resultHeading.textContent = '🚩 Player 1 Wins!';
  } else if (randomNumber1 < randomNumber2) {
    resultHeading.textContent = 'Player 2 Wins! 🚩';
  } else {
    resultHeading.textContent = 'Draw!';
  }
}

function rollDice() {
  diceImages.forEach(img => img.classList.add('rolling'));
  setTimeout(() => {
    diceImages.forEach(img => img.classList.remove('rolling'));
    rollOnce();
  }, 600);
}

document.getElementById('roll-button').addEventListener('click', rollDice);

// Roll once on load with animation
rollDice();
