// object is nothing more than pairs of property and methods


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
class student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

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