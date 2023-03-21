import { html, render } from '../node_modules/lit-html/lit-html.js';
import { styleMap } from '../node_modules/lit-html/directives/style-map.js';
import * as api from './api.js';

function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   let tbodyTemplate = (content) => html`
      ${content.map(row => 
      html`
      <tr id=${row._id}>
         <td>${row.firstName} ${row.lastName}</td>
         <td>${row.email}</td>
         <td>${row.course}</td>
      </tr>
      `)}
   `; 
   update();

   async function onClick(e) {
      e.preventDefault();
      let input = document.querySelector('#searchField');
      let allCells = document.querySelectorAll('tbody tr');
      if (input.value.trim() == '') {
         console.log('Input should not be empty');
         return;
      }
      for (let tr of allCells) {
         let flag = false;
         for (let td of tr.querySelectorAll('td')) {  
            if (td.textContent.toLowerCase().includes(input.value.toLowerCase())) {
               flag = true;
               break;
            }
         }
         if (flag) {
            tr.classList.add('select');
         } else {
            tr.classList.remove('select');
         }
      }
      input.value = '';
   }

   async function update() {
      let url = 'jsonstore/advanced/table';
      let content = Object.values(await api.get(url));
      // console.log(content);
      render(tbodyTemplate(content), document.querySelector('tbody'));
      return content;
   }
}
solve();