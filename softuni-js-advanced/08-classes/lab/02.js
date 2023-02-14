class Person {
    constructor(fName, lName, age, email) {
        this.fName = fName;
        this.lName = lName;
        this.age = age;
        this.email = email;
    }

    toString() {
        let info = `${this.fName} ${this.lName} (age: ${this.age}, email: ${this.email})`;
        return info;
    }
}

let person = new Person('Anna', 'Simpson', 22, 'anna@yahoo.com');
console.log(person.toString());
