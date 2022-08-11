function selectionSort(arr) {
    let min_index;

    for (let i = 0; i < arr.length - 1; i++) {
        min_index = i;

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min_index]) {
                min_index = j;
            }
        }

        //Swap i, min_index
        let temp = arr[i];
        arr[i] = arr[min_index];
        arr[min_index] = temp;

    }

    return arr;
}

let arr = [3, 6, 1, 4, 0, 5, 6, 9]
console.log(selectionSort(arr))
