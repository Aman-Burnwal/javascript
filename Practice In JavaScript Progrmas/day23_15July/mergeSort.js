const arr1 = [1, 3, 5, 7];
const arr2 = [2, 4, 6, 8];

console.log(mergeSort(arr1, arr2));
function mergeSort (arr1, arr2) {
    const arr3 = new Array(arr1.length + arr2.length);
    let i = 0, j = 0, k = 0;

    while(i < arr1.length && j < arr2.length) {
        if(arr1[i] > arr2[j]){
            arr3[k] = arr2[j]
            j++


        } else {
            arr3[k] = arr1[i]
            i++;
        }
        k++;
    }

    while(i < arr1.length){
        arr3[k] = arr1[i];
        i++;
        k++;
    }

    while(j < arr1.length){
        arr3[k] = arr2[j];
        j++;
        k++;
    }
    return arr3;
}