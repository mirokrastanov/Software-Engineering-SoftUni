function solve() {
  let inputElement = document.querySelector('#input');
  let outputElement = document.querySelector('#output');
  
  let pattern = new RegExp(/(?<sen>[^.]*[\.])/, 'gm');
  let matches = inputElement.value.matchAll(pattern);
  let paragraphs = [];

  Array.from(matches).forEach(element => {
    paragraphs.push(element.groups.sen);
  });

  let counter = 0;
  let line = [];

  outputElement.innerHTML = ''; // clear previous output to prep for current session
  for (let i = 0; i < paragraphs.length; i++) {
    let element = paragraphs[i];
    if (counter < 3) {
      line.push(element);
      counter++;
    } 
    if (counter == 3 || i == paragraphs.length - 1) {
      outputElement.innerHTML += (`<p>${line.join(' ')}</p>`);
      line = [];
      counter = 0;
    }
  }
  inputElement.value = ''; // clear current input to prep for new session

}