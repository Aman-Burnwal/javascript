/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {

    let row = grid.length; 
    let col = grid[0].length;

    let i = 0; j = 0;

    let max = 0

    while (i < row) {

        while (j < col) {
            
            if (grid[i][j] === 1) {
                let t = total(grid, i, j, row, col, 0)
                max = Math.max(max, t) 

            }
            j++;
        }
        j = 0;
        i++;
    }

    function total(grid, i, j, row, col, count) {
        
        if (i < 0 || i >= row || j < 0 || j >= col || grid[i][j] === 0) {
            return count;
        }

        grid[i][j] = 0;

        count++;
        
        count = total(grid, i + 1, j, row, col, count);
        count = total(grid, i - 1, j, row, col, count);
        count = total(grid, i, j + 1, row, col, count);
        count = total(grid, i, j - 1, row, col, count);

        return count;
        
       
    }



    return max;

};


const grid = [

    [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
    [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0]

];

console.log(maxAreaOfIsland(grid));