import { elements } from "./app.js";
import { hideSections } from "./home.js";
import { request } from "./util.js";


function loadRegister() {
    hideSections();
    elements.register.style.display = 'block';
    let newForm = createRegisterForm();
    elements.register.replaceChildren(newForm);
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
        localStorage.setItem('userData', data);

    } catch (error) {
        console.log(error.message);
    }




}


function createRegisterForm() {
    let form = document.createElement('form');
    form.classList.add('text-center', 'border', 'border-light', 'p-5');
    form.setAttribute('id', 'register-form');
    form.innerHTML = `
    <div class="form-group">
        <label for="email">Email</label>
        <input id="email" type="email" class="form-control" placeholder="Email" name="email" value="" />
    </div>
    <div class="form-group">
        <label for="password">Password</label>
        <input id="password" type="password" class="form-control" placeholder="Password" name="password" value="" />
    </div>
    <div class="form-group">
        <label for="repeatPassword">Repeat Password</label>
        <input id="repeatPassword" type="password" class="form-control" placeholder="Repeat-Password"
            name="repeatPassword" value="" />
    </div>
    <button type="submit" class="btn btn-primary">Register</button>`;
    return form;
}


export {
    loadRegister,
    onRegisterFormClick,

}