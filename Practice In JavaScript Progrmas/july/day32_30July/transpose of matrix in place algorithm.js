

function transpose(matrix) {

    for(let i = 0; i < matrix.length; i++) {

        for (let j = i + 1; j < matrix[0].length; j++) {

            let temp = matrix[i][j];
            
            matrix[i][j] = matrix[j][i];

            matrix[j][i] = temp;

        }

    }

    return matrix;
}

const matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
]



console.log(transpose(matrix));