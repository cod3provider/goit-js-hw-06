let counterValue = 0;

const minusBtn = document.querySelector('button[data-action="decrement"]');
const plusBtn = document.querySelector('button[data-action="increment"]');

const counterResult = document.querySelector('#value');

const onMinusBtnClick = event => {
	counterResult.textContent = counterValue -= 1;
}

const onPlusBtnClick = event => {
	counterResult.textContent = counterValue += 1;
}

minusBtn.addEventListener('click', onMinusBtnClick);
plusBtn.addEventListener('click', onPlusBtnClick);