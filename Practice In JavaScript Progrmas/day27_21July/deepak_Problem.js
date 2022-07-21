// Step -> Divide arr single into single element#
// Step -> Merge all the single element into arr single 
// Array in sorted formate__________#

// let's start...!

function startDividing(arr, l, r) {
    if (l >= r) {
        return;
    }
    let m = l + parseInt((r - l) / 2)
    startDividing(arr, l, m)
    startDividing(arr, m + 1, r)
    mergeSort(arr, l, m, r)
}



function mergeSort(arr, l, m, r) {
    let a1Len = (m - l) + 1;
    let a2Len = r - m

    let a1 = new Array(a1Len)
    let a2 = new Array(a2Len)

    for (let i = 0; i < a1Len; i++) {
        a1[i] = arr[i + l]
    }

    for (let j = 0; j < a2Len; j++) {
        a2[j] = arr[j + m + 1]
    }

    let i = 0, j = 0, k = l;
    while (i < a1Len && j < a2Len) {
        if (a1[i] < a2[j]) {
            arr[k] = a1[i]
            i++
        }
        else {
            arr[k] = a2[j]
            j++
        }
        k++
    }

    while (i < a1Len) {
        arr[k] = a1[i]
        i++
        k++
    }

    while (j < a2Len) {
        arr[k] = a2[j]
        j++
        k++
    }

}


let arr = [8, 7, 6, 2, 3, 4, 9, 1, 10, 5]
startDividing(arr, 0, arr.length - 1);
console.log(arr);