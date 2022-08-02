// object is nothing more than  property and methods

/*
● Object - the instance of a class.
● It is a collection of related data and functionality.
● Consist of various variables and functions.
● These variables and functions are called as properties and methods
respectively in OOPs.




*/

// different ways to create object;

// Literals:

let object = {
    name : "Aman",
    age : 22,

    greeting : function(greeting) {
        console.log(greeting + " " + this.name);
    }

    
}
// object.greeting("Hello");



// object constructor


/**Constructor:
● A constructor is a function in javascript that is called when an
object of a class is initialised using the “new” keyword.
● Constructor is used to set the values of class properties
during initialisation.
● Construction can be defined only once in a class.
● Super keyword is used inside the constructor to call the
constructor of the parent class. 
*/
class student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

// new is a keyword that is used to create an instance of a user-defined object.


let student1 = new student("Aman", 22);

// console.log(student1);


// object.create()


const vehcila = {
    color : "Red",
    model : "BMW",

    nameTheColorandMode : function() {
        console.log(`this is ${thsi.color} and model is ${this.model}`)
    }
}


let vehcila1 = Object.create(vehcila);

console.log(vehcila);
vehcila1.color = "green";
console.log(vehcila1);