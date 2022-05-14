function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputCreateBox = document.querySelector('#controls > input');
const boxesDiv = document.querySelector('#boxes');
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
let initialRatioBox = 30;

createBtn.addEventListener('click', createAmountBoxes);
destroyBtn.addEventListener('click', destroyBoxes);

function createAmountBoxes() {
    const amountOfBoxes = createBoxes(inputCreateBox.value);
    boxesDiv.append(...amountOfBoxes);
}

function createBoxes(amount) {
    let ratioBox = 0;
    const boxElements = [];
    for (let i = 0; i < amount; i += 1) {
        const newDiv = document.createElement('div');
        newDiv.style.backgroundColor = getRandomHexColor();
        ratioBox = initialRatioBox + i * 10;
        newDiv.style.width = `${ratioBox}px`;
        newDiv.style.height = `${ratioBox}px`;
        boxElements.push(newDiv);
    }
    initialRatioBox = ratioBox + 10;
    return boxElements;
}

function destroyBoxes() {
    boxesDiv.innerHTML = '';
    initialRatioBox = 30;
}