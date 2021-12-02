function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonCreate = document.querySelector('[data-create]');
const buttonDestroy = document.querySelector('[data-destroy]');
const boxes = document.querySelector('#boxes');
const input = document.querySelector('input');

let sizeBasic = 30;
buttonCreate.addEventListener('click', renderAmout);
buttonDestroy.addEventListener('click', destroyBoxes);

function renderAmout() {
  const amount = + document.querySelector('#controls>input').value;
  console.log(amount);
  createBoxes(amount);
};

function createBoxes(amount) {
  let divBoxes = document.createDocumentFragment();
  for (let i = 0; i < amount; i += 1) {
    // let sizeBoxes = sizeBasic + i * 10;
    let sizeBoxes = sizeBasic;
    sizeBasic += 10
    let color = getRandomHexColor();
    let div = document.createElement("div");
    div.style.cssText = `width: ${sizeBoxes}px; height: ${sizeBoxes}px; background-color: ${color};`;
    // console.log(sizeBoxes);
    // console.log(color);
    // console.log(sizeBasic);
    divBoxes.appendChild(div);
  };
  boxes.appendChild(divBoxes);

};

function destroyBoxes() {
  boxes.innerHTML = '';
  input.value = '';
  sizeBasic = 30;
};
