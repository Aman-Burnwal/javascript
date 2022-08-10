// Question 2: Write a program to sort a given data using recursive approach.

function sortRecursive(arr, n) {
    if (n <= 1)
        return;

    sortRecursive(arr, n - 1);

    let last = arr[n - 1];

    let j = n - 2;

    while (j >= 0 && arr[j] > last) {

        arr[j + 1] = arr[j];

        j--;
    }

    arr[j + 1] = last;
}

let arr = [5, 6, 35, 89, 14, 56, 26, 19, 65, 38, 44];

sortRecursive(arr, arr.length);
console.log(arr);