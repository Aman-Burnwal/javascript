// merge two sorted array using recursion
//

function mergeTwoSortedArray(arr1, arr2, i, j) {

    if (i === arr1.length - 1) {
        return arr2;
    }

    if (j === arr2.length - 1) {
        return arr1;
    }

    if (arr1[i] <= arr2[j]) {
        return [arr1[i], ...mergeTwoSortedArray(arr1, arr2, i + 1, j)]
    } else {
        return [arr2[j], ...mergeTwoSortedArray(arr1, arr2, i, j + 1)]
    }


}

const arr1 = [1, 3, 5, 7, 9];
const arr2 = [2, 4, 6, 8, 10];
const i = 0;
const j = 0;
console.log(mergeTwoSortedArray(arr1, arr2, i, j));

//

