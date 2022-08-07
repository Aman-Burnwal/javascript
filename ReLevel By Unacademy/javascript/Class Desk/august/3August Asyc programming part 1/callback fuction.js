// CallBacks
// Callbacks are functions that are passed as arguments to other functions and then
// invoked in the outer function to perform its operation.
// Also, callbacks take time to execute and are not executed immediately; they are passed
// at first and are invoked later.
// Callbacks should be implemented asynchronously. Else the event loop in the JS engine
// has to wait until the callback is executed, which may cause undesired output, or our
// program may become unresponsive

function greet (callback) {
    callback();
    console.log("welcome to callback function");
}

greet(function (){
    console.log("hii")
})


// same function but with arrow function

function arrowFu(callback) {
    callback();
    console.log("You are still here ?")
}

greet (() => console.log("Hello! dearrrr............"))