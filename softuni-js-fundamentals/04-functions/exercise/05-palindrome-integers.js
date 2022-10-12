function palindromeIntegers(inputArr) {
    
    let isPalindrome = function (inputInteger) {
        let intAsStr = String(inputInteger);
        let fullLength = intAsStr.length;
        let palindromeFlag = true;

        for (let i = 0; i < fullLength / 2; i++) {
            let leftNum = Number(intAsStr[i]);
            let rightNum = Number(intAsStr[fullLength - 1 - i]);
            if (leftNum != rightNum) {
                palindromeFlag = false;
            }
        }

        if (!palindromeFlag) {
            return false;
        } else {
            return true;
        }
    };

    for (let i = 0; i < inputArr.length; i++) {
        let currentInteger = Number(inputArr[i]);
        if (isPalindrome(currentInteger)) {
            console.log(`true`);
        } else {
            console.log(`false`);
        }
    }

}

palindromeIntegers([123, 323, 421, 121]);