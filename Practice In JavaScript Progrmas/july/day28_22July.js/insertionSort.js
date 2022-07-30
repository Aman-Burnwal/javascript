function insertionSort(arr) {
    //Assume that arr[0] is sorted, which means we will have to sort
    //elements from 1..arr.length - 1
    let firstElementUnsortedPart, j;

    for (let i = 1; i < arr.length; i++) {
        firstElementUnsortedPart = arr[i];
        //Sorted part will be from 0 to i - 1
        j = i - 1;

        while (j >= 0 && arr[j] > firstElementUnsortedPart) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = firstElementUnsortedPart;
    }
    return arr;
}

let arr = [5, 4, 3, 2, 0, 7, 6]
console.log(insertionSort(arr))
