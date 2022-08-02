//constructor function
function Person() {
    this.name = "John";
    this.age = 23
}

let person1 = new Person();


Person.prototype.greet = function () {
    console.log(`Hello, ${this.name}`)
}

Person.prototype.department = "Computer Science"

let person2 = new Person();

person1.greet()
console.log(person1)
console.log(person2)
