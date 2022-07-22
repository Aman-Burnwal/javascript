function partion(arr, l, r,) {
    let i = l - 1;
    let pivot = arr[r]
    for(let j = 0; j <= r - 1; j ++) {
        if(arr[j] < pivot) {
            i++;
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }


    }
    let temp = arr[i + 1];
    arr[i + 1] = arr[r];
    arr[r] = temp;
    return i + 1;
}
const arr = [1, 5, 3, 6,3, 4];
// let arr = [1, 5, 2, 6, 2, 9, 7];
console.log(arr);

console.log(partion(arr, 0, arr.length - 1));

console.log(arr);
