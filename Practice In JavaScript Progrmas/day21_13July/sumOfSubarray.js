let array = [2, 3, 40, 5, 6, 7, 8];

function max(array) {
    let sum = 0;
    let max_Sum = 0;

    for (let i = 0; i < array.length - 1; i++) {
        sum = array[i] + array[i + 1]
        max_Sum = Math.max(sum, max_Sum);
    }
    return max_Sum;
}


console.log(max(array));