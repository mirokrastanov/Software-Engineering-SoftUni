function search() {
   document.getElementById("result").textContent = "";
   document.querySelector("#towns *").style.fontWeight = "unset";
   document.querySelector("#towns *").style.textDecoration = "unset";

   const items = Array.from(document.getElementById("towns").children).map(li => li.textContent);
   const searched = document.getElementById("searchText").value;
   let matches = 0;
   if (searched == "") {
      document.getElementById("result").textContent = `${matches} matches found`;
      return;
   }

   for (let i = 1; i <= items.length; i++) {
      let item = document.querySelector(`#towns :nth-child(${i})`);
      if (!((item.textContent).includes(searched)) || searched == "") {
         item.style.fontWeight = "unset";
         item.style.textDecoration = "unset";
      } else {
         matches++;
         item.style.fontWeight = "bold";
         item.style.textDecoration = "underline";
      }
   }
   document.getElementById("result").textContent = `${matches} matches found`;

}


// alternative solution

// function search() {
//    towns = Array.from(document.querySelectorAll('ul#towns>li'));
//    searchText = document.querySelector('input#searchText').value;
//    resultDiv = document.querySelector('div#result');

//    let matches = 0;
//    towns.forEach(townLiElement => {
//       let townName = townLiElement.textContent;
//       if (searchText && townName.indexOf(searchText) >= 0) {
//          townLiElement.innerHTML = `<bold><u>${townName}</u></bold>`;
//          matches++;
//       }
//    });
//    resultDiv.textContent = `${matches} matches found`;
// }