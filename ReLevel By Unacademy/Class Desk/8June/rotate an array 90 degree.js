// Rotate a square matrix by 90 degrees in a clockwise

// direction without using any extra space.

// Logic:
// ● Square Cycle: In every iteration, the elements mat[i][j] top leftmost element, mat[j][n-1-i] top
// rightmost element, mat[n-1-i][n-1-j] bottom rightmost element, mat[n-1-j][i] bottom leftmost
// element, are getting rotated or swapped with their neighbors.
// ● There will be floor(N/2) square cycles in an NxN matrix. In each square cycle, we will swap
// corresponding elements while rotating in a clockwise direction.

function rotateMatrix(arr) {
    let rowLength = arr.length;
    let colLength = arr[0].length;

    //Transpose of a matrix
    for (let i = 0; i < rowLength; i++) {
        for (let j = i + 1; j < colLength; j++) {
            let temp = arr[i][j]
            arr[i][j] = arr[j][i]
            arr[j][i] = temp;
        }
    }

    //Reverse
    for (let i = 0; i < rowLength; i++) {
        let low = 0, high = colLength - 1;

        while (low < high) {
            let temp = arr[i][low];
            arr[i][low] = arr[i][high];
            arr[i][high] = temp;
            low++;
            high--;
        }
    }

    return arr;
}

let arr = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
]
console.log(rotateMatrix(arr))
