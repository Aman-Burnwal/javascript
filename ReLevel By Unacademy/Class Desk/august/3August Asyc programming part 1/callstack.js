// Call Stack
// Call Stack is the stack data structure maintained by the Javascript engine. It operates
// in a LIFO manner (Last in First Out). It has the purpose of tracking the current function
// being executed. Call Stack is also known as Function execution stack.
// ● When the Javascript engine runs the code, the first thing that happens is an
// execution context is created precisely Global Execution Context (GEC) whenever
// the code execution is started.
// ● So the first thing that’s pushed into the call stack is GEC.
// ● After the execution of code, the execution context is popped out.
// ● Remember, each function has its execution context.
// ● Execution context is the environment in which the code is executed.

function greet () {
    return function () {
        console.log("welcome in my repo")
    }
}

let result = greet();

result();


// Explanation
// ● First, the Global execution context will be created and pushed into the call stack.
// ● The JS engine starts reading the code from top to bottom and creates a memory
// space for the function definition with the label greet. It does not execute the function
// as it's still not invoked.
// ● Next it reads const result = greet(); . As soon as it reads greet(), a local execution
// context for greet() is pushed into the call stack above the GEC, and the output of the
// greet function is stored into the result variable. It does not execute the inner function
// as it is still not invoked; it simply returns the function and stores it. As soon as it
// returns the function, the local execution context of greet is popped out, and only GEC
// is present in the stack.
// ● Now the next line is read, and the local execution context for the result() is pushed
// into the call stack.
// ● After its execution, where it logs Welcome to Grandline, the local execution context
// for the result() is also popped out of the stack.
// ● Only the Global execution context that was pushed down the call stack will be
// present, and as there is no further code to execute, this will also be popped, and the
// call stack is empty now.


