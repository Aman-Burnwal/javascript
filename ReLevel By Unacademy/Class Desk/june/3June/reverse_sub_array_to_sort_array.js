// Reverse Subarray to Sort Array
// Problem – Given an array of numbers. You need to find if reversing a subarray can
// sort the array. For example –
// Input – [1,2,5,4,3]
// Output – true (reversing {5,4,3} will sort the array)
// Approach –
// Intuition - If array is having structure like first increasing, then decreasing and then
// again increasing, then we can say that after reversing the decreasing subarray, we
// can get our sorted array.
// Let’s see each step –
// 1) Find Increasing subarray at the start
// 2) Find decreasing subarray
// 3) At last, check for increasing subarray
// 4) In third step, if we are unable to find elements, this also gives us case
// where we can just reverse decreasing subarray of step 2 amd get
// sorted array

/*

function isReverseSubarraySorted(arr) {
    if (arr.length === 1) {
        return true;
    }

    let i, j, k;

    //Increasing part of array
    for (i = 1; i < arr.length; i++) {
        if (arr[i - 1] < arr[i]) {
            continue;
        }

        if (arr[i - 1] > arr[i]) {
            break;
        }
    }

    console.log("Value of i is " + i)

    if (i === arr.length) {
        return true;
    }

    //Decreasing part of array
    if (i >= 1) {
        for (j = i; j < arr.length; j++) {
            if (arr[j] < arr[j - 1]) {
                continue;
            }

            if (arr[j] > arr[j - 1]) {
                break;
            }
        }
    }

    console.log("Value of j is " + j)

    if (j === arr.length) {
        return true;
    }

    if (j > i && arr[j] > arr[i - 2] && arr[i - 1] < arr[j]) {
        // [1, 3, 4, 10, 9, 8, 11, 12]; j = 6, i = 4
        // [0, 1, 2, 3,  4, 5, 6,  7]
        //               i     j
        for (k = j; k < arr.length; k++) {
            if (arr[k] > arr[k - 1]) {
                continue;
            }

            if (arr[k] < arr[k - 1]) {
                return false;
            }
        }
    }

    if (k === arr.length) {
        return true;
    }

    return false;
}*/

let arr = [1, 3, 4, 10, 9, 8, 11, 12];
console.log(isReverseSubarraySorted(arr))


function isReverseSubarraySorted(arr) {

    let length = arr.length;

    if(length === 1) {
        return true;
    }

    let i, j, k;

    // increasing order

    for(i = 1; i < length; i++) {
        if(arr[i] > arr[i - 1]) {
            continue;
        }

        if(arr[i] < arr[i - 1]) {
            break;
        }
    }

    if(i === length - 1) {
        return true;
    }

    //decreasing order

    for(j = i; j < length; j++) {
        if(arr[j] < arr[j - 1]) {
            continue
        }

        if(arr[j] > arr[j - 1]) {
            break;
        }
    }
    // console.log(i , j)
    if(j === length - 1) {
        return true;
    }
    

    if(j > i && arr[j] > arr[i - 2] && arr[j] > arr[i - 1]){ 
        if(j < length) {
            for(k = j; k < length; k++) {
                if(arr[k] > arr[k - 1]) {
                    continue;
                }
                if(arr[k] < arr[k - 1]) {
                    return false;
                }
            }
        }

    }
    return true;
}