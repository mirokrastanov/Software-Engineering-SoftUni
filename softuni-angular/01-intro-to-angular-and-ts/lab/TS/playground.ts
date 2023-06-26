type User1 = {
    name: string,
    age: number,
};

interface User2 {
    name: string,
    age: number,
};

class UserTest1 implements User1 {
    name: string;
    age: number;
}

let num1 = 5;
let num2: number = 5; // declared with type
let num3 = 5 as number; // cast
let num4 = num3 as any; // NOT RECOMMENDED
let num5 = num3 as unknown; // NOT RECOMMENDED

const isOdd = false;
const isOdd2: boolean = false;

enum PaymentStatus {
    Failed,
    Successful,
    Pending
};

// ENUM (by default) is index based ==> example below
// ENUM key is the word 'Failed' and the value is the index '0' ==> array logic in reverse
// enum PaymentStatus {
//     Failed = 0,
//     Successful = 1,
//     Pending = 2
// };

PaymentStatus.Failed;

const PaymentStatus2 = {
    Failed: 'Failed',
    Successful: 'Successful',
    Pending: 'Pending'
};


interface userInterface2 {
    name: string,
}

const usersTest2 = [
    { name: '1' },
    { name: '2' },
    { name: '3' },
    { name: '4' },
    { name: '5' },
    { name: '6' },
] as userInterface2[];


function test(name: string, users: userInterface2[]) {
    users.forEach(x => {
        x.name = name;
    })
}

function test2(name: string, users: userInterface2[]): number {
    return 5;
}

function test3(name: string, users: userInterface2[]): void { } // if it doesn't return anything

