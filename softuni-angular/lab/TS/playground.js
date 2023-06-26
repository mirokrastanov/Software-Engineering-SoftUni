;
var UserTest1 = /** @class */ (function () {
    function UserTest1() {
    }
    return UserTest1;
}());
var num1 = 5;
var num2 = 5;
var num3 = 5;
var isOdd = false;
var isOdd2 = false;
var PaymentStatus;
(function (PaymentStatus) {
    PaymentStatus[PaymentStatus["Failed"] = 0] = "Failed";
    PaymentStatus[PaymentStatus["Successful"] = 1] = "Successful";
    PaymentStatus[PaymentStatus["Pending"] = 2] = "Pending";
})(PaymentStatus || (PaymentStatus = {}));
;
// ENUM (by default) is index based ==> example below
// ENUM key is the word 'Failed' and the value is the index '0' ==> array logic in reverse
// enum PaymentStatus {
//     Failed = 0,
//     Successful = 1,
//     Pending = 2
// };
PaymentStatus.Failed;
var PaymentStatus2 = {
    Failed: 'Failed',
    Successful: 'Successful',
    Pending: 'Pending'
};
var usersTest2 = [
    { name: '1' },
    { name: '2' },
    { name: '3' },
    { name: '4' },
    { name: '5' },
    { name: '6' },
];
