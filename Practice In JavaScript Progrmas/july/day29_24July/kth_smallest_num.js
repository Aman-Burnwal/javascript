// Kth smallest number
function randomPivot(arr, l, r) {
    let pivotIndex = Math.floor(Math.random() * (r - l) + l)

    let temp = arr[pivotIndex];
    arr[pivotIndex] = arr[r];
    arr[r] = temp;
}

function partition(arr, l, r) {
    randomPivot(arr, l, r);

    let pivot = arr[r];

    let i = l - 1;

    for (let j = l; j <= r - 1; j++) {
        if (arr[j] < pivot) {
            i++;
            //Swap arr[i] with arr[j]
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }

    //Swap arr[i + 1] with arr[r]
    let temp = arr[i + 1];
    arr[i + 1] = arr[r];
    arr[r] = temp;

    return (i + 1);
}

function kthIndexElement(arr, l, r, k) {
    let pIndex = partition(arr, l, r);

    if (pIndex === k) {
        return arr[pIndex]
    }

    else if (pIndex < k) {
        return kthIndexElement(arr, pIndex + 1, r, k);
    }

    else {
        return kthIndexElement(arr, l, pIndex - 1, k);
    }
}

let arr = [12, 3, 4, 7, 5, 19, 26];
//[3, 4, 5, 7,]
let k = 1
console.log(kthIndexElement(arr, 0, arr.length - 1, k - 1))
console.log(arr);
