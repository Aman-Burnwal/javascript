// Encapsulation:

// Wrapping or binding of data and functions in a single unit is called encapsulation.
// If other classes need to access the data, then they need to make use of the getter or setter method.
// Here the data is hidden and this is done by declaring properties as private.

// By default, every property of a class is public. This means it can be directly accessed outside its class and can be misused.
// To prevent this we make these private.
// Private properties cannot be accessed outside its class.
// To make a property as private we use “#” symbol in Javascript.

//public class
class Demo {
    name = "Aman";
    age = 22;
}


let userName = new Demo;
userName.name = "Banti";

// uncommet below line to run this program
// console.log(userName);










// private class
// # key is used to make private

class Student {

    // # key is used to make private
    #name = "Banti";
    #university = "JUT";

    // to get data we use get keyword
    getName() {
        return this.#name;
    }
    // to assign something new we use set keyword
    setName(n) {
        this.#name = n;
    }

}

// uncommet all lines to print
// let student1 = new Student();
// console.log(student1.getName());  // Banti


// // changing name 
// student1.setName("Aman");
// console.log(student1.getName()); // Aman


// console.log(student1.getName);  // [function : getName]  --> becuse getName is a function and we aren't using () key

// // private keys are not accessible directly
// console.log(student1.university); // it is being because university is a private key but we can assign new properties with same name

// student1.university = "Jac";

// console.log(student1.university); // jac





class Vehical {
    #name;
    constructor(name, type, wheels) {
        this.#name = name;
        this.type = type;
        this.wheels = wheels;
    }

    getName() {
        return this.#name;
    }
}

var Vehical1 = new Vehical("BMW", "Petrol", 4);

console.log(Vehical1); // Vehical { type: 'Petrol', wheels: 4 } here we are not getting name data because it is private 

console.log(Vehical1.getName());  // now  it will print BMW

