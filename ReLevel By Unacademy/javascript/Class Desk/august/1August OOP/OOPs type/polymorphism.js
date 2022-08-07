// Polymorphism:
// Polymorphism is defined as a way to perform one operations or action in multiple forms.
// There are two types of polymorphism:
// 1. Compile-time polymorphism (Method Overloading)
// 2. Run-time polymorphism (Method Overriding)


// 1. Method-Overloading:
        // It is implemented by providing the same method name but with different parameter lists or
        // parameter types.
        // Javascript does not support method overloading as its not type-safe.
        // If we try to implement overloading, it will just override the previous method with former
        // parameters.

//example program

class Overloading {
    displayValue(value) {
        console.log(`This is the ${value}`);
    }

    // here we are trying to overload but here diplayValue() function will be overrided
    displayValue(value1, value2) {
        console.log(`value : ${value1} value2 : ${value2}`);
    }

    
}

let obj = new Overloading();

obj.displayValue('value1')  // function overrided 
obj.displayValue('vaule1', 'value2'); 


// In the above example,
// At line 18, we created a method displayValue() with one parameter and we have defined same method
// again at line 23, but with two parameters.
// When we try to call displayValue at line 11, ideally it should call method at line 18, but as javascript
// doesn’t support method overloading its just overriding the method at line 18 with line 23 and we get the
// output as shown above.










// 2. Method-Overriding:
//      It is implemented by providing the same method name, parameters but with different
//      body signature.
//      This can be achieved using inheritance only.


class Parent {
    displayValue (value) {
        console.log("parent class", value);
    }
}

class Child extends Parent {
    displayValue (value) {
        console.log("Child class", value);
    }
}


let obj1 = new Child();

obj1.displayValue('is');

// ● Here we can see displayValue method is present in both Parent and Child classes. 
// ● The method name and parameter are same and only body definition is different.
// ● So, this is called method overriding.
// ● If you comment lines from 7-9, you will still be able to access displayValue method but this time
// ● you will be accessing Parent class method instead of Child class.






