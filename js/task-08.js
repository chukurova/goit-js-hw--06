const form = document.querySelector('.login-form');

const warning = 'Все поля должны быть заполнены!';

form.addEventListener('submit', onSubmit);

function onSubmit(action) {
    action.preventDefault();
    const formElements = action.currentTarget.elements;
    const email = formElements.email.value.trim();
    const password = formElements.password.value.trim();
<<<<<<< HEAD
    const formFields = {email, password};
    if(email === '' || password === ''){
       return alert(warning);
=======
    const formFields = { email, password };
    if (email === '' || password === '') {
        alert(warning);
        return;
>>>>>>> 4bb9bd84106da61448c91734246f13799aa2a811
    }
    console.log(formFields);
    action.currentTarget.reset();
}
