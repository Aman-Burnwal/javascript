// A class is a blueprint of a real-life entity. 
// It defines the characteristics of an Object like color, shape, size, etc


//Define a class in JS
class Student{
  
    //It initializes values to your properties on object creation
    constructor(n, a, r){
      this.name = n;
      this.age = a;
      this.rollNo = r;
    }
    
    getDetails(){
      console.log(`The name of student is ${this.name} and age is ${this.age} and roll No is ${this.rollNo}`)
    }
  }
  
  var student1 = new Student('Jeevendra', 29, 1234)
  student1.getDetails()
  
  var student1 = new Student('John', 23, 4567)
  student1.getDetails()
  