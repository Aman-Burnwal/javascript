
// Abstraction:

// Abstraction is a process of showing the essential details and hiding the non-essential
// details.
// It helps in avoiding code redundancy
// Helps in increasing the security of the application.
// Here we hide the implementation part of the application

// class vehcial {
//     #color
//     type;
//     no_of_tyres;

//     constructor(color, type, no_of_tyres) {
//         this.#color = color;
//         this.type = type;
//         this.no_of_tyres = no_of_tyres;

//     }

//     getColor() {
//         return this.#color;
//     }
// }


// let vehcial1 = new vehcial('red', 'electric', 4);
// console.log(vehcial1);


class Vehical {
    #name;
    constructor(name, type, wheels) {
        this.name = name;
        this.type = type;
        this.wheels = wheels;
    }
    getName() {
        return this.#name;
    }
}
var Vehical1 = new Vehical('BMW', 'Electric', 4);
console.log(Vehical1); 

// ● In the above program, you can see at line 21, a method is added “getVehicleClass”.
// ● The user is not concerned of what’s going on inside getVehicleClass method. User just calls the
// ● method at line 23 and gets the output.



// more example

class Person {
    constructor() {
        if (this.constructor == Person) {
            throw new Error("Cannot create object of Person class")
        }
    }

    info() {
        throw new Error("This is an abstract method and you cannot call it")
    }
}

//Implementation 1
class Teacher extends Person {
    info() {
        console.log("I am a teacher");
    }
}

//Implementation 1
class Student extends Person {
    info() {
        console.log("I am a student");
    }
}

let teacher1 = new Teacher();
// teacher1.info()
