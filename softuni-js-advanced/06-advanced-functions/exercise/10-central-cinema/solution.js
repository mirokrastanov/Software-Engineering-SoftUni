function solve() {
    let name = document.querySelector('#container input:nth-of-type(1)');
    let hall = document.querySelector('#container input:nth-of-type(2)');
    let price = document.querySelector('#container input:nth-of-type(3)');
    let onScreenBtn = document.querySelector('#container button');
    let movies = document.querySelector('#movies ul');
    let archive = document.querySelector('#archive ul');
    let clearBtn = document.querySelector('#archive button');

    onScreenBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if (!name.value || !hall.value || !price.value || isNaN(price.value)) {
            return;
        }
        let li = document.createElement('li');
        let span = document.createElement('span');
        span.textContent = name.value;
        li.appendChild(span);
        let strong = document.createElement('strong');
        strong.textContent = `Hall: ${hall.value}`;
        li.appendChild(strong);
        let div = document.createElement('div');
        let strong2 = strong.cloneNode();
        strong2.textContent = Number(price.value).toFixed(2);
        div.appendChild(strong2);
        let inputF = document.createElement('input');
        inputF.setAttribute('placeholder', 'Tickets Sold');
        div.appendChild(inputF);
        let archBtn = document.createElement('button');
        archBtn.textContent = 'Archive';
        div.appendChild(archBtn);
        li.appendChild(div);
        movies.appendChild(li);
        name.value = '';
        hall.value = '';
        price.value = '';

        archBtn.addEventListener('click', (e) => {
            let innerLi = e.target.parentElement.parentElement;
            let innerDiv = e.target.parentElement;
            let inputElement = innerDiv.querySelector('input');
            if (!inputElement.value || isNaN(inputElement.value)) {
                return;
            }
            let archLi = document.createElement('li');
            let archSpan = document.createElement('span');
            let archBtn = document.createElement('button');
            archBtn.textContent = 'Delete';
            archSpan.textContent = innerLi.querySelector('span').textContent;
            archLi.appendChild(archSpan);
            let archStrong = document.createElement('strong');
            let tickets = innerDiv.querySelector('strong');
            let total = Number(tickets.textContent) * Number(inputElement.value);
            archStrong.textContent = `Total amount: ${total.toFixed(2)}`;
            archLi.appendChild(archStrong);
            archLi.appendChild(archBtn);
            archive.appendChild(archLi);
            movies.removeChild(innerLi);

            archBtn.addEventListener('click', (e) => {
                let entryParent = e.target.parentElement;
                archive.removeChild(entryParent);
            });
        });
    });

    clearBtn.addEventListener('click', (e) => {
        archive.innerHTML = '';
    });
}