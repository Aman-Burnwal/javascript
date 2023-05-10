
/**
 * @param {number[]} arr
 * @param {number} N
 * @returns {number}
*/

class Solution {
    // Function to count inversions in the array.
    inversionCount(arr, N) {
        //your code here
        let count = { value: 0 };
        merge(arr, 0, N - 1, count)

        return count.value;
    }


}


function merge(arr, l, r, count) {
    if (l >= r) return;


    let m = l + parseInt((r - l) / 2);

    merge(arr, l, m, count);
    merge(arr, m + 1, r, count);

    count += merging(arr, l, m, r, count);
    // console.log(count)

}


function merging(arr, l, m, r, count) {
    let leftArrayLen = (m - l) + 1;
    let rightArrayLen = r - m;

    let leftArr = [];

    for (let i = 0; i < leftArrayLen; i++) {
        leftArr.push(arr[i + l]);
    }

    let rightPart = [];

    for (let i = 0; i < rightArrayLen; i++) {
        rightPart.push(arr[m + i + 1]);
    }


    let k = l;


    let i = 0;
    let j = 0;





    while (i < leftArrayLen && j < rightArrayLen) {
        if (leftArr[i] > rightPart[j]) {
            arr[k] = rightPart[j];
            count.value += leftArrayLen - i;
            j++;
        } else {
            arr[k] = leftArr[i];
            i++;
        }
        k++;
    }
    // console.log(leftArr, rightPart)

    while (i < leftArrayLen) {
        arr[k] = leftArr[i];
        k++;
        i++;
    }

    while (j < rightArrayLen) {
        arr[k] = rightPart[j];
        k++;
        j++;
    }





}