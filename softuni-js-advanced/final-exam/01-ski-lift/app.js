window.addEventListener('load', solve);

function solve() {
    let input = {
        fname: '#first-name', lname: '#last-name', people: '#people-count',
        from: '#from-date', days: '#days-count'
    };
    let nextStepsBtn = target('#next-btn');
    let ulPreview = target('.ticket-info-list');
    let confirmTicket = target('.confirm-ticket');
    nextStepsBtn.addEventListener('click', (e) => {
        e.preventDefault();
        let validInputs = [];
        let inputValues = [];
        Object.values(input).forEach(x => {
            validInputs.push(Boolean(target(x).value));
            inputValues.push(target(x).value);
        });
        if (validInputs.filter(x => x == false).length != 0) return; // if empty fields -> DO NOTHING
        Object.values(input).forEach(x => { target(x).value = '' });  // clear input fields
        let li = create('li');
        li.classList.add('ticket');
        let article = create('article');
        let nameTag = create('h3');
        nameTag.textContent = `Name: ${inputValues[0]} ${inputValues[1]}`;
        let fromTag = create('p');
        fromTag.textContent = `From date: ${inputValues[3]}`;
        let daysTag = create('p');
        daysTag.textContent = `For ${inputValues[4]} days`;
        let peopleTag = create('p');
        peopleTag.textContent = `For ${inputValues[2]} people`;
        article.appendChild(nameTag);
        article.appendChild(fromTag);
        article.appendChild(daysTag);
        article.appendChild(peopleTag);
        li.appendChild(article);
        let editBtn = create('button');
        editBtn.textContent = 'Edit';
        editBtn.classList.add('edit-btn');
        let continueBtn = create('button');
        continueBtn.textContent = 'Continue';
        continueBtn.classList.add('continue-btn');
        li.appendChild(editBtn);
        li.appendChild(continueBtn);
        ulPreview.appendChild(li);
        nextStepsBtn.disabled = true;

        // external button listeners
        editBtn.addEventListener('click', (e) => {
            Object.values(input).forEach((x, i) => { target(x).value = inputValues[i] }); // return values to input fields
            ulPreview.removeChild(li);
            nextStepsBtn.disabled = false;
        });
        continueBtn.addEventListener('click', (e) => {
            confirmTicket.appendChild(li);
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

            // internal button listeners
            confirmBtn.addEventListener('click', (e) => {
                let body = target('#body');
                let main = target('#main');
                body.removeChild(main);
                let finalText = create('h1');
                finalText.setAttribute('id', 'thank-you');
                finalText.textContent = 'Thank you, have a nice day!';
                let backBtn = create('button');
                backBtn.setAttribute('id', 'back-btn');
                backBtn.textContent = 'Back';
                body.appendChild(finalText);
                body.appendChild(backBtn);

                // last listener
                backBtn.addEventListener('click', (e) => {
                    location.reload();
                });
            });
            cancelBtn.addEventListener('click', (e) => {
                confirmTicket.removeChild(li);
                nextStepsBtn.disabled = false;
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