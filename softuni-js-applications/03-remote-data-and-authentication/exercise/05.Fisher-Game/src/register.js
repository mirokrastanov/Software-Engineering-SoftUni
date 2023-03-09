function main() {
    const logOutBtn = document.querySelector('#user');
    const homeBtn = document.querySelector('#home');
    const logInBtn = document.querySelector('#login');
    const regBtn = document.querySelector('#register');
    logOutBtn.style.display = 'none';
    regBtn.classList.add('active');
    logOutBtn.classList.remove('active');
    homeBtn.classList.remove('active');
    logInBtn.classList.remove('active');
    
    const formElement = document.querySelector('form#register');
    const url = 'http://localhost:3030/users/register';

    formElement.addEventListener('submit', async (e) => {
        e.preventDefault();
        let formData = new FormData(e.currentTarget);
        let { email, password, rePass } = Object.fromEntries(formData);
        try {
            if ([...formData.values()].some(x => x == '')) {
                throw new Error('Invalid inputs');
            } else if (password != rePass) {
                throw new Error('The passwords do not match');
            }
            let res = await fetch(url, {
                method: 'POST',
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify({ email, password, rePass }),
            });
            if (!res.ok) {
                let error = await res.json();
                throw new Error(error.message);
            }
            let data = await res.json();
            console.log(data);
            let user = {
                email: data.email,
                id: data._id,
                token: data.accessToken,
            };
            localStorage.setItem('userData', JSON.stringify(user));
            window.location = './index.html';
        } catch (error) {
            console.log(error.message);
            formElement.reset();
        }
    });



}

main();