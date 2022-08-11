function bubbleSort(arr) {

    let isSwapped;

    //Outer loop is for passes
    for (let i = 0; i < arr.length - 1; i++) {

        isSwapped = false;

        //Inner loop is for each pass that you do bubbling
        for (let j = 0; j < arr.length - i - 1; j++) {

            if (arr[j] > arr[j + 1]) {

                let temp = arr[j];

                arr[j] = arr[j + 1];

                arr[j + 1] = temp;

                isSwapped = true;
            }
        }

        console.log("Pass number " + i)
        
        if (isSwapped == false)
            break;
    }

    return arr;
}

let arr = [5, 4, 3, 2, 1]
console.log(bubbleSort(arr))
