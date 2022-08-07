function multiplyMatrices(A, B) {
    let R1 = A.length;
    let C1 = A[0].length;
    let R2 = B.length;
    let C2 = B[0].length;

    if (C1 != R2) {
        return -1;
    }

    //Create a new 2D array to store result of multiplication
    let result = new Array(R1);
    for (let i = 0; i < R1; i++) {
        result[i] = new Array(C2);
    }

    for (let i = 0; i < R1; i++) {
        for (let j = 0; j < C2; j++) {
            result[i][j] = 0;

            for (let k = 0; k < R2; k++) {
                result[i][j] = result[i][j] + (A[i][k] * B[k][j]);
            }
        }
    }

    return result;
}

let A = [
    [1, 1, 1, 1],
    [2, 2, 2, 2],
    [3, 3, 3, 3],
    [4, 4, 4, 4]
]

let B = [
    [1, 1, 1, 1],
    [2, 2, 2, 2],
    [3, 3, 3, 3],
    [4, 4, 4, 4]
]

console.log(multiplyMatrices(A, B))
