function insertionSort1(n, arr) {
    // Write your code here
    let i = arr.length - 2;
    n = arr[n - 1];
    while (i >= 0 && arr[i] > n) {

        arr[i + 1] = arr[i];
        console.log(arr)
        i--;
    }
    arr[i + 1] = n;
    return arr;

}


console.log(insertionSort1(5 , [ 2,  4, 6, 8, 3 ]))