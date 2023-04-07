/**
 * @param {number[][]} grid  // This function takes a 2D grid array as input
 * @return {number}  // It returns a number as output
 */
var numEnclaves = function (grid) {

    let len = grid.length;  // Get the length of the grid
    let col = grid[0].length;  // Get the length of the first row of the grid


    // Loop through the first and last rows of the grid
    for (let i = 0; i < len; i++) {

        if (i === 0 || i === len - 1) {
            // If the current row is the first or the last row

            // Loop through each column in the current row
            for (let j = 0; j < col; j++) {

                // If the current cell is land, remove it from the boundary
                if (grid[i][j] === 1) removingBoundryLand(i, j, len, col, grid);
            }
        }

        else {
            // If the current row is not the first or the last row

            // If the left-most cell in the current row is land, remove it from the boundary
            if (grid[i][0] === 1) removingBoundryLand(i, 0, len, col, grid);

            // If the right-most cell in the current row is land, remove it from the boundary
            if (grid[i][col - 1] === 1) removingBoundryLand(i, col - 1, len, col, grid);
        }
    }

    // Return the count of remaining land cells in the grid
    return lands(grid, len - 1, col - 1);

};



// A helper function to count the total number of land cells in the grid
function lands(grid, len, col) {

    let count = 0;

    // Loop through all the cells in the grid (excluding the boundary)
    for (let i = 1; i < len; i++) {

        for (let j = 1; j < col; j++)
            // If the current cell is land, increment the count
            if (grid[i][j] === 1) count++;
    }

    return count;
}


// A helper function to remove land cells from the boundary
function removingBoundryLand(i, j, len, col, grid) {

    // If the current cell is out of bounds or has already been visited, return
    if (i < 0 || i >= len || j < 0 || j >= col || grid[i][j] !== 1) {
        return;
    }

    // Mark the current cell as visited (i.e., change it to 0)
    grid[i][j] = 0;

    // Recursively remove all neighboring land cells from the boundary in all four directions
    removingBoundryLand(i + 1, j, len, col, grid); // down
    removingBoundryLand(i - 1, j, len, col, grid); // up
    removingBoundryLand(i, j + 1, len, col, grid); // right
    removingBoundryLand(i, j - 1, len, col, grid); // left
}



// Example usage of the function with a grid as input


const grid = [[0, 0, 0, 1, 1, 1, 0, 1, 0, 0],
    [1, 1, 0, 0, 0, 1, 0, 1, 1, 1],
    [0, 0, 0, 1, 1, 1, 0, 1, 0, 0],
    [0, 1, 1, 0, 0, 0, 1, 0, 1, 0],
    [0, 1, 1, 1, 1, 1, 0, 0, 1, 0],
    [0, 0, 1, 0, 1, 1, 1, 1, 0, 1],
    [0, 1, 1, 0, 0, 0, 1, 1, 1, 1],
    [0, 0, 1, 0, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 1, 0, 0, 0, 0], 
    [0, 0, 0, 0, 1, 1, 0, 0, 0, 1]
]
console.log(numEnclaves(grid));

