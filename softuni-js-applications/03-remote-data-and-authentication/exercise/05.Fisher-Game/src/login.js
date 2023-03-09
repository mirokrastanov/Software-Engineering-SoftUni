function main() {
    const logOutBtn = document.querySelector('#user');
    const homeBtn = document.querySelector('#home');
    const logInBtn = document.querySelector('#login');
    const regBtn = document.querySelector('#register');
    logOutBtn.style.display = 'none';
    regBtn.classList.remove('active');
    logOutBtn.classList.remove('active');
    homeBtn.classList.remove('active');
    logInBtn.classList.add('active');

    const formElement = document.querySelector('form#login');
    formElement.addEventListener('submit', async (e) => {
        e.preventDefault();
        let formData = new FormData(formElement);
        let { email, password } = Object.fromEntries(formData);
        let url = 'http://localhost:3030/users/login';

        try {
            if ([...formData.values()].some(x => x == '')) {
                throw new Error('Invalid inputs');
            }
            let res = await fetch(url, {
                method: 'POST',
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify({ email, password }),
            })
            if (!res.ok) {
                let error = await res.json();
                throw new Error(error.message);
            }
            let data = await res.json();
            let userData = {
                email: data.email,
                id: data._id,
                token: data.accessToken,
            };
            localStorage.setItem('userData', JSON.stringify(userData));
            window.location = './index.html';
        } catch (error) {
            console.log(error.message);
            formElement.reset();
        }
    });
}

main();