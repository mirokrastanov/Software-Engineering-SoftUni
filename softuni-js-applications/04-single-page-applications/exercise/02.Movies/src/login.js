import { elements } from "./app.js";
import { hideSections } from "./home.js";
import { request } from "./util.js";
import { loadHome } from "./home.js";

function loadLogin() {
    hideSections();
    elements.login.style.display = 'block';
    let newForm = elements.login.querySelector('form');
    newForm.reset();
    newForm.addEventListener('submit', (e) => {
        onLoginFormClick(e, newForm);
    });
}

async function onLoginFormClick(e, form) {
    e.preventDefault();
    let formData = new FormData(form);
    let inputs = Object.fromEntries(formData.entries());
    try {
        Object.values(inputs).forEach(x => {
            if (x.trim() == '') {
                throw new Error('All fields are required!');
            }
        });
        let options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(inputs),
        };
        let url = elements.usersURL + '/login';
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
    loadLogin,
    onLoginFormClick,

}