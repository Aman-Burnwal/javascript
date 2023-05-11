function mergeSort(arr, i, j) {

    if (i >= j) return;


    let m = Math.floor((j + i) / 2);
    // console.log(m)

    mergeSort(arr, i, m);
    mergeSort(arr, m + 1, j);

    mergArray(arr, i, m, j);

    // return arr;
}
const arr = [2, 3, 1, 5, 4];
mergeSort(arr, 0, 4)
console.log(arr)


function mergArray(arr, l, m, r) {


    let k = l;

    let leftPartLen = (m - l) + 1;

    let rightPartlen = r - m;
    let leftPart = [];
    let rightPart = [];

    for (let i = 0; i < leftPartLen; i++) {

        leftPart.push(arr[ i  + l]);
    }

    for (let i = 0; i < rightPartlen; i++) {
        rightPart.push(arr[i + m + 1]);
    }
    // console.log(leftPart, rightPart, arr)


    let i = 0; 
    let j = 0;


    while (i < leftPartLen && j < rightPartlen) {

        
        if (leftPart[i] > rightPart[j]) {
            
            arr[k] = rightPart[j];

            j++;
        }

        else {
            arr[k] = leftPart[i];
            i++;
        }

        k++;
 
    }
    
 
    while (i < leftPartLen) {
        arr[k] = leftPart[i];
        i++;
        k++;
    }

    while (j < rightPartlen) {
        arr[k] = rightPart[j];
        j++;
        k++;
    }

    // console.log(arr)
}