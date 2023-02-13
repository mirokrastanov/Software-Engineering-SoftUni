function validate() {
    let btn = document.querySelector('#submit');
    let username = document.querySelector('#username');
    let emailEl = document.querySelector('#email');
    let passEl = document.querySelector('#password');
    let confEl = document.querySelector('#confirm-password');
    let company = document.querySelector('#company');
    let usernamePattern = new RegExp(/[^a-zA-Z0-9]/, 'g');
    let passwordPattern = new RegExp(/[^\_a-zA-Z0-9]/, 'g');
    let emailPattern = new RegExp(/[@]+[\w\s\d\W\S\D]*[.]+[\w\s\d\W\S\D]*/, 'g');
    let companyInfo = document.querySelector('#companyInfo');
    let valid = document.querySelector('#valid');
    let compNumber = document.querySelector('#companyNumber');
    let [userValid, passValid, emailValid] = [true, true, true];
    let tempEmail;

    btn.addEventListener('click', (e) => {
        e.preventDefault();
        if (username.value.length < 3 || username.value.length > 20 || usernamePattern.test(username.value)) {
            username.style.borderColor = 'red';
            userValid = false;
        } else {
            username.style.border = 'none';
            userValid = true;
        } 
        let password = passEl.value;
        let confPass = confEl.value;
        // console.log(password, confPass, password != confPass, passwordPattern.test(password));
        if (password.length < 5 || password.length > 15 || passwordPattern.test(password) || password != confPass) {
            passEl.style.borderColor = 'red';
            confEl.style.borderColor = 'red';
            passValid = false;
        } else {
            passEl.style.border = 'none';
            confEl.style.border = 'none';
            passValid = true;
        }
        let email = emailEl.value;
        if (!emailPattern.test(email)) {
            console.log('vutre sum');
            emailEl.style.borderColor = 'red';
            emailValid = false;
        } else {
            emailEl.style.border = 'none';
            emailValid = true;
            tempEmail = email;
        }
        console.log(userValid, passValid, emailValid, email);
        if (userValid && passValid && emailValid) {
            if (company.checked) {
                companyInfo.style.display = 'block';
                if (compNumber.value < 1000 && compNumber.value > 9999) {
                    compNumber.style.borderColor = 'red';
                    valid.style.display = 'none';
                } else {
                    compNumber.style.border = 'none';
                    valid.style.display = 'block';
                }
            } else {
                companyInfo.style.display = 'none';
                valid.style.display = 'block';
            }
        } else {
            valid.style.display = 'none';
        }

    });

    compNumber.addEventListener('change', () => {
        if (compNumber.value < 1000 && compNumber.valid > 9999) {
            compNumber.style.borderColor = 'red';
        } else {
            compNumber.style.border = 'none';
        }
    });

}
module.exports = validate;