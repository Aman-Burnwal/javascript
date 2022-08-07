// Currying
// • Currying is when you break down a function that takes
// multiple arguments into a series of function that each take
// only one argument.
// • In the below example curryAdd function is returning a series
// of function and at the last function it is returning the value.



const add = (a, b, c) => {
    return a + b + c;
}


const curryAdd = (num) => {
    return (a) => {
        return (b) => {
            return (c) => {
                return add(a, b,c);
            }
        }
    }
}

const adddtion = curryAdd(add);

console.log(adddtion(1)(2)(3))