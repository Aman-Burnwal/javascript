function IsArraySorted(arr, n) {
    if (n == 1 || n == 0) {
        return true;
    }

    if (arr[n - 1] < arr[n - 2]) {
        return false
    }

    return IsArraySorted(arr, n - 1)
}


let array1 = [2, 4, 5, 8];

let n = array1.length;

console.log(IsArraySorted(array1, n)); 

// function isArraySorted(arr, n) {
//     if (n == 1 || n == 0)
//         return true;

//     if (arr[n - 1] < arr[n - 2])
//         return false;

//     return isArraySorted(arr, n - 1)
// }

// let arr = [20, 40, 40, 56, 77]
// let n = arr.length

// console.log(isArraySorted(arr, n));


















