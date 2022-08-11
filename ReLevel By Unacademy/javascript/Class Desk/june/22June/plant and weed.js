
// Problem - 8
// Given a grid of size NxM, K cells have plants while remaining have weeds. Your job is to lay fence
// on the grid such that the following conditions are met: If adjacent cells are plants no need to put
// fence between them If adjacent cell is of weed, then put a fence
// Note: Cells are said to be adjacent if they share the same boundary.
// And building of fences can happen on cell boundaries. So now the total length of constructed fence
// will be calculated as count of pairs of the side adjacent cells such that there is a fence built on there
// common side on sides of cells. On the grid boundary which have fences built on them. Find the
// minimum required length of the total length of fences that needs to be built.

// Example-1
// Input:
// n = 4;
// m = 4;
// k = 1;
// arr = [[1,1]];
// Output:
// 4

//0 -> weed, 1 -> plant
function fence(arr) {
    let totalfences = 0;

    //Initial total fencing around plants
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[0].length; j++) {
            if (arr[i][j] === 1) {
                totalfences = totalfences + 4;
            }
        }
    }

    //Remove fences, such that no fences between two plants, but fences between a plant and a weed
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[0].length; j++) {
            if (arr[i][j] === 1) {
                //Down
                if (i + 1 >= 0 && i + 1 < arr.length && j >= 0 && j < arr[0].length && arr[i + 1][j] === 1) {
                    totalfences = totalfences - 1;
                }

                //Up
                if (i - 1 >= 0 && i - 1 < arr.length && j >= 0 && j < arr[0].length && arr[i - 1][j] === 1) {
                    totalfences = totalfences - 1;
                }

                //Left
                if (i >= 0 && i < arr.length && j - 1 >= 0 && j - 1 < arr[0].length && arr[i][j - 1] === 1) {
                    totalfences = totalfences - 1;
                }

                //Right
                if (i >= 0 && i < arr.length && j + 1 >= 0 && j + 1 < arr[0].length && arr[i][j + 1] === 1) {
                    totalfences = totalfences - 1;
                }

            }
        }
    }

    return totalfences;
}

let arr = [
    [0, 0, 0, 1],
    [1, 1, 1, 0],
    [1, 0, 1, 0],
    [1, 1, 1, 0]
]
console.log(fence(arr))
