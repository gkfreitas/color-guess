const rgbColor = document.getElementById('rgb-color');
// Criar cores aleatorias rgb.

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function randomColor() {
  const randomNumber1 = Math.floor(Math.random() * 256);
  const randomNumber2 = Math.floor(Math.random() * 256);
  const randomNumber3 = Math.floor(Math.random() * 256);
  return `rgb(${randomNumber1}, ${randomNumber2}, ${randomNumber3})`;
}

const balls = document.getElementById('ball-container').children;
const answerText = document.getElementById('answer');

// Mostrar se a cor escolhida está certa.
const scorePoints = document.getElementById('score');
let score = 0;
scorePoints.innerHTML = score;

function showAnswer(event) {
  const eventTarget = event.target;
  const colorEventTarget = eventTarget.style.backgroundColor;
  if (colorEventTarget === rgbColor.innerText) {
    answerText.innerText = 'Acertou!';
  } else {
    answerText.innerText = 'Errou! Tente novamente!';
  }
  if (answerText.innerText === 'Acertou!') {
    score += 3;
    scorePoints.innerText = score;
  }
}

// Adicionar cores aleatoria as bolas e evento quando clicar nas bolas.

function generateColor() {
  for (let i = 0; i < balls.length; i += 1) {
    balls[i].style.backgroundColor = randomColor();
    balls[i].addEventListener('click', showAnswer);
    rgbColor.innerText = balls[randomNumber(0, balls.length - 1)].style.backgroundColor;
  }
  answerText.innerText = 'Escolha uma cor';
}
generateColor();

// Botão para resetar game

const buttonReset = document.getElementById('reset-game');

buttonReset.addEventListener('click', generateColor);
