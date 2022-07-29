//Transpose of a matrix
//(i, j) => (j, i)
//In-place transpose
function transpose(A) {
    for (let i = 0; i < A.length; i++) {
        for (let j = i + 1; j < A[0].length; j++) {

            let temp = A[i][j];
            A[i][j] = A[j][i];
            A[j][i] = temp;
            
        }
    }

    return A;
}

let A = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
console.log(transpose(A))
