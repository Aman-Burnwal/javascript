function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {

        let firstElementUnsortedPart = arr[i];

        let j = i - 1;

        while (j >= 0 && arr[j] > firstElementUnsortedPart) {
            arr[j + 1] = arr[j];
            j -= 1;
        }
        
        arr[j + 1] = firstElementUnsortedPart;


    }
    return arr;
}
let arr = [2, 4, 1, 9, 3, 8, 0];
console.log(insertionSort(arr));