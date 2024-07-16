// console.log("Hi")
// console.log("Hello")
// console.log("How")
// console.log("are")
// console.log("you")

// function wish() {
//     console.log("Hi")
//     console.log("Hello")
//     console.log("How")
//     console.log("are")
//     console.log("you")
// }

// wish()
// wish()
// wish()
// wish()
// wish()

// function addtwoNumbers(number1, numnber2){
//          console.log(number1 + numnber2);
// }

// addtwoNumbers(3, "4")
// addtwoNumbers(3, "a")
// addtwoNumbers(3, null)

function addtwoNumbers(number1, number2) {
    // let result = number1 + number2
    // return result
    return number1 + number2
    console.log("Samar"); // this will not be executed
}

const result = addtwoNumbers(3, 5)

// console.log("Result: ", result)

function loginUserMessage(username) {
    // if(username === undefined){                  // undefined refers false value
    //     console.log("Please enter a username");
    //     return
    // }

    // if(!undefined){
    //     console.log("Please enter a username");
    //     return
    // }

    if (!username) {
        console.log("Please enter a username");
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Samar"));
// console.log(loginUserMessage("Samar"));


function calculateCartPrice(val1, val2, ...num1) {       // programmer don't know how many arguments will come
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 401, 400, 2000));

// const user = {
//     username: "samar",
//     userid: 123
// }

function handleObject(anyobject) {
    console.log(`username is ${anyobject.username} and id is ${anyobject.userid}`);
}

// handleObject(user)
handleObject({
    username: "samar",
    userid: 123
})

// const myNewArray = [200, 300, 210, 500]

function returnValue(getArray) {
    return getArray
}

// console.log(returnValue(myNewArray))
console.log(returnValue([200, 300, 210, 500]))
