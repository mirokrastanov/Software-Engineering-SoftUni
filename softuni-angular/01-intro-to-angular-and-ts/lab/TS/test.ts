let isEven: boolean = false;
let num: number = 4.2;

type User = {
    name: string,
    age: number,
};

const peshoUser = {
    name: 'Pesho',
    age: 21,
} as User;

interface AnotherUser {
    firstName: string,
    id: number,
    getUserName: () => string,
}

// class AnotherUserClass implements AnotherUser {
//     firstName: string;
//     id: number;
//     getUserName() {
//         return this.firstName;
//     }
// }

// const otherUsers = [
//     { firstName: 'Ivan', id: 1 },
//     { firstName: 'Mitko', id: 2 },
//     { firstName: 'Maria', id: 3 }
// ] as AnotherUser[]

// otherUsers.forEach(({ firstName, id }) => {
//     console.log(`${id}: ${firstName}`);


// });


// class Human {
//     speak() {
//         console.log('Hello');
//     }
// }

// class Person extends Human {
//     private name: string;
//     public age: number;

//     constructor(name: string, age: number) {
//         super();
//         this.name = name;
//         this.age = age;
//     }
// }

// const personIvan = new Person('Ivan', 33);
// personIvan.speak();

// function getIdentity<T>(id: T) {
//     console.log(id);  
// }

// getIdentity<number>(123);
// getIdentity<string>('123');

// enum PaymentStatus {
//     Failed,
//     Successful,
//     Pending
// }

