import { elements } from "./app.js";
import { hideSections, loadHome } from "./home.js";
import { request } from "./util.js";

function loadAddMovie() {
    hideSections();
    elements.addMovie.style.display = 'block';
    let newForm = elements.addMovie.querySelector('form');
    newForm.reset();
    newForm.addEventListener('submit', (e) => {
        onSubmitMovie(e, newForm);
    });
}


async function onSubmitMovie(e, form) {
    e.preventDefault();
    let formData = new FormData(form);
    let inputs = Object.fromEntries(formData.entries());
    let userData = JSON.parse(localStorage.getItem('userData'));
    // console.log(userData);
    // console.log(inputs);
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
                'X-Authorization': userData.accessToken,
            },
            body: JSON.stringify(inputs),
        };
        let url = elements.moviesURL;
        let data = await request(url, options);
        if (typeof data != 'object') {
            let error = { message: data };
            throw error;
        }
        // console.log(data);
        form.reset();
        loadHome();
    } catch (error) {
        console.log(error.message);
    }
}



export {
    loadAddMovie,
    onSubmitMovie,

}