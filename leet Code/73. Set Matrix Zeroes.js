/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {


    let map = new Map;
    let n = matrix.length;
    let m = matrix[0].length;

    for (let i = 0; i < n; i++) {

        for (let j = 0; j < m; j++) {

            let indx = "" + "row" + i +  "col" + j;

            
            if (matrix[i][j] === 0 && !map.has(indx)) {

                let i1 = i;


                // top 

                while (i1 >= 0) {

                    if (matrix[i1][j] !== 0) {
                        let indx = "" + "row" + i1 + "col" + j;
                        map.set(indx);
                    }
                    matrix[i1][j] = 0;
                    i1--;
                }
                // bottom

                let bottom = i;
                while (bottom < n) {

                    if (matrix[bottom][j] !== 0) {
                        let indx = "" + "row" + bottom + "col" +j;
                        map.set(indx);
                    }
                    matrix[bottom][j] = 0;
                    bottom++;
                }


                // left;


                let left = j;

                while (left >= 0) {

                    if (matrix[i][left] !== 0) {
                        let indx = "" + "row" + i + "col" + left;
                        map.set(indx);
                    }
                    matrix[i][left] = 0;
                    left--;
                }

                let right = j;

                while (right < m) {
                
                    if (matrix[i][right] !== 0) {
                        let indx = "" + "row" + i + "col" + right;
                        map.set(indx);
                    }

                    matrix[i][right] = 0;

                    right++;
                }

                


            }
          
        }
    }
};


let arr = [
    [9, 8, 5, 1, 8, 0, 7, 3, 4, 1, 2, 0],
    [1, 4, 3, 3, 8, 1, 6, 9, 3, 5, 7, 3],
    [2, 5, 0, 9, 5, 9, 6, 4, 8, 4, 7, 6],
    [4, 5, 2, 0, 8, 4, 3, 1, 0, 6, 4, 8],
    [9, 0, 9, 5, 7, 7, 0, 9, 2, 2, 0, 9],
    [2, 7, 6, 2, 1, 3, 0, 7, 0, 2, 7, 0],
    [6, 0, 2, 8, 9, 6, 6, 0, 9, 6, 7, 6],
    [3, 8, 8, 7, 0, 8, 9, 4, 7, 5, 6, 0],
    [0, 9, 7, 3, 1, 7, 3, 0, 9, 7, 8, 8],
    [6, 7, 1, 5, 3, 8, 3, 8, 6, 1, 7, 9],
    [2, 6, 3, 9, 1, 2, 2, 4, 1, 9, 7, 4],
    [8, 0, 4, 8, 8, 5, 8, 4, 2, 9, 1, 7]
]

setZeroes(arr);
console.log(arr);

let question = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 0, 0]
]
    let ans = 
[
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
]