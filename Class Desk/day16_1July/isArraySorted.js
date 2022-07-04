//Recursive program to check if array is sorted in increasing order
// arr[i] < arr[i + 1]

function isArraySorted(aarry, array_length){
    if(array_length === 0 || array_length === 1){
        return true;
    }

    if(aarry[array_length - 1] < aarry[array_length - 2]){
        return false;
    }

    return isArraySorted(aarry, array_length - 1);

}


array1 = [3, 4, 5, 5,23, 49];

array1_length = array1.length;

console.log(isArraySorted(array1, array1_length));