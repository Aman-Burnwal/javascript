//Transpose of a matrix
//(i, j) => (j, i)
//Here we will use a new matrix for transpose
function transpose(A) {
    //Created a new matrix which has same rows and columns as A

    let B = new Array(A.length);

    for(let i = 0; i < A.length;i++) {
        B[i] = new Array(A[0].length);
    }

    for(let i = 0; i < A.length; i++) {
        
        for(let j = 0; j < A[0].length; j++) {
            B[i][j] = A[j][i];
        }
    }

    return B;

}

let A = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
console.log(transpose(A))
