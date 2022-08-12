function stableSelectionSort(arr) {
    
    for (let i = 0; i < arr.length - 1; i++) {

        let minIndex = i;
        for (let j = i + 1; j < arr.length; j++) {

            if(arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        // making the selection sort stable

        while(minIndex > i) {
            let temp = arr[minIndex];
            arr[minIndex] = arr[minIndex - 1];
            arr[minIndex - 1] = temp
            minIndex--;
        }

    }

    return arr;
}


let arr = [1, 3, 4, 5, 2, 5, 6, 2, 9, 0, 2];

console.log(stableSelectionSort(arr));