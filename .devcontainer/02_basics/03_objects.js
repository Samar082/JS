// objects can be created using two ways: constructor, literals
//singleton
// object.create

// object literals

const mySym = Symbol("key4")

const jsUser = {
    name: "Samar",
    "full name": "Samar Mahato",
    [mySym]: "mykey1",
    age: 21,
    location: "Durgapur",
    email: "Samar@gmail.com",
    isLoggedIn: false,
    lastLogInDays: ["Monday", "Saturday"]
}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log(jsUser[mySym]);

// jsUser.email = "Samar@Supratim.com"
// Object.freeze(jsUser)  // after freezing, nothing will be changed
// console.log(jsUser)
// jsUser.email = "Samar@Barun.com"
// console.log(jsUser);

// jsUser.greeting = function(){
//     jsUser.greeting = "hello JS user!";
//     return jsUser.greeting
// }

// console.log(jsUser.greeting()); 

jsUser.greetingTwo = function(){
    console.log(`hello JS user, ${this.name}`);
}

jsUser.greetingTwo()
console.log(jsUser);