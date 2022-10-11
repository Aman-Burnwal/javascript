

let data = {
    name: "Aman",
    class: "diploma",
    session: 2022,
}


// console.log(data);

// iteeration over the object
// for (x in data) {
//     console.log(data[x]);
// }

let data2 = {
    name1: "aditya"
}

// merging the objects
// console.log({ ...data, ...data2 })


"use strict"
// Object.freeze(data)

data.age = 9;

// console.log(data)



const arr = [12, 23, 44, 53, 21];

let a = arr.map(function (element) { return element * 2 });
// console.log(a)


let b = arr.filter(function (element) { return element })
console.log(b)