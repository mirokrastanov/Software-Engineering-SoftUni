window.addEventListener('load', solve);

function solve() {
    let input = {
        fname: '#first-name', lname: '#last-name', dateIN: '#date-in',
        dateOUT: '#date-out', guests: '#people-count'
    };
    let nextBtn = target('#next-btn');
    let ulInfo = target('.info-list');
    let ulConfirm = target('.confirm-list');
    let verification = target('#verification');
    nextBtn.addEventListener('click', (e) => {
        e.preventDefault();
        let validInputs = [];
        let inputValues = [];
        Object.values(input).forEach(x => {
            validInputs.push(Boolean(target(x).value));
            inputValues.push(target(x).value);
        });
        if (validInputs.filter(x => x == false).length != 0) return; // if empty fields -> DO NOTHING
        if (new Date(inputValues[2]) >= new Date(inputValues[3])) return; // date comp
        Object.values(input).forEach(x => { target(x).value = '' });  // clear input fields
        let li = create('li');
        li.classList.add('reservation-content');
        let article = create('article');
        let name = create('h3');
        name.textContent = `Name: ${inputValues[0]} ${inputValues[1]}`;
        let fromDate = create('p');
        fromDate.textContent = `From date: ${inputValues[2]}`;
        let toDate = create('p');
        toDate.textContent = `To date: ${inputValues[3]}`;
        let people = create('p');
        people.textContent = `For ${inputValues[4]} people`;
        article.appendChild(name);
        article.appendChild(fromDate);
        article.appendChild(toDate);
        article.appendChild(people);
        li.appendChild(article);
        let editBtn = create('button');
        editBtn.textContent = 'Edit';
        editBtn.classList.add('edit-btn');
        let continueBtn = create('button');
        continueBtn.textContent = 'Continue';
        continueBtn.classList.add('continue-btn');
        li.appendChild(editBtn);
        li.appendChild(continueBtn);
        ulInfo.appendChild(li);
        nextBtn.disabled = true;

        editBtn.addEventListener('click', (e) => {
            Object.values(input).forEach((x, i) => { target(x).value = inputValues[i] }); // return values to input fields
            ulInfo.removeChild(li);
            nextBtn.disabled = false;
        });
        continueBtn.addEventListener('click', (e) => {
            ulConfirm.appendChild(li);
            li.removeChild(editBtn);
            li.removeChild(continueBtn);
            let confirmBtn = create('button');
            confirmBtn.textContent = 'Confirm';
            confirmBtn.classList.add('confirm-btn');
            let cancelBtn = create('button');
            cancelBtn.textContent = 'Cancel';
            cancelBtn.classList.add('cancel-btn');
            li.appendChild(confirmBtn);
            li.appendChild(cancelBtn);

            confirmBtn.addEventListener('click', (e) => {
                ulConfirm.removeChild(li);
                verification.classList.add('reservation-confirmed');
                verification.textContent = 'Confirmed.';
                nextBtn.disabled = false;
            });
            cancelBtn.addEventListener('click', (e) => {
                ulConfirm.removeChild(li);
                verification.classList.add('reservation-cancelled');
                verification.textContent = 'Cancelled.';
                nextBtn.disabled = false;
            });

        });
    });
    function target(selector) {
        return document.querySelector(selector);
    }
    function create(tag) {
        return document.createElement(tag);
    }
}