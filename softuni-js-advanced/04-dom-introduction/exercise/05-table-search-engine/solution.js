function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      const table = document.querySelector("tbody");
      const rows = Array.from(table.querySelectorAll("tr"));
      let searchText = document.querySelector("#searchField").value;
      searchText = searchText
         .trim()
         .split(" ")
         .filter(a => a != "");

      for (let i = 0; i < rows.length; i++) {
         let row = rows[i];
         let cells = row.children;
         for (let j = 0; j < cells.length; j++) {
            let rowMatched = false;
            let current = cells[j];
            let content = current.textContent;
            for (let p = 0; p < searchText.length; p++) {
               if (content.includes(searchText[p])) {
                  row.classList.add("select");
                  rowMatched = true;
                  break;
               } else {
                  row.classList.remove("select");
               }
            }
            if (rowMatched) {
               break;
            }
         }
      }
      searchText = '';
   }
}