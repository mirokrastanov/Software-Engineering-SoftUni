async function solution() {
    let mainElement = document.querySelector('#main');
    let titles = await requestTitles();
    buildTitles();
    let allBtns = document.querySelectorAll('.button');
    allBtns.forEach(btn => btn.addEventListener('click', async function (e) {
        let parent = e.target.parentElement.parentElement;
        let btnText = e.target.textContent;
        let extra = parent.querySelector('.extra');
        let contentElement = extra.querySelector('p');;
        let id = e.target.getAttribute('id');
        let content = await requestContent(id);
        if (btnText == 'More') {
            extra.style.display = 'block';
            contentElement.textContent = content.content;
            e.target.textContent = 'Less';
        } else {
            extra.style.display = 'none';
            e.target.textContent = 'More';
        }
    }));

    async function requestTitles() {
        let url = 'http://localhost:3030/jsonstore/advanced/articles/list';
        let res = await fetch(url);
        let data = await res.json();
        return data;
    }
    async function requestContent(id) {
        let url = `http://localhost:3030/jsonstore/advanced/articles/details/${id}`;
        let res = await fetch(url);
        let data = await res.json();
        return data;
    }
    function buildTitles() {
        for (const el of Object.entries(titles)) {
            let title = el[1].title;
            let id = el[1]._id;
            let divElement = document.createElement('div');
            divElement.innerHTML = `<div class="accordion">
            <div class="head">
            <span>${title}</span>
            <button class="button" id="${id}">More</button>
            </div>
            <div class="extra">
            <p>Scalable Vector Graphics .....</p>
            </div>
            </div>`;
            mainElement.appendChild(divElement);
        }
    }
}

solution();