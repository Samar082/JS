// IIFE = Immediately Invoked Function Expressions

(function hello(){
    //NAMED IIFE
    console.log("Hello");
})();

( (name) =>  {
    console.log(`Hello, ${name}`);
})("Samar");

(function addTwo(a,b){
    //NAMED IIFE
    console.log(a+b);
})(3,2);

