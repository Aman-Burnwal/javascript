// https://www.hackerrank.com/contests/mountblue-technologies/challenges/quicksort1


function quickSort(arr) {
    // Write your code here

    let right = [];
    let rIndex = 0;

    let left = [];
    let lIndex = 0;
    let mid = [arr[0]]
    let mIndex = 0;

    let p = arr[0];

    for (let i = 1; i < arr.length; i++) {

        if (arr[i] < p) {
            left[lIndex] = arr[i]
            lIndex++;

        } else if (arr[i] > p) {
            right[rIndex] = arr[i];
            rIndex++;
        } else {
            mid[mIndex] = arr[i];
            mIndex++;
        }
    }

    let ans = [...left, ...mid, ...right];

    return ans;


    

}

console.log(quickSort([4, 5, 2, 7, 3, 8]))