/*
      Dataypes
      /  \
     /    \
Primitive  Non-Primitive

#Primitive :
  7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

#Non-Primitive (Reference) :
  Array, Objects, Functions

*/

// Is js statically typed or dynamically typed?

//Examples of primitive datatypes
const score = 100
const scoreValue = 100.3

const isLoggedin = false
const outsideTemp = null
let userEmail = undefined // or let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);
console.log(id);
console.log(anotherId);

const bigNumber = 1234345385743973634874376n 
//(Automatically value is converted into bigint using n)

//Examples of non-primitive datatypes
const heroes = ["shaktiman", "naagraj", "doga"]
let myObj = {
    name: "Samar",
    age: 21,

}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof(bigNumber));
console.log(typeof(outsideTemp));
console.log(typeof(score));
console.log(typeof(scoreValue));
console.log(typeof(isLoggedin));
console.log(typeof(userEmail));
console.log(typeof(id));
console.log(typeof(anotherId));
console.log(typeof(heroes));
console.log(typeof(myObj));
console.log(typeof myFunction);