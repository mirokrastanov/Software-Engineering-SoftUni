function calc() {
    const numOne = document.querySelector("#num1");
    const numTwo = document.querySelector("#num2");
    let result = document.querySelector("#sum");

    result.value = Number(numOne.value) + Number(numTwo.value);

}
