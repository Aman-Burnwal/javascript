function mergetwoSortedArray(arr1, arr2) {
    let arr1Index = 0;
    let arr2Index = 0;
    let arr3 = new Array(arr1.length + arr2.length), arr3Index = 0;

    while (arr1Index < arr1.length && arr2Index < arr2.length) {
        if (arr1[arr1Index] <= arr2[arr2Index]) {
            arr3[arr3Index] = arr1[arr1Index];
            arr1Index++;
        } else if (arr1[arr1Index] > arr2[arr2Index]) {
            arr3[arr3Index] = arr2[arr2Index];
            arr2Index++;
        }
        arr3Index++;
    }

    if(arr1Index < arr1.length) {
        while(arr1Index < arr1.length) {
            arr3[arr3Index] = arr1[arr1Index];
            arr3Index++;
            arr1Index++;
        }
    }

    if(arr2Index < arr2.length) {
        while (arr2Index < arr2.length) {
            arr3[arr3Index] = arr2[arr2Index]
            arr2Index++;
            arr3Index++;
        }
    }

    return arr3;
}


let arr1 = [2, 4, 8, 9];
let arr2 = [3, 4, 11, 14, 18];

console.log(mergetwoSortedArray(arr1, arr2));