// Write a program to sort an integer array with custom number as reference.
// Sample Input:
// 2356481790
// 0 1 2 3 9 5 6 2 8 1 9
// Sample Output:
// 2 2 3 5 6 8 1 1 9 9 0
//  Explanation:
// • Our current integer is not 0123456789 it is 2356481790 as per the given input format.
// • So the integer should be sorted in the given order and the output is 2 2 3 5 6 8 1 1 9 9 0



let arr = [0, 2, 1, 2, 3, 9, 5, 6, 2, 8, 1, 9]

let sortingType = 2356481790;

sortingType.toString;
console.log

console.log(sortingType);

let result = (arr, sortingNumber) => {
    let arr2 = new Array();

    let i = 0;
    while(i < arr.length) {
        for(let j = 0; j < arr.length; j++) {
            if(sortingNumber[i] === arr[j]) {
                arr2.push(arr[j])
            }
        }
        i++;

    }

    return arr2;
}

