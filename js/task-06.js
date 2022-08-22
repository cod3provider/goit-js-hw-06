const inputEl = document.querySelector('#validation-input');

const checkInputLength = evt => {
	console.log(evt.currentTarget);
	console.log(evt.currentTarget.value.length);

	if (evt.currentTarget.value.length !== Number(inputEl.dataset.length)) {
		evt.currentTarget.classList.remove('valid');
		evt.currentTarget.classList.add('invalid');
	} else {
		evt.currentTarget.classList.remove('invalid');
		evt.currentTarget.classList.add('valid');
	}
}

inputEl.addEventListener('blur', checkInputLength);