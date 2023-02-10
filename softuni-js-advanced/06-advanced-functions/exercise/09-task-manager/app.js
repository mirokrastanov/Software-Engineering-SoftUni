function solve() {
    let task = document.querySelector('#task');
    let desc = document.querySelector('#description');
    let date = document.querySelector('#date');
    let addBtn = document.querySelector('#add');
    let open = document
        .querySelector('section div h1.orange')
        .parentElement.parentElement
        .querySelector('div:nth-of-type(2)');
    let inProg = document.querySelector('#in-progress');
    let complete = document.querySelector('section div h1.green')
        .parentElement.parentElement
        .querySelector('div:nth-of-type(2)');

    addBtn.addEventListener('click', main);

    function main(e) {
        e.preventDefault();
        if (!task.value || !desc.value || !date.value) {
            return;
        }
        let article = document.createElement('article');
        let h3 = document.createElement('h3');
        h3.textContent = task.value;
        let p1 = document.createElement('p');
        p1.textContent = `Description: ${desc.value}`;
        let p2 = document.createElement('p');
        p2.textContent = `Due Date: ${date.value}`;
        let div = document.createElement('div');
        div.classList.add('flex');

        let startBtn = document.createElement('button');
        startBtn.textContent = 'Start';
        startBtn.classList.add('green');
        div.appendChild(startBtn);

        let deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.add('red');
        div.appendChild(deleteBtn);

        article.appendChild(h3);
        article.appendChild(p1);
        article.appendChild(p2);
        article.appendChild(div);
        open.appendChild(article);
        
        let finishBtn = document.createElement('button');
        finishBtn.textContent = 'Finish';
        finishBtn.classList.add('orange');

        startBtn.addEventListener('click', (e) => {
            let thisParent = e.target.parentElement;
            thisParent.removeChild(thisParent.querySelector('.green'));
            thisParent.appendChild(finishBtn);
            inProg.appendChild(thisParent.parentElement);
        });

        deleteBtn.addEventListener('click', (e) => {
            let thisParent = e.target.parentElement.parentElement;
            thisParent.parentElement.removeChild(thisParent);
        });

        finishBtn.addEventListener('click', (e) => {
            let thisParent = e.target.parentElement.parentElement;
            thisParent.removeChild(thisParent.querySelector('div.flex'));
            complete.appendChild(thisParent);
        });
    }
}