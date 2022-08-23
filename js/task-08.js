const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', onFormSubmitHandler)

function onFormSubmitHandler(evt) {
	evt.preventDefault();

	const email = evt.currentTarget.elements.email.value;
	const password = evt.currentTarget.elements.password.value;

	if (!email || !password) {
		alert('Ты не прав. Не все поля заполнены. Подумай еще!');
	}

	const formDataValue = {email, password};
	console.log(formDataValue);
	evt.currentTarget.reset();
}