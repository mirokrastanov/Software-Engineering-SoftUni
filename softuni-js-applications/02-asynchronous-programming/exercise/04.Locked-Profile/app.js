async function lockedProfile() {
    let container = document.querySelector('#main');

    async function createProfiles() {
        // let url = 'http://localhost:3030/jsonstore/advanced/profiles';
        // let response = await fetch(url);
        // let data = await response.json();
        let data = {
            profile: [
                {
                    _id: '1001',
                    username: 'John',
                    email: 'john@users.bg',
                    age: 31,
                },
            ],
        };
        let counter = 0;
        Object.entries(data).forEach(acc => {
            // console.log(acc[1]);
            if (!acc[1].username) {
                acc[1] = acc[1][0];
            }
            counter++;
            let elProfile = create('div', null, { 'class': 'profile' });
            let elImg = create('img', null, { 'src': './iconProfile2.png', 'class': 'userIcon' });
            let label1 = create('label', 'Lock');
            let input1 = create('input', null, { 'type': 'radio', 'name': `user${counter}Locked`, 'value': 'lock', 'checked': '' });
            let label2 = create('label', 'Unlock');
            let input2 = create('input', null, { 'type': 'radio', 'name': `user${counter}Locked`, 'value': 'unlock' });
            let br1 = create('br');
            let hr1 = create('hr');
            let label3 = create('label', 'Username');
            let input3 = create('input', null, { 'type': 'text', 'name': `user${counter}Locked`, 'value': acc[1].username, 'disabled': '', 'readonly': '' });
            let hiddenFields = create('div', null, { 'id': `user${counter}HiddenFields` });
            let hr2 = create('hr');
            let label4 = create('label', 'Email:');
            let input4 = create('input', null, { 'type': 'email', 'name': `user${counter}Email`, 'value': acc[1].email, 'disabled': '', 'readonly': '' });
            let label5 = create('label', 'Age:');
            let input5 = create('input', null, { 'type': 'text', 'name': `user${counter}Age`, 'value': acc[1].age, 'disabled': '', 'readonly': '' });
            let showMoreBtn = create('button', 'Show more');
            let hiddenContents = [hr2, label4, input4, label5, input5];
            hiddenContents.forEach(x => hiddenFields.appendChild(x));
            // hiddenFields.style.display = 'none';
            let contents = [elImg, label1, input1, label2, input2, br1, hr1, label3, input3, hiddenFields, showMoreBtn];
            contents.forEach(x => elProfile.appendChild(x));
            container.appendChild(elProfile);
        });
    }
    container.innerHTML = '';
    await createProfiles();

    let allButtons = document.querySelectorAll('#main .profile button');
    // console.log(allButtons);

    allButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            let profile = e.target.parentElement;
            let num = profile
            .querySelector('input[type="radio"]')
            .getAttribute('name')
            .substring(4, 5);
            toggle(num);
        });
    });

    function toggle(userNumber) {
        let btn = document.querySelector(`.profile:nth-of-type(${userNumber}) button`);
        let radio = document.querySelector(`input[name="user${userNumber}Locked"]`);
        let radioTwo = document.querySelector(`input[name="user${userNumber}Locked"][value="unlock"]`);
        let content = document.querySelector(`#user${userNumber}HiddenFields`);
        if (!radio.checked) {
            radio.removeAttribute('checked');
            radioTwo.setAttribute('checked', "");
            if (btn.textContent == 'Show more') {
                content.style.display = 'block';
                btn.textContent = 'Hide it';
            } else {
                content.style.display = 'none';
                btn.textContent = 'Show more';
            }
        } else {
            radio.setAttribute('checked', "");
            radioTwo.removeAttribute('checked');
        }
    }
    function create(tag, content, properties = {}) {
        let el = document.createElement(tag);
        if (content) {
            el.innerHTML = content;
        }
        if (properties) {
            Object.entries(properties).forEach(x => {
                el.setAttribute(x[0], x[1]);
            });
        }
        return el;
    }
}