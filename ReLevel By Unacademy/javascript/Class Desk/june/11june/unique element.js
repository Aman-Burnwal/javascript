/* 
Given a 2D array. Our task is to find the unique elements. A unique element is an
element whose frequency is 1 i.e. it is not repeating in the whole 2D Array.
If there is no any unique element, print message as “No unique element found”

Input:
const array = [
    [2, 14, 15, 16],
    [7, 18, 20, 22],
    [8, 21, 23, 24],
    [9, 26, 27, 28]
];

Output:
2
8

Approach
In the problem statement, it is mentioned that we need to find the
unique element. We can use a count array which is storing count of
elements. If count = 1, we will print those elements in output
Steps -
1. FInd maximum element of the given array as max
2. Initialize 1D array having size = max
3. Iterate through input array and increment value in count array for
index = element
4. Iterate through count array and print index if value is equal to 1

*/


// Input:
const array = [
    [2,  14, 15, 18],
    [10, 18, 14, 22],
    [8,  26, 22, 15],
    [10, 14, 21, 28]
];

uniqueElement(array);

function uniqueElement(arr) {
    let max = arr[0][0];

    // finding maximum element in an array
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr[i].length; j++) {

            arr[i][j] > max ? max = arr[i][j] : max;

        }
    }

    // creating new array
    let newArray = new Array(max + 1).fill(0);

    // initilizing values times in newArray
    for(let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[0].length; j++) {
            newArray[arr[i][j]]++;
        }
    }


    // console.log(newArray);
    for(let i = 0; i < newArray.length; i++) {

        newArray[i] === 1 ? console.log(i) : ""

    }
    
}

