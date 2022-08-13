function partition(arr, l, r) {
    let pivot = arr[r];

    let i = l - 1;

    for (let j = l; j <= r - 1; j++) {
        if (arr[j] < pivot) {
            i++;
            //Swap arr[i] and arr[j]
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }

    //Swap (i + 1) with r
    let temp = arr[i + 1];
    arr[i + 1] = arr[r]
    arr[r] = temp;

    return (i + 1);
}


function quickSort(arr, l, r) {
    if (l < r) {
        let partitionIndex = partition(arr, l, r);
        quickSort(arr, l, partitionIndex - 1);
        quickSort(arr, partitionIndex + 1, r)
    }
    return arr;

}


let arr = [4, 2, 7, 9, 6, 3, 5]
console.log(quickSort(arr, 0, arr.length - 1))
