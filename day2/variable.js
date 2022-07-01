
/*      Variable declaration rules -------
 *    1. numbers, special characters are not allowed in starting.
*     2. Underscore(_), dolloar ($), alphabates are allowed.
*     3. Variables are case sensitive.
 */

var ex1 = "It is allowed";
var _ex2 = "It is also allowed";
var $ex3 = "It is also allowed";

//var 4exe = "not allowed";
//var #ex5 = "not allowed";

var intili;
// here we are intilized a variable as the name of intili
//note = is known as assignment operator

var ex7 = 5;
//The above is called an explicit initialization when a variable is declared and is assigned a value at the same time.

let name = "Aman";
// we can also use let instead of var


// Constants
// Declaration and initialization of a constant follows the same concepts as a variable, with the exception of the const keyword. Constants are typically declared with all uppercase letters.

// const MY_VARIABLE = 123;
// Constants are similar to variables, with two exceptions:

// Must have a value. Constants must be initialized, or an error will occur when running code.

// Reference cannot be changed. The reference of a constant cannot be changed once initialized, or an error will occur when running code. Let's look at two examples:

// Simple value. The following is NOT allowed:

const PI = 3;
PI = 4; // not allowed
// Object reference is protected. The following is NOT allowed.

const obj = { a: 3 };
obj = { b: 5 } // not allowed
// Object value is not protected. The following IS allowed:

const obj2 = { a: 3 };
obj.a = 5;  // allowed
