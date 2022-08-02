//Inheritance: child class can inherit the methods of parent class
//At least two classes:Parent class, child class
//When a class inherits the properties and methods of another class, this is known as inheritance.
// ● The class from which the properties and methods are inherited is known as
// “Parent class”.
// ● The class that inherits these properties and methods is known as “Child class”.
// ● Inheritance helps in code reusability.
// ● “extends and super” keywords are used to establish parent-child relationships. 

//parent class
class Person {
    constructor(name) {
        this.name = name;
    }

    greet() {
        console.log(`Hello, ${this.name}`)
    }
}

//child class - inherit the parent class
// //super() denotes the parent class
class Student extends Person {

    constructor(name, department) {
        super(name)
        this.department = department;
        console.log("Creating object of student class");

        //call the parent class constructot and pass in the name parameter    
    }

    greet() {
        console.log("We are in child class greet method");
        console.log(`Name of student is ${this.name} and department is  ${this.department}`)
    }

}

let student1 = new Student("Jeevendra", "Computer Science");
student1.greet()


// ● Super is a keyword which is used to access and call methods of the parent class.
// ● To access the constructor of the parent class we use super([arguments]). Here arguments is an
// optional field and depends on the parent constructor.
// ● To access the method and parameters of the parent class we make use of the dot(.)operator
// suffixed after the super keyword.
// ● Let’s see an example of parameterised parent constructor using super().


class shape{
    constructor(length, breadth) {
        this.length = length;
        this.breadth = breadth;
    };

    area() {
        return this.length * this.breadth;
    };
}

class Rectangle extends shape {
    constructor(length, breadth) {
        // super keyword used here to assign value in parent class
        super(length, breadth);
    };
    getArea() {
        // dot(.) operator is used to get the value from parent class
        return super.area();
    }

}

var obj = new Rectangle(4, 6);

console.log(obj.getArea());