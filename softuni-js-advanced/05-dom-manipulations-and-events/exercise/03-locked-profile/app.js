function lockedProfile() {
    let userOneBtn = document.querySelector('.profile:nth-of-type(1) button');
    let userTwoBtn = document.querySelector('.profile:nth-of-type(2) button');
    let userThreeBtn = document.querySelector('.profile:nth-of-type(3) button');

    userOneBtn.addEventListener('click', (e) => {
        toggle(1);
    });
    userTwoBtn.addEventListener('click', (e) => {
        toggle(2);
    });
    userThreeBtn.addEventListener('click', (e) => {
        toggle(3);
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
}