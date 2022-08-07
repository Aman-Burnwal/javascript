
// Write a function which will assign object to another variable change of object property will not
// affect the object property of another variable.


let obj = {
    Name : "Aman",
    age  : 22,
    stream : "diploma",
}

let obj1 = {...obj};

console.log(obj.Name);

obj1.Name = "Banti";

console.log(obj.Name);


// Explanation: De-structuring the object will make an copy of the
// object, so changing the property of one object won’t affect the
// property of another object.
