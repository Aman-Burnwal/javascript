function miniMaxSum(arr) {
    // Write your code here

    let sum = 0;
    arr.sort();

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    console.log(sum - arr[arr.length - 1], sum - arr[0]);
}