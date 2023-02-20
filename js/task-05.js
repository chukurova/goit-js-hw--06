const inputName = document.querySelector('#name-input');

const outputName = document.querySelector('#name-output');

inputName.addEventListener('input', (enteredName) => {
    outputName.textContent = enteredName.currentTarget.value.trim() || 'Anonymous';
})