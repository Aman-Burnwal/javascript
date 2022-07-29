function printInWaveForm(arr) {
    let rowsize = arr.length;
    let colsize = arr[0].length;

    for (let j = 0; j < colsize; j++) {

        if (j % 2 === 0) {
            //If your current column is even indexed, print elements in top 				to bottom
            for (let i = 0; i < rowsize; i++) {
                console.log(arr[i][j] + " ");
            }
        }

        else {
            //If your current column is odd indexed, print elements in 							bottom to top order
            for (let i = rowsize - 1; i >= 0; i--) {
                console.log(arr[i][j] + " ")
            }
        }
    }
}


let arr = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
]

printInWaveForm(arr)
