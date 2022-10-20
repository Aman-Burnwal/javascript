
// given an array of length n, check if the array is sorted or not using recursion

function isArraySorted(arr, len) {

    if (len === 1) {
        return true;
    }

    

    isArraySorted(arr, len - 1)

    if (arr[len] > arr[len + 1]) {
        return false
    }

    return true;
    
}

const arr = [1, 2, 3,1, 4, 5];
const len = arr.length - 1;
console.log(isArraySorted(arr, len))


