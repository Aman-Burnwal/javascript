/**
 * question link https://leetcode.com/problems/minimum-path-sum/
 */

/**
 * Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right, which minimizes the sum of all numbers along its path.

Note: You can only move either down or right at any point in time.

 

Example 1:


Input: grid = [[1,3,1],[1,5,1],[4,2,1]]
Output: 7
Explanation: Because the path 1 → 3 → 1 → 1 → 1 minimizes the sum.
Example 2:

Input: grid = [[1,2,3],[4,5,6]]
Output: 12
 

Constraints:

m == grid.length
n == grid[i].length
1 <= m, n <= 200
0 <= grid[i][j] <= 100
 */



var minPathSum = function (grid) {
    // Some constance for convenience
    const NUM_ROWS = grid.length;
    const NUM_COLS = grid[0].length;

    // Helper function which allows us to safely read from grid even if row and col are out of bounds
    function get_idx(row, col) {
        if (row >= NUM_ROWS || col >= NUM_COLS) {
            return Infinity;
        }
        return grid[row][col];
    }

    // Iterate over each grid cell from bottom right to top left
    for (let row = NUM_ROWS - 1; row >= 0; --row) {
        
        for (let col = NUM_COLS - 1; col >= 0; --col) {

            // If this is the bottom right cell we dont have to do anything
            if (row === NUM_ROWS - 1 && col === NUM_COLS - 1) {
                continue;
            }

            // For every other cell do the following ...
            grid[row][col] = grid[row][col] + Math.min(get_idx(row + 1, col), get_idx(row, col + 1));

        }
    }

    // The answer is in the top left cell
    return grid[0][0];
};


const grid = [[1, 2, 5], [3, 2, 1]];

console.log(minPathSum(grid));