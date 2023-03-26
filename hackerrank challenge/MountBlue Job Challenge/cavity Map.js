
function cavityMap(grid) {
    // Write your code here

    for (let i = 1; i < grid.length - 1; i++) {

        let temp = grid[i].split("");

        for (let j = 1; j < temp.length - 1; j++) {

            let value = grid[i][j];

            let up = Number(grid[i - 1][j]);
            
            let down = Number(grid[i + 1][j]);

            let left = Number(grid[i][j - 1]);

            let right = Number(grid[i][j + 1])

            console.log(value, up, down, left, right);

            if (value > down && value > up && value > right && value > left) {
                
                
                temp[j] = "X"
            }
        }

        grid[i] = temp.join("");
    }
    return grid;
}


let grid = ['1112', '1912', '1892', '1234'];

console.log(cavityMap(grid));