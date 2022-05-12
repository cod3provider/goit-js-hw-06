const inputSizeControl = document.querySelector('#font-size-control');
const textOutput = document.querySelector('#text');

inputSizeControl.addEventListener('input', onInputSizeControl);

function onInputSizeControl(event) {
	textOutput.style.fontSize = inputSizeControl.value + 'px';
}