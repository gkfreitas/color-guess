// Criar cores aleatorias rgb

function randomColor() {
  const randomNumber1 = Math.floor(Math.random() * 256);
  const randomNumber2 = Math.floor(Math.random() * 256);
  const randomNumber3 = Math.floor(Math.random() * 256);
  return `rgb(${randomNumber1}, ${randomNumber2}, ${randomNumber3})`;
}

console.log(randomColor());

const balls = document.getElementById('ball-container').children;

for (let i = 0; i < balls.length; i += 1) {
  balls[i].style.backgroundColor = randomColor();
}
