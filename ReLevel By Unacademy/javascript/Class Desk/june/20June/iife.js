// IIFE (Immediately Invoked Function
//     Expression)
//     • IIFE is a function that runs as soon as it is declared. Example
//     will help you to understand what is IIFE.
//     • This is similar to declaring the function and invoking the
//     function but only difference here is it will invoke as soon as it
//     is declared.

//anonymous IIFE

// (() => {
//     console.log("hello");
// })();

// (() =>{
//     console.log("This is not going to print because it is not called")
// })


// (() =>{
//     console.log("This is not going to print because it is called")
// })()


// (
//     function(num1, num2) {
//         console.log(num1 + num2);
//     }
// )(4, 5);




// named IIFE
// named IIFE can be called after declaration also but anonymous IIFE well be excute while declaration
let greeting = (
    function(name) {
        console.log(`hello ${name} welcome to new world of programming`);
    }
)

greeting("Banti");

//Advantages of IIFE
//Functions/variables which are defined inside IIFE() they don't pollute the global scope

var x = 5;

(function(){
  var x = 999;
  console.log(`x inside if condition is ${x}`)
})();

console.log(`x outside if condition is ${x}`)
