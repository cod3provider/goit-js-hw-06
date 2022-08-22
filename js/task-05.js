const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');

const handleClickTest = function (event) {
	outputEl.textContent = event.currentTarget.value;

	if (!event.currentTarget.value) {
		outputEl.textContent = 'Anonymous';
	}
}

inputEl.addEventListener('input', handleClickTest);

