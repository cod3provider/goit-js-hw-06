function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColorBtn = document.querySelector('.change-color');
const bodyEl = document.querySelector('body');
const colorSpanEl = document.querySelector('.color');

changeColorBtn.addEventListener('click', onChangeBtnColorClick);

function onChangeBtnColorClick() {
  bodyEl.style.backgroundColor = getRandomHexColor();
  colorSpanEl.textContent = bodyEl.style.backgroundColor;
}