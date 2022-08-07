// Callback queue
// Callback functions do not enter the call stack for execution directly instead a
// callback function is registered in the Web API and then the result of callback
// is stored now the callback is entered to Callback Queue. It is a queue data
// structure that has entries in FIFO manner (First in First out) and stores all
// the callback functions ready for execution and once the call stack is empty
// they are deleted from the queue and pushed to the stack for execution.



// console.log('Hi');

// function callback() {
//     console.log('Welcome to Grandline');
// }

// setTimeout(callback, 2000);
// console.log('Join our Pirate Crew & be our Nakama');


// Hi
// Join our Pirate Crew & be our Nakama
// Welcome to Grandline (with a delay of 2 seconds)

// Explanation
// ● First the Global execution context will be created and pushed into the call stack.
// ● The JS engine now starts reading the code from top to bottom and executes the
// console.log('Hi'); line, further it creates a memory space for the function definition
// with the label callback. It does not execute the function as it is still not invoked.
// ● Next it reads setTimeout(callback, 2000); . In this piece of code we are using the WEB
// API method setTimeout(). We pass a timer to wait for 2000 milliseconds (2 seconds)
// and a callback function.
// ● A callback is registered in the Web API and it will store the result of the callback
// function but this callback will wait inside the callback queue till the timer is expired
// and the call stack is empty; it enters the call stack only when both of these conditions
// are fulfilled. 
// ● It is a common scenario to have nested callbacks and in this case all the nested
// callbacks will wait inside the callback queue in FIFO manner (First in First out) and
// then be pushed to the call stack i.e the function that came first to the queue will be
// deleted from the queue and pushed to the stack first.

// Callback as a Sync program
// CallBack as a Synchronous program Example:

// const arr = [1, 2, 3, 4, 5]

// arr.forEach((value, index) => {

//     console.log('At index ' + index + ' the value is ' + value);

// })

// console.log("Callback as a Sync program");

//Output:
// At index 0 the value is 1
// At index 1 the value is 2
// At index 2 the value is 3
// At index 3 the value is 4
// At index 4 the value is 5
// Callback as a Sync program


// More Example: Array.prototype.map(), Array.prototype.flatmap(),
// Array.prototype.filter(), 

var arr = [1, 2, 3, 4, 5];

var arrMap = arr.map((num) => { return num * num; })

console.log('MAP: ', arrMap);

var arrFilter = arr.filter((num) => {
    return num % 2 ==
        0;
})

console.log('FILTER: ', arrFilter); //returns even value

var arrFlatMap = arr.flatMap((num) => {
    return num % 2 == 0
        ? num : num + 1;
})
console.log('FLATMAP: ', arrFlatMap);//converts all odd value to even and returns it
//Output

// MAP: [1, 4, 9, 16, 25]
// FILTER: [2, 4]
// FLATMAP: [2, 2, 4, 4, 6]



// Custom Synchronous Callback program Example:

Array.prototype.customCube = function (callback) {
    let arr = [];
    let val = 0;
    for (let index = 0; index < this.length; index++) {
        val = this[index];
        arr[index] = val * val * val;
    }
    return arr;
}
var arr = [1, 2, 3, 4, 5];
console.log(arr.customCube((num) => { return num; }));

//    Output
//    [1, 8, 27, 64, 125]