
function sansaXor(arr) {
    // Write your code here

    let sum = 0;
    let xSum = 0;

    for (let i = 0; i < arr.length; i++) {

        sum = sum ^ arr[i];
        xSum = arr[i];

        for (let j = i + 1; j < arr.length; j++) {

            xSum = xSum ^ arr[j];
            sum = sum ^ xSum;
        }
    }
    return sum;

}

console.log(sansaXor([3, 4, 5]))



