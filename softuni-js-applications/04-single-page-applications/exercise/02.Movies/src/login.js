import { elements } from "./app.js";
import { hideSections } from "./home.js";
import { request, updateNav } from "./util.js";
import { loadHome } from "./home.js";

function loadLogin() {
    hideSections();
    elements.login.style.display = 'block';
    elements.login.replaceChildren(createLoginForm());
    let newForm = elements.login.querySelector('form');
    newForm.reset();
    newForm.addEventListener('submit', (e) => {
        onLoginFormClick(e, newForm);
    });
}

function createLoginForm() {
    let form = document.createElement('form');
    form.setAttribute('id', 'login-form');
    form.classList.add('text-center', 'border', 'border-light', 'p-5');
    form.setAttribute('method', '');
    form.setAttribute('action', '');
    form.innerHTML = `
    <div class="form-group">
        <label for="email">Email</label>
        <input id="email" type="email" class="form-control" placeholder="Email" name="email" value="" />
    </div>
    <div class="form-group">
        <label for="password">Password</label>
        <input id="password" type="password" class="form-control" placeholder="Password" name="password" value="" />
    </div>
    <button type="submit" class="btn btn-primary">Login</button>`;
    return form;
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
        if (typeof data != 'object') {
            let error = { message: data };
            throw error;
        }
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