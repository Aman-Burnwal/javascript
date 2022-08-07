//constructor function
class Person {
    constructor() {
        this.name = "John";
        this.age = 23;
    }
    greet() {
        console.log(`Hello, ${this.name}`);
    }
}

let person1 = new Person();



Person.prototype.department = "Computer Science"

let person2 = new Person();

person1.greet()
console.log(person1)
console.log(person2)


// prototype cahining

class prototypeDemo {
    constructor(Name) {
        this.Name = Name;
    }
}

var obj = new prototypeDemo("Aman");
console.log(obj)

console.log(Object.getPrototypeOf(obj));