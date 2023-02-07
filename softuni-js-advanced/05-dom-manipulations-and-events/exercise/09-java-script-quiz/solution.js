function solve() {
  let buttons = document.querySelectorAll('section p');
  let currentQ = 1;
  let rightAnswers = 0;

  for (const btn of buttons) {
    btn.addEventListener('click', (e) => {
      let section = document.querySelector(`#quizzie section:nth-of-type(${currentQ})`);
      let nextSection = document.querySelector(`#quizzie section:nth-of-type(${currentQ + 1})`);
      let answer = e.target.textContent;
      let qText = section.querySelector('h2').textContent;
      if (currentQ <= 3) {
        if (question(qText) == 1) {
          if (answer == 'onclick') {
            rightAnswers++;
          }
        } else if (question(qText) == 2) {
          if (answer == 'JSON.stringify()') {
            rightAnswers++;
          }
        } else if (question(qText) == 3) {
          if (answer == 'A programming API for HTML and XML documents') {
            rightAnswers++;
          }
        }
        section.classList.add('hidden');
        section.style.display = 'none';
        if (currentQ < 3) {
          nextSection.classList.remove('hidden');
          nextSection.style.display = 'block';
        }
      }
      if (currentQ == 3) {
        let results = document.querySelector('#results li h1');
        if (rightAnswers == 3) {
          results.textContent = 'You are recognized as top JavaScript fan!';
        } else {
          results.textContent = `You have ${rightAnswers} right answers`;
        }
        results.parentElement.parentElement.style.display = 'block';
        rightAnswers = 0;
      }
      currentQ++;
    });
  }

  function question(qText) {
    let temp = qText.split(':');
    let output = temp[0].split("");
    return output.pop();
  }
}
