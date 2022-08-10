// set is a data structures likes array and stores unique values

let s = new Set();

s.add(4);
s.add(4);// not added because we have already added 4 in our array
s.add(12);
s.add(34);
s.add(3432)

console.log(s); // returns --> Set(4) { 4, 12, 34, 3432 }

console.log(s.has(4)); // returns true or false

s.clear; // it will not clear beacuse we didnot used ()
console.log(s)// returns --> Set(4) { 4, 12, 34, 3432 }

s.clear();// it will clear all values
console.log(s)// now we have Set(0) {}

s.add(2); // it will add 2 as a value
console.log(s); // return Set(1) { 2 }

s.add(4);  // it will add 4 as a value
s.delete(2)// it will remove 2 from our set
console.log(s); // returns Set(1) { 4 }


