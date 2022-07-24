function selectionSort(arr) {
    let miniIndex;

    for(let i = 0; i < arr.length - 2; i++ ) {
        miniIndex = i;

        for(let j = i + 1; j < arr.length - 1; j++) {
            if(arr[j] < arr[miniIndex]) {
                miniIndex = j;
            }
        }

        let temp = arr[i];
        arr[i] = arr[miniIndex];
        arr[miniIndex] = temp
    }
    return arr;
}


let arr = [3, 6, 1, 4, 0, 5, 6, 9]
console.log(selectionSort(arr))
