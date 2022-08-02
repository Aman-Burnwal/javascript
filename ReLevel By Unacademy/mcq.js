/**
 * MCQ

1) What will be the output array when we rotate this array by 2?
 Input -> [2,3,4,5,6,7,8]
A) 4,5,6,7,8,3,2                                                                                                     (correct ans)
B) 3,4,5,6,7,8,2
C) 5,6,7,2,3,4,8
D) None

2) When we rotate an array using its elements one by one, it is an in-place algorithm
A) True                                                                                                             [Correct Answer]
B) False

3) Which statement is true about Arrays?
A) Arrays are immutable
B) Arrays are not linear data structure                                                                             [correct answer]
C) Arrays are used to store similar datatypes
D) None


4) Which statement is not an advantage for Arrays?
A) Stack can be implemented using Arrays
B) Queue can be implemented using Arrays
C) Memory inefficient                                                                                                  [correct answer]
D) Indexing


5) When we delete an element from the index which is not present in the array, which condition is that? 
A) Overflow
B) Underflow                                                                                                    [correct answer]
C) Garbage
D) None

6. Which of the below code will give us the length of an array arr?
a) arr.length                                                                                                  [correct answer]
b) arr.len
c) length(arr)
d) None of the above.


7. What is the functionality of the push method in an array?
a) Insert another element in the array                                                                                                   [correct answer]
b) increases the length of array by one
c) returns the deleted element
d) deletes the first element of array



8. What is the output of the following code?

var input = [1,2,4,5,6, 7];
input.filter(x => x>3);
console.log(input);

a) 1,2,3,4,5,6                                                                                                   [correct answer]
b) 4,5,6,7
c) 1,2,3
d) Error


9. What will be the result of below code?

var input = ['h','e','l','l','o'];
input.join('');

a) 'hello'                                                                                               [correct answer]
b) hello                                                                                                            
c) 'helo'
d) None of the above


10. What is the output of the following code?

var a = [1, 2, 4, 5, 6, 7];
console.log(a.splice(0,4));

a) [1 ,2, 4, 5]                                                                                                       [correct answer]
b) [5, 6]
c) [2, 4]
d) [1, 2, 4]


Q 11 – From the below code what is the output

const car = {
    color: 'Black',
    speed: '120Kmph',
    brand: 'Audi',
    start: function () {
        console.log('Car started');
    },
    stop: function () {
        console.log('Car stopped');
    },
}
const newCar = car;
newCar.brand = 'BMW';
console.log(car.brand);
A – Audi
B – BMW                                                                                                 [correct answer]
C – undefined
D - Error

Q 12 – JSON stand for
A – Java Symbol Object Notation
B – Java Script Object Notation                                                                                               [correct answer]
C – Java Script Object Nation
D - None of the above.

Q 13 – InBuilt function to get the keys of the object
A – Object.keys(obj)                                                                                               [correct answer]
B – Object.values(obj)
C – Object.entries(obj)
D - None of the above

Q 14 - Which of the following options are correct for accessing the object in Javascript ?
    Const car = { brand: ‘Audi’ }
A - car.brand                                                                                                  [correct answer]
B - brand
C - car[‘brand’]
D - All the above                                                                                               

Q 15 – Which of the below function is used to convert string to JSON ?
A – JSON.stringify(string)                                                                                       
B – JSON.parse(string)                                                                                          [correct answer]
C – JSON(string)
D – JSON.jsonify(string)

16. What is the output of relevel [1] of the following code?
    var relevel = [3,,6];This question is required. 
A. Undefined
B. Error
C. Null
D. 0
// Array has null value when no value is entered but if value at some index is omitted it takes undefined as value

17)What is the functionality of the pop method in an array?
a)decreases the length of array by one
b)increases the length of array by one
c)returns the deleted element
d)deletes the first element of array
Ans:a
// Pop function delete the last element and hence decrease the array length by one

18)What is the output of the following code?
var one = [1,2,3];
var two = [4,5,6];
var ans = one.concat(two);
console.log(ans);
a)4,5,6,1,2,3
b)1,2,3,4,5,6
c)Error
d)Null
Ans:b
// Concat is a predefined function in js which is used to combine elements of two arrays

19)What is the output of javascript code?
    var sum = 0;
    var input = [10,20,30,80];
    input.forEach((elem) => {
        sum+=elem;
        }
    );
a)140
b)100
c)80
d)60
Ans:a
// forEach work in the same way as for loop and iterates through each element of the array

20) What is the output of the following code?
var a = [1,2,4,5,6];
console.log(a.slice(0,2));
a)[1,2]
b)[5,6]
c)[2,4]
d)[1,2,4];
Ans:a
// slice is a predefined function in javascript which is used to return elements of an array from starting point to the ending point
// as mentioned in function argument.





21) Which operations are performed inside a for loop?This question is required. *

A) Initialization
B) Updation
C) Testing
D) All of the above                                                                 [correct answer]


22) What is the functionality of a continue statement in a loop?This question is required. *

A) Restarts the loop
B) End the loop
C) Skips the rest of the code in the loop iteration                                 [correct answer]
D)none

23) Which of the following executes the block, once before evaluating the conditional statement?This question is required. *

A) Do while Loop                                                                    [correct answer]
B) While loop
C) For loop
D) None


24) Which among the following are examples of loops?This question is required. *

A) For loop
B) While Loop
C) Do While Loop
D) All of the above                                                                [correct answer]


25) What is the functionality of the break statement?This question is required. *

A) Jumps over to the next iteration
B) Jumps out from the loop                                                         [correct answer]
C) Skips the rest of the code inside the loop iteration
D) None


26)Which of the following is the memory location of (i, j)th element in a matrix of size nxm located at memory location 0 and size of each element is c.
A) n*x + j*y
B) i*x + j*y
C) (i*m + j)*c                                                                      (CORRECT)
D) i + j

27) What is the output of Array.fill(2, 1, 3) for the given array: [1, 2, 3, 4, 5, 6]
A) [1, 2, 3, 4, 5, 6]
B) [1, 2, 2, 4, 5, 6]                                                               (CORRECT)
C) [1, 2, 2, 2, 5, 6]
D) None of the above

28) What is the space complexity of an inplace operation on a matrix of size NxM.
A) O(N*M)
B) O(N^3)
C) O(N + M)
D) O(1)                                                                             (CORRECT)

29) Determine the time complexity of the below code?

for(var i = 0; i < n; i++) {
	for(var j = 0; j < m; j++) {
		if(j == m-1)
		    break;
      }
      if(i < n)
        break;
}

A) O(n*m)
B) O(1)
C) O(m)                                                                             (CORRECT)
D) O(n)

30) What is the result of calling Array.pop() on an empty array?
A) undefined                                                                        (CORRECT)
B) null
C) No output
D) None of the above


31) Given a 2D array A=[[1,2,3],[3,3,5]] which is the right way to access element 5
a)A[0][2]
b)A[1][2]                                                                        (CORRECT)
c)A[1][3]
c)A[2][3]

32) Given an array as  A=[[1,2,3],[3,3,5]] what will be the output of A.length
a)1
b)2                                                                        (CORRECT)
c)3
d)4

33) In the array A=[[1,2,3],[3,3,5]] which of the following statement will make 5 as 10
A[1][2]=10
A[1][2]=A[1][2]*2
A[1][2]=A[1][2]+5
All of the above                                                                        (CORRECT)

34. Given an array as  A=[[1,2,3],[3,3,5]] what will be the output of A[2].length
a)1
b)2
c)3
d)4


35. Given a 1D array as 1.2,3,4,5,6 on converting it into a 2x3 array the element at position 2,1 will be:
a) 6                                                                                    (CORRECT)
b) 3
c) 2
d) 1

36. what is the output of the given code? 
    const course = {
        name : "JavaScript",
        id : 1
    }

    const newCourse = new course;
    newCourse.id = 2;
    console.log(course.id);

a) 1
b) 2                                                                                (CORRECT)
c) undefined
d) error 


37. what is the output of the given code? 
    const course = {
        name : "JavaScript",
        id : 1
    }

    const newCourse ={...course};
    newCourse.id = 2;
    console.log(course.id);

a) 1                                                                                (CORRECT)
b) 2 
c) undefined
d) error 



38. Pure function will return same output if same arguments are passed how many times it executes
a) True                                                                             (CORRECT)
b) False

39. The data type which supports pass by reference is
a) String    
b) Number    
c) Object                                                                           (CORRECT)
d) Boolean


40. What is the output of the given code ?

a) 1    
b) 6      
c) null     
d) undefined

41. Can we use “this” keyword in the child class constructor without using “super” keyword? 
a. Yes
b. No                                                                              (CORRECT)


42. Predict the output:

    class Parent {
        displayValueP(value) {
            console.log('Parent value: ', value);
        }
    };
    class Child extends Parent{
        displayValue(value){
            console.log('Child value: ', value)
        }
    }
    var obj = new Child();
    obj.displayValueP('Test’);

1. Child value: Test
2. Parent value: Test                                                                     (CORRECT)
3. Error
4. None of the above


43. Predict the output: 
class Vehicle{
    color;
    type; //Electric or petrol or diesel based
    no_of_tyres; // 4 wheelers or 2 wheelers
    constructor(color, type,no_of_tyres){
        this.color = color;
        this.type = type;
        this.no_of_tyres = no_of_tyres;
    };
};
var bike = new
Vehicle(“Green”,'Electric','2');
onsole.log(bike.color);
bike = new Vehicle();
console.log(bike.color);

1. Output: Green
2. Green, Green
3. Green, undefined                                                                  (CORRECT)
4. None of the above 
● Answer:  Green, undefined 

44. Predict the output:
class Vehicle{
    color;
    type; //Electric or petrol or diesel based
    no_of_tyres; // 4 wheelers or 2 wheelers
    constructor(color, type,no_of_tyres){
        this.color = color;
        this.type = type;
        this.no_of_tyres = no_of_tyres;
    };
};
var bike = new Vehicle(Green,'Electric','2');
console.log(bike.color);

1. Output: Green
2. undefined
3. Error: Green is not defined                                                      (CORRECT)
4. None of the above

*/


