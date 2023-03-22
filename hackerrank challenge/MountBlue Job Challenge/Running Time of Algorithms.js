
function runningTime(arr) {
    // Write your code here

    let iterationTime = 0;

    for (let i = 1; i < arr.length; i++) {

        let j = i - 1;

        let currVal = arr[i];

        while (j >= 0 && arr[j] > currVal) {

            arr[j + 1] = arr[j];
            j--;
            iterationTime += 1;
        }

        arr[j + 1] = currVal;
    }
    console.log(arr)
    return iterationTime;

}

// console.log(runningTime([1, 1, 2, 2, 3, 3, 5, 5, 7, 7, 9, 9]))
console.log(runningTime([2, 1, 3, 1, 2])) 