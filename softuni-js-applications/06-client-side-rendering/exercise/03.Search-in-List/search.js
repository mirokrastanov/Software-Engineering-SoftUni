import { html, render } from '../node_modules/lit-html/lit-html.js';
import { styleMap } from '../node_modules/lit-html/directives/style-map.js';
import { towns } from './towns.js';

const body = document.querySelector('body');
const articleTemplate = (towns, match) => html`
<article>
   <div id="towns">
      <ul>
         ${towns.map(town => 
            html`<li class=${match && town.includes(match) ? 'active' : ''}>${town}</li>`
         )};
      </ul>
   </div>
   <input type="text" id="searchText" />
   <button @click=${onSearch}>Search</button>
   <div id="result"></div>
</article>
`;

function update(match = '') {
   render(articleTemplate(towns, match), body);
}
update();

function onSearch(e) {
   e.preventDefault();
   let match = document.querySelector('#searchText').value;
   update(match);
   document.querySelector('#result').textContent = `${countMatches(match)} matches found`;
}

function countMatches(match) {
   if (match == '') return 0;
   return towns.filter(x => x.includes(match)).length;
}





























// import { html, render } from '../node_modules/lit-html/lit-html.js';
// import { styleMap } from '../node_modules/lit-html/directives/style-map.js';
// import { towns } from './towns.js';

// function search() {
//    const input = document.querySelector('#searchText');
//    const resultDiv = document.querySelector('#result');
//    const searchBtn = document.querySelector('button');
//    const townsDiv = document.querySelector('#towns');
//    const ulTemplate = () => html`
//       <ul>
//          ${towns.map(x => html`<li>${x}</li>`)}
//       </ul>
//    `;
//    update();

//    searchBtn.addEventListener('click', onSearch);

//    function onSearch(e) {
//       e.preventDefault();
//       let inputValue = input.value.trim();
//       if (inputValue != '') {
//          towns.forEach((x, i) => {
//             if (x.includes(inputValue)) {
//                document.querySelector(`li:nth-of-type(${i + 1})`)
//                   .classList.add('active');
//             } else {
//                document.querySelector(`li:nth-of-type(${i + 1})`)
//                   .classList.remove('active');
//             }
//          });
//          let matches = towns.filter(x => x.includes(inputValue));
//          resultDiv.textContent = `${matches.length} matches found`;
//       }
//    }

//    function update() {
//       render(ulTemplate(), townsDiv);
//    }
// }
// search();