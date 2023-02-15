class Company {
    constructor() {
        this.departments = {};
    }
    addEmployee(name, salary, position, department) {
        if (!name || !salary || !position || !department || salary < 0) {
            throw new Error('Invalid input!');
        }
        if (!this.departments[department]) {
            this.departments[department] = {};
        }
        this.departments[department][name] = [salary, position];
        // console.log(`New employee is hired. Name: ${name}. Position: ${position}`);
        return `New employee is hired. Name: ${name}. Position: ${position}`;
    }
    bestDepartment() {
        let salaries = {};
        let output = '';
        for (const el of Object.entries(this.departments)) {
            let depName = el[0];
            let depEmployees = el[1];
            let avgSalary = [];
            for (const kvp of Object.entries(depEmployees)) {
                avgSalary.push(kvp[1][0]);
            }
            avgSalary = (avgSalary.slice().reduce((a, b) => a + b)) / avgSalary.length;
            salaries[depName] = avgSalary;
        }
        let sortedSalaries = Object.entries(salaries).sort((a, b) => b[1] - a[1]);
        let bestDep = sortedSalaries.shift();
        output += `Best Department is: ${bestDep[0]}\n`;
        output += `Average salary: ${bestDep[1].toFixed(2)}\n`;
        let bestDepFull = this.departments[bestDep[0]];
        let sortedBest = Object.entries(bestDepFull).sort((a, b) => b[1][0] - a[1][0] || a[0].localeCompare(b[0]));
        for (const [name, data] of sortedBest) {
            output += `${name} ${data[0]} ${data[1]}\n`;
        }
        return output.trim();
    }
}

let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());
/*
Best Department is: Construction
Average salary: 1500.00
Stan 2000 architect
Stanimir 2000 engineer
Pesho 1500 electrical engineer
Slavi 500 dyer
*/