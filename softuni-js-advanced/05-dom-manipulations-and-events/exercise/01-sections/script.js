function create(words) {
   let contentElement = document.getElementById('content');

   words.forEach(element => {
      let divElement = document.createElement('div');
      let pElement = document.createElement('p');
      pElement.textContent = element;
      pElement.style.display = 'none';
      divElement.appendChild(pElement);
      contentElement.appendChild(divElement);
   });

   contentElement.addEventListener('click', (e) => {
      let paragraphElements = document.querySelectorAll('#content div');
      
      for (const el of paragraphElements) {
         e.target.childNodes[0].style.display = "block";
      }

   });

}