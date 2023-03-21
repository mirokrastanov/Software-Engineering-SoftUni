
import { html, render } from '../node_modules/lit-html/lit-html.js';
import { styleMap } from '../node_modules/lit-html/directives/style-map.js';
import { towns } from './towns.js';

function search() {
   const input = document.querySelector('#searchText');
   const resultDiv = document.querySelector('#result');
   const searchBtn = document.querySelector('button');
   const townsDiv = document.querySelector('#towns');
   const ulTemplate = () => html`
      <ul>
         ${towns.map(x => html`<li>${x}</li>`)}
      </ul>
   `;
   update();

   searchBtn.addEventListener('click', onSearch);

   function onSearch(e) {
      e.preventDefault();
      let inputValue = input.value.trim();
      if (inputValue != '') {
         towns.forEach((x, i) => {
            if (x.includes(inputValue)) {
               document.querySelector(`li:nth-of-type(${i + 1})`)
                  .classList.add('active');
            } else {
               document.querySelector(`li:nth-of-type(${i + 1})`)
                  .classList.remove('active');
            }
         });
         let matches = towns.filter(x => x.includes(inputValue));
         resultDiv.textContent = `${matches.length} matches found`;
      }
   }

   function update() {
      render(ulTemplate(), townsDiv);
   }
}
search();