const form = document.querySelector('.login-form');

const warning = 'Все поля должны быть заполнены!';

form.addEventListener('submit', onSubmit);

function onSubmit(action) {
    action.preventDefault();
    const formElements = action.currentTarget.elements;
    const email = formElements.email.value.trim();
    const password = formElements.password.value.trim();
    const formFields = {email, password};
    if(email === '' || password === ''){
        alert(warning);
    }
console.log(formFields);
action.currentTarget.reset();
}
