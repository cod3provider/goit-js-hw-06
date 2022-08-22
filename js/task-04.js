const valueEl = document.querySelector('#value');
let counterValue = 0;

const incrementBtn = document.querySelector('button[data-action="increment"]');
const decrementBtn = document.querySelector('button[data-action="decrement"]');

function onIncrementBtnClick() {
	counterValue += 1;
	valueEl.textContent = counterValue;
}

function onDecrementBtnClick() {
	counterValue -= 1;
	valueEl.textContent = counterValue;
}

incrementBtn.addEventListener('click', onIncrementBtnClick);
decrementBtn.addEventListener('click', onDecrementBtnClick);