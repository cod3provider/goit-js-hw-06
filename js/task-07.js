const inputEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

const onInputHandler = function (evt) {
	textEl.style.fontSize = `${evt.currentTarget.value}px`;
}

inputEl.addEventListener('input', onInputHandler);