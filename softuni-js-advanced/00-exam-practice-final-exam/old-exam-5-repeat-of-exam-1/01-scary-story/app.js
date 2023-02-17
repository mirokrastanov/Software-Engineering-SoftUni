window.addEventListener("load", solve);

function solve() {
  let input = {
    fName: '#first-name', lname: '#last-name', age: '#age',
    title: '#story-title', genre: '#genre', story: '#story'
  };
  let publishBtn = target('#form-btn');
  let ul = target('#preview-list');

  publishBtn.addEventListener('click', (e) => {
    let validInputs = [];
    let inputValues = [];
    Object.values(input).forEach(x => {
      validInputs.push(Boolean(target(x).value));
      inputValues.push(target(x).value);
    });
    if (validInputs.filter(x => x == false).length != 0) return; // if empty fields -> DO NOTHING
    Object.values(input).forEach(x => { target(x).value = '' });  // clear input fields
    let li = create('li');
    li.classList.add('story-info');
    let article = create('article');
    let nameTag = create('h4');
    nameTag.textContent = `Name: ${inputValues[0]} ${inputValues[1]}`;
    let ageTag = create('p');
    ageTag.textContent = `Age: ${inputValues[2]}`;
    let titleTag = create('p');
    titleTag.textContent = `Title: ${inputValues[3]}`;
    let genreTag = create('p');
    genreTag.textContent = `Genre: ${inputValues[4]}`;
    let storyTag = create('p');
    storyTag.textContent = `${inputValues[5]}`;
    let saveBtn = create('button');
    saveBtn.classList.add('save-btn');
    saveBtn.textContent = 'Save Story';
    let editBtn = create('button');
    editBtn.classList.add('edit-btn');
    editBtn.textContent = 'Edit Story';
    let deleteBtn = create('button');
    deleteBtn.classList.add('delete-btn');
    deleteBtn.textContent = 'Delete Story';
    article.appendChild(nameTag);
    article.appendChild(ageTag);
    article.appendChild(titleTag);
    article.appendChild(genreTag);
    article.appendChild(storyTag);
    li.appendChild(article);
    li.appendChild(saveBtn);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);
    ul.appendChild(li);
    publishBtn.disabled = true;

    saveBtn.addEventListener('click', (e) => {
      let main = target('#main');
      main.innerHTML = '';
      let finalTag = create('h1');
      finalTag.textContent = 'Your scary story is saved!';
      main.appendChild(finalTag);
    });
    editBtn.addEventListener('click', (e) => {
      Object.values(input).forEach((x, i) => { target(x).value = inputValues[i] }); // reload inputs
      li.parentElement.removeChild(li);
      publishBtn.disabled = false;
    });
    deleteBtn.addEventListener('click', (e) => {
      li.parentElement.removeChild(li);
      publishBtn.disabled = false;
    });
  });
  function target(selector) {
    return document.querySelector(selector);
  }
  function create(tag) {
    return document.createElement(tag);
  }
}