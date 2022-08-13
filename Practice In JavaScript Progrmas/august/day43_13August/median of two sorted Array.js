function findMedian(arr1, arr2) {
    let arr1Length = arr1.length;
    let arr2Length = arr2.length;

    let i = 0, j = 0, k = 0, arr3, median = 0;
    let newArrayLength = Math.floor((arr1Length + arr2Length) / 2);

    arr3 = new Array(newArrayLength);

    while (i < arr1Length && j < arr2Length && k <= newArrayLength) {
        if (arr1[i] < arr2[j]) {
            arr3[k] = arr1[i];
            i++;
        } else {
            arr3[k] = arr2[j];
            j++;
        }
        k++;
    }

    while (i < arr1Length && k <= newArrayLength) {
        arr3[k] = arr1[i];
        i++;
        k++;
    }

    while (j < arr2Length && k <= newArrayLength) {
        arr3[k] = arr2[j];
        j++;
        k++;
    }

    median = Math.ceil((newArrayLength  + 1)/ 2);

    return arr3[median]
}

let arr1 = [2, 3, 4, 5];
let arr2 = [7]
console.log(findMedian(arr1, arr2))
