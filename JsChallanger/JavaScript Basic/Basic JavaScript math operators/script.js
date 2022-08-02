// Write a function that takes 6 values (a,b,c,d,e,f) as arguments
// Sum a and b
// Then substract by c
// Then multiply by d and divide by e
// Finally raise to the power of f and return the result
// Tipp: mind the order

function myFunction(a, b, c, d, e, f) {
   
    return Math.pow(((((a + b) - c ) * d ) / e),f);
}


// myFunction(6,5,4,3,2,1)
// Expected
// 10.5
// myFunction(6,2,1,4,2,3)
// Expected
// 2744
// myFunction(2,3,6,4,2,3)
// Expected
// -8