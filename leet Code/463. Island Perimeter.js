// You are given row x col grid representing a map where grid[i][j] = 1 represents land and grid[i][j] = 0 represents water.

// Grid cells are connected horizontally / vertically(not diagonally).The grid is completely surrounded by water, and there is exactly one island(i.e., one or more connected land cells).

// The island doesn't have "lakes", meaning the water inside isn't connected to the water around the island.One cell is a square with side length 1. The grid is rectangular, width and height don't exceed 100. Determine the perimeter of the island.

//  

// Example 1:

// Input: grid = [[0, 1, 0, 0], [1, 1, 1, 0], [0, 1, 0, 0], [1, 1, 0, 0]]
// Output: 16
// Explanation: The perimeter is the 16 yellow stripes in the image above.

//     Example 2:

// Input: grid = [[1]]
// Output: 4

// Example 3:

// Input: grid = [[1, 0]]
// Output: 4



// Constraints:

// row == grid.length
// col == grid[i].length
// 1 <= row, col <= 100
// grid[i][j] is 0 or 1.
//     There is exactly one island in grid.

/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function (grid) {

    let row = grid.length; 
    let col = grid[0].length;

    let i = 0, j = 0;

    let count = 0;

    while (i < row) {

        while (j < col) {
            
            if (grid[i][j] === 1) {
                // console.log(i, j)
                
                if (i === 0 || grid[i - 1][j] === 0) {
                    count += 1;
                }

                if (i + 1 >= row || grid[i + 1][j] === 0) {
                    // console.log(count)
                    count+= 1;
                }

                if (j - 1 < 0 || grid[i][j - 1] === 0) {
                    // console.log(count)
                    count+= 1;
                }

                if (j + 1 >= col || grid[i][j + 1] === 0) {
                    // console.log(count)
                    count+= 1;
                }
                // console.log(count);
            }

            j++;
        }
        j = 0;
        i++;
    }
    return count;
};

const grid = [[0, 1, 0, 0], [1, 1, 1, 0], [0, 1, 0, 0], [1, 1, 0, 0]]

console.log(islandPerimeter(grid));