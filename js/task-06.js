const inputField = document.querySelector('#validation-input');
inputField.addEventListener('blur', inputCheck);

function inputCheck() {
    if(inputField.value.trim().length === 6) {
        inputField.classList.add('valid');
        inputField.classList.remove('invalid');
    } else {
        inputField.classList.remove('valid');
        inputField.classList.add('invalid');
    }
}