//fuction operates on data
// functions are first class citizenship
// functon are also a data because it return data


// string

let greeting = (name) => console.log("hello ", name);

greeting("Aman")

// console.log(greeting);


// numbers

let square = (num) => console.log(num * num);

square(4);

//boolean

let vote = (age) => {
    if (age >= 18) {
        return true;
    } else {
        return false;
    }
}

console.log(vote(5));


// object


let obj = {
    1 : 1,
    2 : 2,
    3 : 3,
    name : "Aman"
}

let key1 = (obj) => obj.name;

console.log(key1(obj));


// array

let arr = [1,2, 4, 5];

let len = (arr) => {
    return arr.length;
}

console.log(len(arr));



var scope = "global scope";
function checkscope() 
{
    var scope = "local scope"; 
    function f() 
    { 
         return scope; 
    }
    return f;
}

console.log(checkscope(scope) (7));