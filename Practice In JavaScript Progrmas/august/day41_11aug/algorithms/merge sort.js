

function mergeSortedArrays(arr, l, m, r) {

    let leftPartLength = (m - l) + 1;
    let rightPartLength = r - m;


    let leftPart = new Array(leftPartLength);
    let rightPart = new Array(rightPartLength);


    for(let i = 0; i < leftPartLength; i++) {
        leftPart[i] = arr[l + i];
    }

    for(let i = 0; i < rightPartLength; i++) {
        rightPart[i] = arr[i + m + 1];
    }

    let i = 0, j = 0, k = l;

    while ( i < leftPartLength && j < rightPartLength) {
        if(leftPart[i] <= rightPart[j]) {
            arr[k] = leftPart[i];
            i++; 
        } else {
            arr[k] = rightPart[j];
            j++;
        }
        k++;
    }

    while(i < leftPartLength) {
        arr[k] = leftPart[i];
        i++, k++;
    }
    while(j < rightPartLength) {
        arr[k] = rightPart[j];
        j++, k++;
    }
}

function mergeSort(arr, l, r) {
    if(l >= r) {
        return;
    }

    let m = l + parseInt((r - l) / 2);

    mergeSort(arr, l, m);
    mergeSort(arr, m + 1, r);
    mergeSortedArrays(arr, l, m, r);
}
let arr = [3, 2, 5, 2, 0, 923, 293, 2380, 32, 93];

mergeSort(arr, 0, arr.length - 1); 
console.log(arr);