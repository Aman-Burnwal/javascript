// bubble sort using recursion in asccending order

function bubbleSort(arr, n) {

    if (n < 0) return;


    bubbleSort(arr, n - 1);

    arr[n] < arr[n - 1] ? [arr[n] , arr[n - 1]] = [arr[n - 1], arr[n]] : bubbleSort(arr, n - 1)
}


let arr = [1, 5, 2, 9, 7, 8, 11, 34, 56, 0];
bubbleSort(arr, arr.length);

console.log(arr);


