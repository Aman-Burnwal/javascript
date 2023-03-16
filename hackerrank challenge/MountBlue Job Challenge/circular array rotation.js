function gamingArray(arr) {
    // Write your code here

    let max = 0;

    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i];
            count++;
        }
    }
    return count % 2 === 0 ? "ANDY" : "BOB";

}
console.log(circularArrayRotation([3, 4, 5], 2, [1, 2]))