let arr = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
]

console.log(rotateMatrix(arr))


function rotateMatrix (arr) {
    for(let i = 0; i < arr.length; i++) {
        for(let j = i + 1; j < arr[0].length; j++) {
            let temp = arr[i][j];
            arr[i][j] = arr[j][i];
            arr[j][i] = temp
        }
    }

    for(let i = 0; i < arr.length; i++) {

        for (let j = 0; j < Math.floor(arr[0].length / 2); j++) {

            let temp = arr[i][j];

            arr[i][j] = arr[i][arr[0].length - j -1];
            
            arr[i][arr[0].length - j - 1] = temp;
        }
    }

    return arr;
}