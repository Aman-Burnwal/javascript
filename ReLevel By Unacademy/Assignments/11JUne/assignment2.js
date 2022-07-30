
// // Given a 2D array, find the sum of the diagonal and the boundary elements of it.
// // In the given matrix of size 5x5 the colored cell marks the diagonal and the boundary elements

// Input:
// A=[ [1,2,3,4,1],
// [5,6,7,8,2],
// [9,10,11,12,13],
// [13,14,15,16,15],
// [11,12,15,19,15],
// ]
// Output:
// 195
// Explaination:
// [1,2,3,4,1],

// Assignment Solutions

// [5,6,7,8,2],
// [9,10,11,12,13],
// [13,14,15,16,15],
// [11,12,15,19,15],
// Sum of the diagonal and the boundary elements is : 195


let N = 5;
function compute(arr) {
    let sum = 0;
    for (let idx = 0; idx < N; idx++) {
        for (let j = 0; j < N; j++) {
            if (idx == j || (idx + j) == N - 1) {
                sum += arr[idx][j];
                // console.log(arr[idx][j])
                console.log(idx, " ", j)
            }
            else if (idx == 0 || j == 0 || idx == N - 1 || j == N - 1) {
                sum += arr[idx][j];
                // console.log(arr[idx][j])

                console.log("else ", idx, " " , j);
            }
        }
    }
    console.log(sum)
}
let A = [
    [1, 2, 3, 4, 1],
    [5, 6, 7, 8, 2],
    [9, 10, 11, 12, 13],
    [13, 14, 15, 16, 15],
    [11, 12, 15, 19, 15],
]
compute(A);