const user = {
    username: "Samar",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()

// console.log(this);


// function hello(){
//     // let username = "Samar"
//     console.log(this.username);
// }

// hello()

// const hello = function () {
//     let username = "Samar"
//     console.log(this);
// }

// hello()

// const chai = () => {
//     let username = "Samar"
//     console.log(this);
// }

// chai()

/********** Arrow Function ***********/

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2
// const addTwo = (num1, num2) =>  (num1 + num2)
const addTwo = (num1, num2) =>  ({username: "Samar"})
    


console.log(addTwo(3, 5))

