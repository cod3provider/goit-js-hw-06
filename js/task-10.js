function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputEl = document.querySelector('#controls').firstElementChild;
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const boxesEl = document.querySelector('#boxes');

createBtn.addEventListener('click', onCreateBtnClick);
destroyBtn.addEventListener('click', onDestroyBtnClick);

function onCreateBtnClick() {
  const amount = inputEl.value;
  amount ? createBoxes(amount) : alert('Ну ты чего? Введи число же!');
  inputEl.value = '';
}

function onDestroyBtnClick() {
  boxesEl.innerHTML = '';
  inputEl.value = '';
}

function createBoxes(amount) {
  let size = 30;
  let arr = [];

  for (let i = 1; i <= amount; i += 1) {
    arr.push(`<div style="width: ${size}px; height: ${size}px; background-color: ${getRandomHexColor()}"></div>`);
    size += 10;
  }
  boxesEl.insertAdjacentHTML('beforeend', arr.join(''));
}