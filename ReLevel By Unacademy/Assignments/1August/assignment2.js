// Requirements: "Write a program to define a class “Shape”. This class will have the private properties length, breadth and
// height. Create setter and getter methods for all the private properties. Define a method area() inside the
// class and it should return value as length*breadth*height.
// Create an Object of shape class and call the area() method to fetch the area."

class Shape{
    #length;
    #breadth;
    #height;
    constructor(length, breadth, height) {
        this.#height = height;
        this.#breadth = breadth;
        this.#length = length;
    }
    setParameters(length, breadth, height) {
        this.#height = height;
        this.#breadth = breadth;
        this.#length = length;
    }


    getParameters() {
        console.log(this.#length, this.#breadth, this.#height);
    }

    area() {
        return this.#length * this.#breadth *this.#height
    }
}


let obj = new Shape(3, 5, 8);
// area.setParameters(2, 3, 4)
obj.getParameters();

console.log(obj.area());