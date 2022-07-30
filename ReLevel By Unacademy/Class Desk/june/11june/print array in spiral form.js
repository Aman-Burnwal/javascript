/*
Approach

Based on the spiral form, it is clear that we can solve this problem using loops
and conditionals. If we follow the above image of spiral form, we can see that
there are 4 directions where we need to move in order to print the output. We
can follow those 4 directions to get our desired output.
Let's have a look step by step -
1. Initialize 4 variables - e(start row index), f(end row index), g(start column
index), h(end column index)
2. Create a loop and iterate over it until all elements got printed
3. For each outer loop, print elements in clockwise direction
4. Print eth row(from column index g to h) and increase k -> this will print top
row
5. Print (h - 1)th column(from row index e to f) and decrease h -> this will print
right column
6. Print (f - 1)th row (from column index (h - 1) to g) and decrease f -> this will
print bottom row
7. Print (g)th row(from row index f-1 to e) and increase g -> this will print left
column
*/


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