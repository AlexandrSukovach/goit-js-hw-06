



// const nameBgColor = document.querySelector('.color');
// const changeBgColor = document.querySelector('.change-color');

// changeBgColor.addEventListener('click', clickButtonBgColor);
// changeBgColor.addEventListener('click', getRandomHexColor);


const btn = document.querySelector('.change-color');
const spanColor = document.querySelector('.color');

btn.onclick = function () {
  const rndCol = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  document.body.style.backgroundColor = rndCol;
  spanColor.textContent = rndCol;
};