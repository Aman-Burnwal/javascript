// Find the number of rotations in Rotated Sorted Array


const arr = [15, 18, 2, 3, 6, 12];

// time complexity O(n);
// function Roataed(arr) {

//     let rotate = 0;
//     for (let i = 0; i < arr.length; i++) {

//         rotate = i + 1;
//         if (arr[i] > arr[i + 1]) break;

//     }


//     return rotate;

// }
// console.log(Roataed(arr));


function countNumberOfRotations(arr, low, high) {

    if (high < low)
        return 0;


    if (high == low)
        return low;

    let mid = Math.floor(low + (high - low) / 2);


    if (mid < high && arr[mid + 1] < arr[mid])
        return (mid + 1);


    if (mid > low && arr[mid] < arr[mid - 1])
        return mid;

    if (arr[high] > arr[mid])
        return countNumberOfRotations(arr, low, mid - 1);

    return countNumberOfRotations(arr, mid + 1, high);
}



let n = arr.length;
console.log(countNumberOfRotations(arr, 0, n - 1));

