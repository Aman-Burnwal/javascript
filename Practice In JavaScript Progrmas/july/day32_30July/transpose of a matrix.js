const matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
]

console.log(transpose(matrix));

function transpose(matrix) {

    // crating a new array
    let tMatrix = new Array(matrix.length);

    for(let i = 0; i < matrix.length; i++){
        // crating two D array
        tMatrix[i] = new Array(matrix[0].length - 1);
    }


    for(let i = 0; i < tMatrix.length; i++) {
        for (let j = 0; j < tMatrix[0].length; j++) {
            tMatrix[i][j] = matrix[j][i]
        }
    }

    return tMatrix;
}
