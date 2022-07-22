// Write a method that accepts an array of integers and updates every element with multiplication of
// previous and next elements.
// 
// Note:
//  First element is replaced by multiplication of first and second. 
//  Last element is replaced by multiplication of last and second last.
// Example: 
// Input:
// a = [2, 3, 4, 5, 6]
// n = a.length
// 
// Output: 
// [6, 8, 15, 24, 30]


function newArray(arr) {
    let arrayLength = arr.length;
    let array = new Array(arrayLength);
    for (let index = 0; index < arrayLength; index++) {
        if (index === 0) {
            array[index] = arr[index] * arr[index + 1]
            continue;
        }
        if (index === arrayLength - 1) {
            array[index] = arr[index] * arr[index - 1];
            break;
        }
        if(index > 0 && index < arrayLength - 1) {
            array[index] = arr[index - 1] * arr[index + 1];
        }


    }

    return array;
}

const arr = [2, 3, 4, 5, 6];
console.log(newArray(arr));
const arr1 = [2, 3, 4, 5, 6];


let newArray2 = (array) => {
    let previousIndex = 0;
    let afterIndex = 0, temp = 0;

    for (let index = 0; index < array.length; index++) {
        if(index === 0) {
            previousIndex = array[index]; // 2
            // console.log(previousIndex);
            afterIndex = array[index + 1]; // 3
            // console.log(afterIndex);
            array[index] = array[index] * afterIndex;
            // console.log(array);
            continue;
        }
        // [2, 3, 4, 5, 6];
        if(index === array.length - 1) {
            array[index] = previousIndex * array[index];
            break;
        }
        afterIndex = array[index + 1];
        temp = array[index];
        // console.log(afterIndex);
        array[index] = previousIndex * afterIndex;
        previousIndex = temp;
        // console.log(previousIndex);

        // console.log(array);
    }
    return array;
}
// console.log(arr1);
console.log(newArray2(arr1));



function modifyArray(a, n)
{
    // store current value of arr[0] and update it
    let prev = a[0];
    a[0] = a[0] * a[1];
 
    for (let i = 1; i < n - 1; i++)
    {
        // Storing current value 
        let curr = a[i];
 
        // Update current value with product of previos and next elements
        a[i] = prev * a[i+1];
 
        // Update previous value
        prev = curr;
    }
 
    // Updating last element of the array 
    a[n-1] = prev * a[n-1];
    return a;
}
 

let a = [2, 3, 4, 5, 6];
let n = a.length;
console.log(modifyArray(a, n));
