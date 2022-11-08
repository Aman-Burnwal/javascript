// Given an m x n 2D binary grid grid which represents a map of '1's(land) and '0's(water), return the number of islands.

// An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically.You may assume all four edges of the grid are all surrounded by water.



//     Example 1:

// Input: grid = [
//     ["1", "1", "1", "1", "0"],
//     ["1", "1", "0", "1", "0"],
//     ["1", "1", "0", "0", "0"],
//     ["0", "0", "0", "0", "0"]
// ]
// Output: 1

// Example 2:

// Input: grid = [
//     ["1", "1", "0", "0", "0"],
//     ["1", "1", "0", "0", "0"],
//     ["0", "0", "1", "0", "0"],
//     ["0", "0", "0", "1", "1"]
// ]
// Output: 3



// Constraints:

// m == grid.length
// n == grid[i].length
// 1 <= m, n <= 300
// grid[i][j] is '0' or '1'.



/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {

    let row = grid.length;
    let col = grid[0].length;

    if (row === 0) return 0;



    let no_of_island = 0

    for (let i = 0; i < row; i++) {

        for (let j = 0; j < col; j++) {

            if (grid[i][j] === "1") {
  
                marking_the_island(grid, i, j, row, col);
                no_of_island += 1;

            }

        }
    }
    return no_of_island;


    function marking_the_island(grid, i, j, row, col) {

        if (i < 0 || i >= row || j < 0 || j >= col  || grid[i][j] !== '1') return;

        grid[i][j] = "2";

        marking_the_island(grid, i + 1, j, row, col);
        marking_the_island(grid, i, j + 1, row, col);
        marking_the_island(grid, i - 1, j, row, col);
        marking_the_island(grid, i, j - 1, row, col);
        
    }
};

const grid = [
    ["1", "1", "0", "0", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "1", "0", "0"],
    ["0", "0", "0", "1", "1"]
]

console.log(numIslands(grid));


