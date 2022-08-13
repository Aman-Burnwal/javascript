//Function to merge two sorted arrays
function mergeTwoSortedArrays(arr1, arr2, arr3) {
    let i = 0, j = 0, k = 0

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            arr3[k] = arr1[i];
            i++
        } else {
            arr3[k] = arr2[j];
            j++;
        }
        k++;
    }

    while (i < arr1.length) {
        arr3[k] = arr1[i];
        i++;
        k++;
    }

    while (j < arr2.length) {
        arr3[k] = arr2[j];
        j++;
        k++;
    }
}

//Function to merge k-sorted arrays
//Here we will do a divide and conquer on the 2D array which contains k-sorted arrays
function mergeKSortedArrays(arr, l, r, output) {

    //Only one array
    if (l == r) {
        for (let i = 0; i < n; i++) {
            output[i] = arr[l][i];
        }
        return;
    }

    //Two arrays
    if (r == l + 1) {
        mergeTwoSortedArrays(arr[l], arr[r], output)
        return;
    }

    let mid = l + Math.floor((r - l) / 2);

    //l to mid => (mid - l) + 1
    //mid + 1 to r => r - (mid + 1) + 1 = (r - mid)  
    let leftOutput = new Array(n * (mid - l + 1));
    let rightOutput = new Array(n * (r - mid));

    mergeKSortedArrays(arr, l, mid, leftOutput);
    mergeKSortedArrays(arr, mid + 1, r, rightOutput)

    mergeTwoSortedArrays(leftOutput, rightOutput, output);

}

let arr = [
    [3, 4, 5, 6],
    [7, 8, 9, 10],
    [11, 12, 13, 14]
]
let k = arr.length;
var n = arr[0].length;
let lengthOfOutputArray = n * k;
let output = new Array(lengthOfOutputArray);
mergeKSortedArrays(arr, 0, arr.length - 1, output);
console.log(output)
