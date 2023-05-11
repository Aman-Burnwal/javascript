function quickSort(arr, l, r) {

    if (l >= r) return arr
    
    let p = partion(arr, l, r)

    
    quickSort(arr, l, p - 1);
    quickSort(arr, p + 1, r);
    return arr
}

console.log(quickSort([2, 3, 1, 4], 0, 3))

function partion(arr, l, r) {

    let pivot = l;

    let pivot_value = arr[l];

    let i = l + 1;
    for (i; i <= r; i++) {


        if (arr[i] < pivot_value) {
            pivot++;
            swap(arr, i, pivot);
            
        }
    }

    swap(arr, pivot, l);
    return pivot;
}


function swap(arr, i, j) {

    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    return;
}