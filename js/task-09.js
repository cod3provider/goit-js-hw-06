function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeBtnColor = document.querySelector('.change-color');
const outputColor = document.querySelector('.color');

changeBtnColor.addEventListener('click', event => {
  document.body.style.backgroundColor = getRandomHexColor();
  outputColor.textContent = document.body.style.backgroundColor;
});


