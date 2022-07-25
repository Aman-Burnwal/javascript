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

5)What is the output of the following code?
var a = [1,2,4,5,6];
console.log(a.slice(0,2));
a)[1,2]
b)[5,6]
c)[2,4]
d)[1,2,4];
Ans:a
// slice is a predefined function in javascript which is used to return elements of an array from starting point to the ending point
// as mentioned in function argument.


*/
