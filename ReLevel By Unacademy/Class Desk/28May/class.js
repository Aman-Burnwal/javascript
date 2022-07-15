class FunctionApp {
    constructor() {
      // Count the number of the objects created
      i++;
    }
    // Function 1
    get() {
      return i; //return number of objects
    }
    // Function 2
    method1() {
      console.log(
        "Function method1");
  
      // Calling method2()
      this.method2();
  
      return 1;
    }
  
    // Function 3
    method2() {
      console.log(
        "Function method2");
    }
  }
  
  // Create object of FunctionApp class inside the class
  const obj = new FunctionApp();
  const obj1 = new FunctionApp();
  
  // Calling function 2
  var i = obj.method1();
  var j = obj.method1();
  
  // Display message only
  console.log(
    "Control returned after function method1 :" + i, j,);
  
  // Calling function 3
  var no_of_objects = obj.get();
  
  console.log(
    "No of objects created till now : " + no_of_objects);
  