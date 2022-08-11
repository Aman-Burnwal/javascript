let arr = [ 7, 1, 9,  3, 4, 5, 8, 6, 7, 8, 0];

console.log(bubbleSort(arr));

function bubbleSort(arr) {

    for (let i = 0; i < arr.length - 1; i++) {
        let isSwapped = false;

        for (let j = i; j < arr.length - 1; j++) {

            let temp = arr[j];

            if(temp > arr[j + 1]) {

                arr[j] = arr[j + 1];

                arr[j + 1] = temp;
                isSwapped = true
            }
        }
        if (isSwapped == false)
        break;
    }
    return arr;

}