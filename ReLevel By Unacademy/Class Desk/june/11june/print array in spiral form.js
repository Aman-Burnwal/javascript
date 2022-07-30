const arr = [
    [1,  2,  3,  4],
    [12, 13, 14, 5],
    [11, 16, 15, 6],
    [10, 9,  8,  7]
];

spiralPrint(arr);
function spiralPrint(arr) {
    let first_row = 0, last_row = arr.length - 1;
    let first_col = 0, last_col = arr[0].length - 1;

    while(first_col <= last_col && first_row <= last_col) {

        // top left to right print

        for(let i = 0; i <= last_col; i++) {
            console.log(arr[first_row][i])
        }
        first_row++;

        // right top to bottom 
        for(let i = first_row; i <= last_row; i++) {
            console.log(arr[i][last_col]);
        }
        last_col--;

        // bottom right to left
        for(let i = last_col; i >= first_col; i--) {
            console.log(arr[last_row][i])
        }
        last_row--;

        // left bottom to top
        for(let i = last_row; i > first_row; i--) {
            console.log(arr[i][first_col]);
        }
        first_col++;

    }
}