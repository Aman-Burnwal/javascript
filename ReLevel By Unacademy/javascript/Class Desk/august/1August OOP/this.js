/**
// When used alone this refers to global Object

var demo = this;
console.log(demo);


*/

/*
// this:
// This keyword is used in javascript to refer to an object.
// Which object is being referred to depends on how it's used.
// When used in method, this keyword refers to the object



class ThisDemo {
    message = "hello"
    getmessage() {
        return this.message;
    }
}


console.log(new ThisDemo().getmessage());

*/




/*
// When used in “strict mode” inside function this refer to undefined.

"use strict"

function Demo () {
    return this;
}

console.log(Demo());
*/

