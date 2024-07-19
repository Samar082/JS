// IIFE = Immediately Invoked Function Expressions

(function hello(){
    //NAMED IIFE
    console.log("Hello");
})();

( (name) =>  {
    console.log(`Hello, ${name}`);
})("Samar")
