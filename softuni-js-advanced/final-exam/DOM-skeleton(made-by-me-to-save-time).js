window.addEventListener("load", solve);

function solve() {
  let input = { title: '#post-title', category: '#post-category', content: '#post-content' };
  let publishBtn = target('#publish-btn');

  publishBtn.addEventListener('click', (e) => {
    let validInputs = [];
    let inputValues = [];
    Object.values(input).forEach(x => {
      validInputs.push(Boolean(target(x).value));
      inputValues.push(target(x).value);
    });
    if (validInputs.filter(x => x == false).length != 0) return; // if empty fields -> DO NOTHING
    Object.values(input).forEach(x => { target(x).value = '' });  // clear input fields
    
    // CREATE NEW ELEMENTS to append
    let editBtn = create('button');
    
    // internal button listeners
    editBtn.addEventListener('click', (e) => {
      Object.values(input).forEach((x, i) => { target(x).value = inputValues[i] }); // return values to input fields
      ul.removeChild(li); // remove whatever you created or move it somewhere else
    });
  });
  function target(selector) {
    return document.querySelector(selector);
  }
  function create(tag) {
    return document.createElement(tag);
  }
}
