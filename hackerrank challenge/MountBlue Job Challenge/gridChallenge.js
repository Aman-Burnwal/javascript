function gridChallenge(grid) {
    // Write your code here

    for (let i = 0; i < grid.length; i++) {
        grid[i] = grid[i].split("").sort().join("")
    }

    for (let i = 0; i < grid.length; i++) {

        for (let j = 0; j < grid[0].length - 1; j++) {
  
            if (grid[j][i] > grid[j+ 1][i]) return false;
        }

    }
    return true;

}
let grid = ['ebacd', 'abghij', 'olmkn', 'trpqs', 'xywuv']
console.log(gridChallenge(grid))