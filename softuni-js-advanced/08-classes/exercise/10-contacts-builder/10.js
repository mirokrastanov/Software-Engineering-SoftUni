class Contact {
    #online;
    constructor(firstName, lastName, phone, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.email = email;
        this.online = false;
    }
    render(id) {
        // appends the contact to the element with ID = id
        let el = document.querySelector(`#${id}`);
        let article = document.createElement('article');
        let div = document.createElement('div');
        let div2 = div.cloneNode();
        let span = document.createElement('span');
        let span2 = span.cloneNode();
        let button = document.createElement('button');
        button.innerHTML = '&#8505;';
        span.innerHTML = `&phone; ${this.phone}`;
        span2.innerHTML = `&#9993; ${this.email}`;
        div.classList.add('title');
        div.textContent = `${this.firstName} ${this.lastName}`;
        div.appendChild(button);
        div2.classList.add('info');
        div2.style.display = 'none';
        div2.appendChild(span);
        div2.appendChild(span2);
        article.appendChild(div);
        article.appendChild(div2);
        el.appendChild(article);
        document.querySelector('article:nth-of-type(1) .info').style.display = 'none';
        // show and hide the info when the correcponding btn is clicked
        button.addEventListener('click', (e) => {
            div2.style.display = div2.style.display == 'none' ? 'block' : 'none';
        });
    }
    get online() {
        return this.#online;
    }
    set online(newValue) {
        if (typeof newValue == 'boolean') {
            this.#online = newValue;
            if (newValue) {
                // change online status, based on online property changes
                this.changeStatus();
            }
        }
    }
    changeStatus() {
        // console.log('changed', this.firstName);
        let articles = document.querySelectorAll('article .title');
        console.log(articles);
        for (let title of articles) {
            if (title.textContent.includes(this.firstName)) {
                title.classList.add('online');
            } else {
                title.classList.remove('online');
            }
            console.log(title.classList);
        }
    }
}

let contacts = [
    new Contact("Ivan", "Ivanov", "0888 123 456", "i.ivanov@gmail.com"),
    new Contact("Maria", "Petrova", "0899 987 654", "mar4eto@abv.bg"),
    new Contact("Jordan", "Kirov", "0988 456 789", "jordk@gmail.com")
];
contacts.forEach(c => c.render('main'));

// After 1 second, change the online status to true
setTimeout(() => contacts[1].online = true, 2000);

// let allBtn = document.querySelectorAll('.title button');
// allBtn.forEach((btn) => {
//     btn.addEventListener('click', (e) => {
//         console.log(e.target.parentElement);
//         let infoEl = e.target.parentElement.parentElement.querySelector('div.info');
//         if (infoEl.style.display == 'none') {
//             infoEl.style.display = 'block';
//         } else {
//             infoEl.style.display = 'none';
//         }
//     });
// });