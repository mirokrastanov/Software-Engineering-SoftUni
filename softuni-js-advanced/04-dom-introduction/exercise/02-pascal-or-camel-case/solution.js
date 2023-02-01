function solve() {
  const input = document.getElementById('text').value;
  const convention = document.getElementById('naming-convention').value;

  if (convention != "Camel Case" && convention != "Pascal Case") {
    document.getElementById('result').textContent = 'Error!';
  } else {
    let arr = input.split(" ");
    let res = [];
    for (let word of arr) {
      let copy = word.split("");
      let mod = [];
      for (let i = 0; i < copy.length; i++) {
        if (i == 0) {
          mod.push(copy[i].toUpperCase());
        } else {
          mod.push(copy[i].toLowerCase());
        }
      }
      res.push(mod.join(""));
    }
    if (convention == "Camel Case") {
      res[0] = res[0].toLowerCase();
    }
    document.getElementById('result').textContent = res.join("");
  }
}