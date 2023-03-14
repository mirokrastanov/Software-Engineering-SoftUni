import { elements } from "./app.js";
import { hideSections } from "./home.js";


function loadLogin() {
    hideSections();
    elements.login.style.display = 'block';
    
    // let newForm = createRegisterForm();
    // elements.register.replaceChildren(newForm);
    // newForm.addEventListener('submit', (e) => {
    //     onRegisterFormClick(e, newForm);

    // });

}


export {
    loadLogin,

}