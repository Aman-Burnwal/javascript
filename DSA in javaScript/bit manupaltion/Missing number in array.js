function MissingNumber(array, n) {
    //code here

    let ans = 0;
    for (let i = 0; i < n - 1; i++) {

        ans = ans ^ array[i] ^ i + 1;
    }

    ans = ans ^ n;
    return ans;
}


const arr = [1, 2, 3, 5]

console.log(MissingNumber(arr, 5));