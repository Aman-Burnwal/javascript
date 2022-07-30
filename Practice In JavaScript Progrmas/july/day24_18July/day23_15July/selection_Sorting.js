function se(arr) {
    let min;
    for (let i = 0; i < arr.length - 1; i++) {
        min = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        let temp = arr[i];
        arr[i] = arr[min];
        arr[min] = temp;
    }
    return arr;
}

let arr = [3, 6, 1, 4, 0, 2];
let arr2 = [101,86,1001,2,8,26];

console.log(se(arr));
console.log(se(arr2));