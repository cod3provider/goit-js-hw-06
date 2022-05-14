const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', (event) => {
	event.preventDefault();

	const elementsForm = event.currentTarget.elements;

	const mail = elementsForm.email.value;
	const password = elementsForm.password.value;

	const formDataValue = {mail, password};

	if (mail === "" || password === "") {
		alert('Не все поля заполнены!');
	} else {
		console.log(formDataValue);
	}

	event.currentTarget.reset();
});