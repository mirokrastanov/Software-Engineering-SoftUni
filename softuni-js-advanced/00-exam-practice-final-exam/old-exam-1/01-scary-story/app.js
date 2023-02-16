window.addEventListener("load", solve);

function solve() {
  let publishBtn = document.querySelector('#form-btn');
  publishBtn.addEventListener('click', (e) => {
    let genre = document.querySelector('#genre');
    let input = {
      firstN: document.querySelector('#first-name'),
      lastN: document.querySelector('#last-name'),
      age: document.querySelector('#age'),
      title: document.querySelector('#story-title'),
      story: document.querySelector('#story'),
    };
    let validInputs = [];
    Object.values(input).forEach(el => {
      validInputs.push(hasContent(el.value));
    });
    if (!validInputs.includes(false)) {
      let ul = document.querySelector('#preview-list');
      let li = createTag('li');
      let article = createTag('article');
      let h4 = createTag('h4');
      let p1 = createTag('p');
      let saveBtn = createTag('button');
      saveBtn.classList.add('save-btn');
      saveBtn.textContent = 'Save Story';
      let editBtn = createTag('button');
      editBtn.classList.add('edit-btn');
      editBtn.textContent = 'Edit Story';
      let delBtn = createTag('button');
      delBtn.classList.add('delete-btn');
      delBtn.textContent = 'Delete Story';
      h4.textContent = `Name: ${input.firstN.value} ${input.lastN.value}`;
      p1.textContent = `Age ${input.age.value}`;
      let p2 = createTag('p');
      p2.textContent = `Title: ${input.title.value}`;
      let p3 = createTag('p');
      p3.textContent = `Genre: ${genre.value}`;
      let p4 = createTag('p');
      p4.textContent = `${input.story.value}`;
      li.classList.add('story-info');
      article.appendChild(h4);
      article.appendChild(p1);
      article.appendChild(p2);
      article.appendChild(p3);
      article.appendChild(p4);
      li.appendChild(article);
      li.appendChild(saveBtn);
      li.appendChild(editBtn);
      li.appendChild(delBtn);
      ul.appendChild(li);
      let values = [];
      Object.values(input).forEach(el => values.push(el.value));
      Object.values(input).forEach(el => el.value = '');
      genre.selectedIndex = 0;
      publishBtn.setAttribute('disabled', '');

      // button listeners
      saveBtn.addEventListener('click', (e) => {
        let main = document.querySelector('#main');
        main.innerHTML = `<h1>Your scary story is saved!</h1>`;
      });
      editBtn.addEventListener('click', (e) => {
        let current = e.target.parentElement;
        current.parentElement.removeChild(current);
        publishBtn.removeAttribute('disabled');
        Object.values(input).forEach(el => el.value = values.shift());
      });
      delBtn.addEventListener('click', (e) => {
        let current = e.target.parentElement;
        current.parentElement.removeChild(current);
        publishBtn.removeAttribute('disabled');
        Object.values(input).forEach(el => el.value = '');
      });
    }
  });
  function hasContent(value) {
    return value && value != '' ? true : false;
  }
  function createTag(tagName) {
    return document.createElement(tagName);
  }
}