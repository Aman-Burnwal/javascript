const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let arrLength, arr;

rl.on('line', (input) => {
    if (!arrLength) {
        arrLength = Number(input);
    } else {
        arr = input.split(' ').map(Number);
        insertionSort(arr);
    }
});

function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let j = i - 1;
        let temp = arr[i];
        while (j >= 0 && arr[j] > temp) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = temp;
    }
    console.log(arr.join(' '));
}
