function validate() {
    let btn = document.querySelector('#submit');
    btn.type = 'button';
    let userEl = document.querySelector('#username');
    let emailEl = document.querySelector('#email');
    let passEl = document.querySelector('#password');
    let confEl = document.querySelector('#confirm-password');
    let company = document.querySelector('#company');
    let companyInfo = document.querySelector('#companyInfo');
    let valid = document.querySelector('#valid');
    let compNumber = document.querySelector('#companyNumber');
    let usernamePattern = new RegExp(/[^a-zA-Z0-9]/, 'g');
    let passwordPattern = new RegExp(/[^\_a-zA-Z0-9]/, 'g');
    let emailPattern = new RegExp(/[@]+[\w\s\d\W\S\D]*[.]+[\w\s\d\W\S\D]*/, 'g');

    company.addEventListener('change', (e) => {
        console.log(e.target.checked);
        if (company.checked) companyInfo.style.display = 'block';
        else companyInfo.style.display = 'none';
    });

    btn.addEventListener('click', (e) => {
        // e.preventDefault();
        let isValid = []
        let [password, confPass, email, username] = [passEl.value, confEl.value, emailEl.value, userEl.value];
        if (username.length < 3 || username.length > 20 || usernamePattern.test(username)) {
            username.style.borderColor = 'red';
            isValid.push(false);
        } else {
            userEl.style.border = 'none';
            isValid.push(true);
        }
        if (password.length < 5 || password.length > 15 ||
            passwordPattern.test(password) || password != confPass) {
            passEl.style.borderColor = 'red';
            confEl.style.borderColor = 'red';
            isValid.push(false);
        } else {
            passEl.style.border = 'none';
            confEl.style.border = 'none';
            isValid.push(true);
        }
        if (!emailPattern.test(email)) {
            emailEl.style.borderColor = 'red';
            isValid.push(false);
        } else {
            emailEl.style.border = 'none';
            isValid.push(true);
        }
        if (company.checked) {
            if (compNumber.value < 1000 || compNumber.valid > 9999) {
                compNumber.style.borderColor = 'red';
                isValid.push(false);
            } else {
                compNumber.style.border = 'none';
                isValid.push(true);
            }
        }
        if (isValid.includes(false)) {
            valid.style.display = 'none';
        } else {
            valid.style.display = 'block';
        }
    });
}