import { elements } from "./app.js";
import { hideSections, loadHome } from "./home.js";
import { request } from "./util.js";


function loadRegister() {
    hideSections();
    elements.register.style.display = 'block';
    let newForm = elements.register.querySelector('form');
    newForm.reset();
    newForm.addEventListener('submit', (e) => {
        onRegisterFormClick(e, newForm);
    });
}

async function onRegisterFormClick(e, form) {
    e.preventDefault();
    let formData = new FormData(form);
    let inputs = Object.fromEntries(formData.entries());
    try {
        Object.values(inputs).forEach(x => {
            if (x.trim() == '') {
                throw new Error('All fields are required!');
            }
        });
        if (inputs.password.length < 6) {
            throw new Error('Password must be at least 6 characters long!');
        }
        if (inputs.password != inputs.repeatPassword) {
            throw new Error('Passwords must match!');
        }
        let options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(inputs),
        };
        let url = elements.usersURL + '/register';
        let data = await request(url, options);
        if (!data) throw new Error('Bad Request');
        localStorage.setItem('userData', JSON.stringify(data));
        form.reset();
        loadHome();
    } catch (error) {
        console.log(error.message);
    }
}


export {
    loadRegister,
    onRegisterFormClick,

}