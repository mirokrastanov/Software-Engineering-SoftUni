import { register } from "../api/user.js";

const section = document.querySelector('#registerView');
const form = section.querySelector('form');
form.addEventListener('submit', onSubmit);

let ctx = null;
export function showRegister(context) {
    ctx = context;
    context.showSection(section);
}

async function onSubmit(e) {
    e.preventDefault();
    const formData = new FormData(form);
    const { email, password, repeatPassword } = Object.fromEntries(formData);
    // TODO - add more verifiers
    if (password != repeatPassword) {
        console.log('Passwords do not match');
    } else {
        await register(email, password);
        console.log('Registration successful');
        form.reset();
        ctx.updateNav();
        ctx.goTo('/catalog');
    }
}