
function largestPermutation(k, arr) {
    // Write your code here


    for (let i = 0; i < arr.length; i++) {
        let temp = i;
        for (let j = i + 1; j < arr.length; j++) {

            if (arr[j] > arr[temp]) {

                temp = j
            }
        }
        if (temp !== i) {
            [arr[i], arr[temp]] = [arr[temp], arr[i]];
            k--;
        }
        if (k === 0) break;
    }
    return arr;

}