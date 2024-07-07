const name = "Samar";
const repoCount = 50;

//console.log(name + repoCount + "value"); //prefer not to use

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); // Prefer to use

const gameName = new String('hiteshhc')
console.log(gameName)
console.log(gameName[0])

console.log(gameName.length);
console.log(gameName.__proto__);

console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0,4);
console.log(newString);

const anotherString = gameName.slice(-6,4);
console.log(anotherString);

const newStringOne = "   samar   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://samar.com/samar%20mahato"
console.log(url.replace('%20', '&'));
console.log(url.includes('ashis'));

//String Methods
console.log("javaScript length".length);
let str = "Samar"
console.log(str.length);

console.log("javaScript length"[2]);
console.log("javaScript".charAt(19));

console.log("javaScript".charCodeAt(2)); // returns ascii value

console.log("JavaScript".toLowerCase());
console.log("JavaScript".toUpperCase());

console.log("JavaScript".slice(2,-5));
// JavaScript
// 0123456789
//          -1
// c = -5 and 5
// t = 9 and -1
console.log("JavaScript".substring(2,6));//vaSc
console.log("JavaScript".substring(-2,2));// IN substring method all the negative indexes will be converted into positive index(0) 

console.log("Naveen".concat(" Automation").concat(" Labs"));
//console.log(`${"Naveen"} ${"Automation"} ${"Labs"}`);

let lang = "Java_JavaScript_Python";
let arr = lang.split("_")
console.log(arr);
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);

console.log("javaScript".includes("Java"));
console.log("javaScript".includes("Samar"));

console.log("Dev Test Framework Dev".replace("Dev","DSA"));
console.log("Dev Test Framework Dev".replaceAll("Dev","DSA"));

console.log("  hello js  ".trim());
console.log("  hello js  ".trimStart());
console.log("  hello js  ".trimEnd());

console.log("Dev".padEnd(10,"*"));
console.log("Deva".padStart(10, "*"));

console.log("Javascript".startsWith("J"));
console.log("Java script".endsWith("script"));

console.log("dev ".repeat(3));

console.log("Naveen Automation Labs".indexOf("Automation"));
console.log("Naveen Automation Labs".indexOf("N"));
console.log("Naveen Automation Labs".indexOf("JS"));

console.log("Naveen Automation Labs Naveen".lastIndexOf("Naveen"));
console.log("Naveen Automation labs".search("Automation"));