class EmployeeCard {
    #parent = null;
    #el = null;
    constructor(parentSelector, firstName, lastName, title) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.title = title;

        this.#el = document.createElement('div');
        this.#parent = document.querySelector(parentSelector);

        this.#parent.appendChild(this.#el);

        this.#init();
        this.render();
    }

    #init() {
        this.#el.addEventListener('click', (e) => {
            let current = e.currentTarget;
            if (current.style.border == 'none') {
                current.style.border = '2px solid blue';
            } else {
                current.style.border = 'none';
            }
        });
    }
    getContent() {
        return `
        <div class="card">
            <img src="./img_avatar.jpg" alt="img-avatar" style="width:100%">
            <div class="container">
                <h4><b>${this.firstName} ${this.lastName}</b></h4>
                <p>${this.title}</p>
            </div>
        </div>
        `;
    }
    render() {
        // TODO - validate input data (clear html tags, etc, to prevent XSS attakcs)
        this.#el.innerHTML = this.getContent();
    }
}