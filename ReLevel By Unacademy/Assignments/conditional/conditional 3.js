/*
Problem Statement 

Given an array of three numbers. You need to find the largest among the three numbers. For example -


Input -

25, 15, 20


Output -

25
*/

const arr = [25, 20, 15];
console.log(largestNum(arr));

function largestNum (arr) {
    let largest = arr[0]
    for(let i = 1; i < arr.length; i++) {
        if(arr[i] > largest) {
            largest = arr[i]
        }
    }
    return largest;
}

