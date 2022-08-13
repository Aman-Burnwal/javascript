function mergeAndCount(arr, l, m, r) {
    let left = [];
    for (let i = l; i < m + 1; i++) {
        left.push(arr[i]);
    }

    let right = [];
    for (let j = m + 1; j < r + 1; j++) {
        right.push(arr[j]);
    }

    let i = 0, j = 0, k = l, inversions = 0;

    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            arr[k] = left[i];
            i++;
        } else {
            arr[k] = right[j];
            inversions = inversions + (m - l - i) + 1
            //inversions = inversions + (m + 1) - (l + i)
            j++;
        }
        k++;
    }

    while (i < left.length) {
        arr[k] = left[i];
        i++;
        k++;
    }

    while (j < right.length) {
        arr[k] = right[j];
        j++;
        k++
    }

    return inversions;
}


function mergeSortCountInversions(arr, l, r) {
    let count = 0;

    if (l < r) {
        let m = Math.floor((l + r) / 2);

        count = count + mergeSortCountInversions(arr, l, m)
        count = count + mergeSortCountInversions(arr, m + 1, r)
        count = count + mergeAndCount(arr, l, m, r);
    }

    return count;
}

let arr = [1, 20, 6, 4, 5, 3, 7]
console.log(mergeSortCountInversions(arr, 0, arr.length - 1))
