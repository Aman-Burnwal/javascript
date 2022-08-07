// every function and object has a buit in function is known as prototype.
// prototype is an object.


function person(names) {
    this.names = names;
}

// for function we use .prototype 
// console.log(person.prototype);


// this prototype property can be accessed as constructorFuction.prototype in case of constructor fucntion 
// in case of constructor fucntion, and __proto__ in case of object.

// let person1 = new person("Aman");
// person1 is a object 
// for object we use __proto__
// console.log(person1.__proto__);



//use of prototype 
// prototype can add properties and methods in on a constructor functon/ object.

person.prototype.gender = "male";
person.prototype.age = 22;
// console.log(person);

person.prototype.greet = function() {
    console.log(`hello ${this.names}, your age is ${this.age} and your gender is ${this.gender} `);
}

let person2 = new person("Aman");

// console.log(person2);
// person2.greet();


// function overriding
let person3 = new person("Banti");

person3.greet = function() {
    console.log(`Holla ${this.names}`);
}

// person3.greet();





//prototype are inheritance

//prototype chian
console.log(person.prototype.__proto__,__proto__.__proto__.__proto__)
person.prototype.__proto__ = {}
console.log(person.prototype.__proto__,__proto__.__proto__.__proto__)