var isEven = false;
var num = 4.2;
var peshoUser = {
    name: 'Pesho',
    age: 21,
};
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
function getIdentity(id) {
    console.log(id);
}
getIdentity(123);
getIdentity('123');
var PaymentStatus;
(function (PaymentStatus) {
    PaymentStatus[PaymentStatus["Failed"] = 0] = "Failed";
    PaymentStatus[PaymentStatus["Successful"] = 1] = "Successful";
    PaymentStatus[PaymentStatus["Pending"] = 2] = "Pending";
})(PaymentStatus || (PaymentStatus = {}));
