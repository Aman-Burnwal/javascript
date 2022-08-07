//Two asynchronous functions: setTimeout AND setInterval

/*setTimeout: allows us to run a function 'once' after some interval of time
Syntax of setTimeout: setTimeout(function|code, delayTime, arg1, arg2, ..., argn)
*/


function add(num1, num2) {
    console.log(`The addition of ${num1} and ${num2} is ${num1 + num2}`);
}

setTimeout(add, 2000, 5, 3);

console.log("This is going to print first because upper fuction will wait till 2s (2000ms)")



// more complex example
function cheese() {
    console.log('Add lots of cheese');
}
function patty(cheese) {
    cheese();
    console.log('Add veggies and patties');
}
function bun(patty) {
    console.log('Take two fresh buns');
    patty(cheese);
}
function burger(bun) {
    setTimeout(() => {
        console.log('Our Burger is ready');
        bun(patty);
    }, 2000);
}
burger(bun);
console.log('Lets make a Burger');