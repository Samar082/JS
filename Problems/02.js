// Check the string is palindrome or not
//@input: malayalam
//@output: true

function checkPalindrome(userInput) {
    let originalString = userInput;
    let reversedString = "";
    for (let i = userInput.length - 1; i >= 0; i--) {
        reversedString += userInput[i];
    }

    console.log(originalString == reversedString)
}

checkPalindrome("malayalam")