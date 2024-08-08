// Reverse a string

//@input- javascript
//@output- tpircsavaj

function reverseString(userInput){
    let reversedString = " ";
     for(let i = userInput.length-1; i>=0; i-- ){
         reversedString += userInput[i]
     }
    return reversedString;
}

console.log(reverseString("javascript"));