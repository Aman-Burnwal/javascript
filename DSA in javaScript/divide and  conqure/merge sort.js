function merge(arr, l, r) {

    if (l >= r) return;

    let m =  l + parseInt( (r - l) / 2);

    merge(arr, l, m);
    merge(arr, m + 1, r);
    mergeSortedArray(arr, l, m, r);
}

const arr = [2, 0, 9, 3, 8]
console.log(merge(arr, 0, 4))
console.log(arr)


function mergeSortedArray(arr, l, m, r) {

    let leftPartLen = (m - l) + 1;
    let rightPartlen = r - m;

    let leftPart = [];

    let rightPart = [];


    for (let i = 0; i < leftPartLen; i++) leftPart[i] = arr[l + i];

    for (let i = 0; i < rightPartlen; i++) rightPart[i] = arr[i + m + 1];

    let i = 0, j = 0, k = l;

    while (i < leftPartLen && j < rightPartlen) {
        
        if (leftPart[i] <= rightPart[j]) {
            arr[k] = leftPart[i];
            i++;
        } else {
            arr[k] = rightPart[j];
            j++;
        }
        k++;
    }

    while (i < leftPartLen) {
        arr[k] = leftPart[i];
        i++, k++;
    }
    while (j < rightPartlen) {
        arr[k] = rightPart[j];
        j++, k++;
    }
}