unction isArraySorted(arr, n) {
    if (n === 1 || n === 0) {
        return true;
    }

    if (arr[n - 1] < arr[n - 2]) {
        return false
    }

    isArraySorted(arr, n - 1)
}


array1 = [2, 4, 5, 8];

console.log(isArraySorted(array1)); n
