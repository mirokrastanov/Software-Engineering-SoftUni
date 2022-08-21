function password(input) {
    let username = input[0];
    let password = input[1];
    let index = 2;
    let passInput = input[index];

    while (password !== passInput) {     
        index++;
        passInput = input[index];
    }
    console.log(`Welcome ${username}!`);


}

password(["Nakov",
"1234",
"Pass",
"1324",
"1234"]);
password(["Gosho",
"secret",
"secret"]);

