// Explanation: currymultiply function is called with multiply
// function as argument and invoking the series of function with 1,
// 2 and 3, at last it is returning the argument of 1st function value
// as function and referring the series of value passed from the
// function as an argument of multi function


//ordinary function for multiplication 3 arguments

const multiply = (a, b, c) => {

    return (a * b * c);
}


//currying function for multiplication
const currymultiply = (multi) => {
    return (a) => {
        return (b) => {
            return (c) => {
                return multi(a, b, c);
            }
        }
    }
}


const multiplication = currymultiply(multiply);

console.log(multiplication(2)(3)(4));

