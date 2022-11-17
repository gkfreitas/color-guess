// Criar cores aleatorias rgb.

function randomColor() {
  const randomNumber1 = Math.floor(Math.random() * 256);
  const randomNumber2 = Math.floor(Math.random() * 256);
  const randomNumber3 = Math.floor(Math.random() * 256);
  return `rgb(${randomNumber1}, ${randomNumber2}, ${randomNumber3})`;
}

const balls = document.getElementById('ball-container').children;
const answerText = document.getElementById('answer');
const rgbColor = document.getElementById('rgb-color');

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
  balls[0].style.backgroundColor = 'rgb(168, 34, 1)';
  balls[i].style.backgroundColor = randomColor();
  balls[i].addEventListener('click', showAnswer);
}
