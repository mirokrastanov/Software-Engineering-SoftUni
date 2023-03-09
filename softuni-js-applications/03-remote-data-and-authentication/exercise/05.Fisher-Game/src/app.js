function main() {
    const logOutBtn = document.querySelector('#user');
    const homeBtn = document.querySelector('#home');
    const logInBtn = document.querySelector('#login');
    const regBtn = document.querySelector('#register');
    const addBtn = document.querySelector('aside fieldset button.add');
    const loadBtn = document.querySelector('aside button.load');
    const formElement = document.querySelector('aside #addForm');
    const catchesURL = 'http://localhost:3030/data/catches';
    const catchesSection = document.querySelector('#main #catches');
    catchesSection.replaceChildren();
    // loadCatches();
    regBtn.classList.remove('active');
    logOutBtn.classList.remove('active');
    homeBtn.classList.add('active');
    logInBtn.classList.remove('active');
    let userData = JSON.parse(localStorage.getItem('userData'));
    let helloUser = document.querySelector('nav p.email span');
    if (userData) {
        regBtn.style.display = 'none';
        logInBtn.style.display = 'none';
        helloUser.textContent = userData.email;
        addBtn.disabled = false;
    } else {
        logOutBtn.style.display = 'none';
    }
    logOutBtn.addEventListener('click', async (e) => {
        let res = await fetch('http://localhost:3030/users/logout', {
            headers: {
                'X-Authorization': userData.token,
            },
        });
        localStorage.clear();
        logOutBtn.style.display = 'none';
        regBtn.style.display = 'unset';
        logInBtn.style.display = 'unset';
        helloUser.textContent = 'guest';
        addBtn.disabled = true;
    });
    formElement.addEventListener('submit', async (e) => {
        e.preventDefault();
        if (!userData) {
            window.location = './login.html';
            return;
        }
        let inputs = Object.fromEntries(new FormData(e.target));
        try {
            if (Object.values(inputs).some(x => x == '')) {
                throw new Error('All fields are required');
            }
            let res = await fetch(catchesURL, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                    'X-Authorization': userData.token,
                },
                body: JSON.stringify(inputs),
            })
            if (!res.ok) {
                let error = await res.json();
                throw new Error(error.message);
            }
            e.target.reset();
            loadCatches();
        } catch (error) {
            console.log(error.message);
        }
    });
    loadBtn.addEventListener('click', loadCatches);

    catchesSection.addEventListener('click', async (e) => {
        let currentEl = e.target.parentElement;
        let id = e.target.getAttribute('data-id');
        let delURL = `${catchesURL}/${id}`;
        if (e.target.textContent == 'Delete') {
            try {
                let res = await fetch(delURL, {
                    method: 'DELETE',
                    headers: {
                        'Content-type': 'application/json',
                        'X-Authorization': userData.token,
                    },
                });
                if (!res.ok) {
                    let error = res.json();
                    throw new Error(error.message);
                }
                loadCatches();
            } catch (error) {
                console.log(error.message);
            }
        } else if (e.target.textContent == 'Update') {
            let [angler, weight, species, location, bait,
                captureTime] = currentEl.querySelectorAll('input');
            let updatedObj = {
                angler: angler.value, weight: +weight.value,
                species: species.value, location: location.value,
                bait: bait.value, captureTime: +captureTime.value,
            };
            try {
                if (Object.values(updatedObj).some(x => x == '')) {
                    throw new Error('All fields are required');
                }
                let res = await fetch(delURL, {
                    method: 'PUT',
                    headers: {
                        'Content-type': 'application/json',
                        'X-Authorization': userData.token,
                    },
                    body: JSON.stringify(updatedObj),
                });
                if (!res.ok) {
                    let error = res.json();
                    throw new Error(error.message);
                }
                loadCatches();
            } catch (error) {
                console.log(error.message);
            }
        }

    });



    function createCatch(obj, id) {
        let isDisabled = (userData && obj._ownerId == userData.id) ? '' : 'disabled';
        let { angler, weight, species, location, bait, captureTime } = obj;
        let catchEl = document.createElement('div');
        catchEl.classList.add('catch');
        catchEl.innerHTML = `
            <label>Angler</label>
            <input type="text" class="angler" value="${angler}" ${isDisabled}>
            <label>Weight</label>
            <input type="text" class="weight" value="${weight}" ${isDisabled}>
            <label>Species</label>
            <input type="text" class="species" value="${species}" ${isDisabled}>
            <label>Location</label>
            <input type="text" class="location" value="${location}" ${isDisabled}>
            <label>Bait</label>
            <input type="text" class="bait" value="${bait}" ${isDisabled}>
            <label>Capture Time</label>
            <input type="number" class="captureTime" value="${captureTime}" ${isDisabled}>
            <button class="update" data-id="${id}" ${isDisabled}>Update</button>
            <button class="delete" data-id="${id}" ${isDisabled}>Delete</button>
            `;
        return catchEl;
    }
    async function loadCatches() {
        let res = await fetch(catchesURL);
        let data = await res.json();
        catchesSection.replaceChildren();
        Object.values(data).forEach(x => {
            let newCatch = createCatch(x, x._id);
            catchesSection.appendChild(newCatch);
        });
    }
}

main();