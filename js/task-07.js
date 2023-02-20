
const inputField = document.querySelector('#font-size-control');

const text = document.querySelector('#text');
inputField.addEventListener('input', textSizeChange);

function textSizeChange() {
    text.style.fontSize = inputField.value + 'px';
}
textSizeChange();