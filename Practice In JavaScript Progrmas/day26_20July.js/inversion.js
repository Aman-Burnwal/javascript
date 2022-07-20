/**
 * conditions : - 
 *      1. i < j
 *      2. only 2 elements from an array
 */

function inversion(arr) {
    let totalinversion = 0;

    for(let i = 0; i < arr.length; i++){
        for(let j = i + 1; j < arr.length; j++) {
            if(arr[i] > arr[j]) {
                totalinversion++;
                // console.log(arr[i], " ", arr[j], " ", totalinversion)
            }
        }
    }
    return totalinversion;
}


const arr = [8, 5, 4, 2, 1];

console.log(inversion(arr));