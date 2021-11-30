
const btn = document.querySelector('.change-color');
const spanColor = document.querySelector('.color');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

btn.onclick = function () {
  const rndCol = getRandomHexColor();
  document.body.style.backgroundColor = rndCol;
  spanColor.textContent = rndCol;
};