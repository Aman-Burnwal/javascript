function median(arr1, arr2) {
    let i = 0, j = 0, k = 0, median = 0;

    let arr3Len = Math.floor((arr1.length + arr2.length) / 2);
    let arr3 = new Array(arr3Len);

    while(i < arr1.length || j < arr2.length && k <= arr3Len) {
        if(arr1[i] < arr2[j]){
            arr3[k] = arr1[i];
            i++;
        } else {
            arr3[k] = arr2[j];
            j++
        }
        k++;

    }

    while(i < arr1.length && k <= arr3Len) {
        arr3[k] = arr1[i]
        i++, k++;
    }
    while(j < arr2.length && k <= arr3Len) {
        arr3[k] = arr2[j];
        j++, k++;
    }

    if(arr3Len % 2 === 1) {
        median = arr3[arr3Len];
    } else {
        median = Math.floor((arr3[arr3Len] + arr3[arr3Len - 1]) / 2);
    }
    return median;
}


let arr1 = [0, 1, 2, 5];
let arr2 = [4, 5, 7];

console.log(median(arr1, arr2));