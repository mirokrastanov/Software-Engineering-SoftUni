function solve() {
    document.querySelector('#btnSend').addEventListener('click', onClick);
    // TODO - optimize the code / remove bestTotal and calc avg on the fly / replace the regex solution with a .split(". ")
    // at the end map them with x => x + ".", and then join them by space


    let inputElement = document.querySelector('textarea');
    let outputRestaurantElement = document.querySelector('#bestRestaurant p');
    let outputWorkersElement = document.querySelector('#workers p');
 
    function onClick() {
       let restaurants = {};
       let pattern = new RegExp(/["](?<el>[\w\d\s,-]+)["]/, 'g');
       let matches = inputElement.value.matchAll(pattern);
       Array.from(matches).forEach(element => {
          let current = element.groups.el;
          let [restaurant, data] = current.split(" - ");
          let workers = data.split(", ");
          let total = 0;   
          for (let line of workers) {
             let [worker, pay] = line.split(" ");
             if (!restaurants[restaurant]) {
                restaurants[restaurant] = {};
             }
             total += Number(pay);
             restaurants[restaurant][worker] = Number(pay);
          }
          restaurants[restaurant]['total'] = total;
       });
       console.log(restaurants);
 
       let bestRestaurant = "";
       let bestTotal = 0;
       let bestAvg = 0;
       let bestPer = 0;
       Object.entries(restaurants).forEach(element => {
          let name = element[0];
          let total = element[1]['total'];
          let salaries = [];
          let bestSalary = 0;
          for (let [worker, pay] of Object.entries(element[1])) {
             if (worker == 'total') {
                continue;
             }
             salaries.push(pay);
             if (pay > bestSalary) {
                bestSalary = pay;
             }
          }
          let avgSalary = salaries.reduce((a,b) => a + b) / salaries.length;
          if (avgSalary > bestAvg) {
             bestAvg = avgSalary;
             bestPer = bestSalary;
             bestTotal = total;
             bestRestaurant = name;
          }
       });
       outputRestaurantElement.textContent = `Name: ${bestRestaurant} Average Salary: ${bestAvg.toFixed(2)} Best Salary: ${bestPer.toFixed(2)}`;
       let sortedWorkers = Object.entries(restaurants[bestRestaurant]).sort((a,b)=> b[1] - a[1]);
       let workersOutput = '';
       for (let [worker, pay] of sortedWorkers) {
          if (worker == 'total') {
             continue;
          }
          workersOutput += `Name: ${worker} With Salary: ${pay.toFixed(0)} `;
       }
       outputWorkersElement.textContent = workersOutput.trim();
 
       // console.log(bestRestaurant, bestTotal, bestAvg, bestPer);
 
    }
 
 }
 
    // `Name: {restaurant restName} Average Salary: {restaurant avgSalary} Best Salary: {restaurant bestSalary}`
    // `Name: {worker restName} With Salary: {worker salary} Name: {worker2 restName} With Salary: {worker2 salary} Name: {worker3 restName} With Salary: {worker3 salary}…`
 