function stableSelectionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let minIndex = i;

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[minIndex] > arr[j]) {
                minIndex = j;
            }
        }

        //Instead of swapping, we are going to shift elements by one position
        //towards right
        let minElement = arr[minIndex];
        while (minIndex > i) {
            arr[minIndex] = arr[minIndex - 1];
            minIndex--;
        }

        arr[i] = minElement;
    }

    return arr
}

let arr = [3, 9, 2, 1, 6, 3]
console.log(stableSelectionSort(arr))
