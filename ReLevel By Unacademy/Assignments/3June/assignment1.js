// Write code for creating a new sorted array from two sorted arrays in O(n+m) time complexity where
// n,m are the size of the unsorted arrays
// Solutions:
// 10
// 11
// 12
// 13
// 14
// 15
// 16
// 17

function sorting (arr1, arr2) {
    let length1 = arr1.length;
    let length2 = arr2.length;
    let i = 0, j = 0, k = 0;
    let arr3 = new Array(length1 + length2);

    while(length1 > i && length2 > j) {
        if(arr1[i] < arr2[j]) {
            arr3[k] = arr1[i];
            i++;
        } else {
            arr3[k] = arr2[j]
            j++;
        }
        k++;
    }

    while(i < length1) {
        arr3[k] = arr1[i];
        i++;
        k++;
    }

    while(j < length2) {
        arr3[k] = arr2[j]
        j++;
        k++;
    }

    return arr3;
}

const arr1 = [1, 3, 5, 7, 9];
const arr2 = [2, 4, 6, 8];

let arr3 = (sorting(arr1, arr2));

arr3.forEach(x => {
    console.log(x);
})