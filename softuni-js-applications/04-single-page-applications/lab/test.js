function main() {
    const fragment = document.createDocumentFragment();
    let ul = document.createElement('ul');
    let counter = 2;
    while (counter > 0) {
        counter--;
        let inner = 3;
        let li = document.createElement('li');
        li.textContent = `Test List item ${5 - counter}`;
        while (inner > 0) {
            inner -= (Math.ceil(Math.random() * 3));
            let p = document.createElement('p');
            p.textContent = `00${Math.floor(Math.random() * 10)}0` + (5 - counter + Math.floor(Math.random() * 100));
            li.appendChild(p);
        }
        ul.appendChild(li);
    }
    fragment.appendChild(ul);
    Array.from(fragment.children).forEach(x => console.log(x));
    document.body.appendChild(fragment);
    console.log('------after-----');
    Array.from(fragment.children).forEach(x => console.log(x));
    // fragment.appendChild(ul.cloneNode(true));
    // console.log('------after2-----');
    // Array.from(fragment.children).forEach(x => console.log(x));
    // let div = document.querySelector('div');
    // div.appendChild(fragment);
    // console.log('------after3-----');
    // Array.from(fragment.children).forEach(x => console.log(x));
}

main();