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

function showAnswer(event) {
  const eventTarget = event.target;
  const colorEventTarget = eventTarget.style.backgroundColor;
  if (colorEventTarget === rgbColor.innerText) {
    answerText.innerText = 'Acertou!';
  } else {
    answerText.innerText = 'Errou! Tente novamente!';
  }
}

// Adicionar cores aleatoria as bolas e evento quando clicar nas bolas.
for (let i = 0; i < balls.length; i += 1) {
  balls[i].style.backgroundColor = randomColor();
  balls[i].addEventListener('click', showAnswer);
  console.log(balls[i].style.backgroundColor);
  rgbColor.innerText = balls[randomNumber(0, balls.length - 1)].style.backgroundColor;
}
