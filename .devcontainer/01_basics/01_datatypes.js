"use strict"; // treat all js code as newer version

//Datatypes

//number => 2 to the power 53
//bigint
//string => ""
//boolean => true or false
//null  => standalone value
//undefined
//symbol => unique

let score = 3
let stringScore = String(score)
console.log(stringScore);
console.log(typeof(stringScore));

let Isboolean = "c"
let booleanValue = Boolean(Isboolean)
console.log(booleanValue);
console.log(typeof(booleanValue));

let marks = null
let stringMarks = Boolean(marks)
console.log(typeof(marks));
console.log(stringMarks);

let num = "33abc"
let numValue = Number(num)
console.log(numValue);
console.log(typeof(numValue));

// "33" => 33
// "33abc" => NaN
// true => 1; false => 0