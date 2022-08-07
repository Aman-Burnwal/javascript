// Declaring the variables before destructuring assignment 

let newAvenger = { realName: 'Tony Stark', city: 'California', heroName: 'Iron Man' };
let realName, city, heroName;
// { realName, city, heroName } = newAvenger;
// console.log(realName); // Error : "Unexpected token ="

// As we can see here there is an unexpected output as
// Error : "Unexpected token ="
// This is because the syntax that we used for using previously declared variables in Array destructuring is different
// for object destructuring.
// We need to wrap the entire destructuring assignment in round parenthesis ( ). This is because the { } braces on the
// left-hand side are considered as a block and not object literal. We need to note that the ( ) should be preceded by
// a semicolon. Otherwise, it may execute a function from the previous line.