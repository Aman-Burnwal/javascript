/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var checkValid = function (matrix) {

    let num = matrix.length;
    let set = new Set();

    for (let i = 1; i <= num; i++) {
        set.add(i);
    }
    // console.log(set);


    for (let i = 0; i < matrix.length; i++) {

        let temp = new Set(set);
        let temp2 = new Set(set);
    // console.log(temp);
        

        for (let j = 0; j < matrix[i].length; j++) {

            if (temp.has(matrix[i][j]) && temp2.has(matrix[j][i])) {
                temp.delete(matrix[i][j]);
                temp2.delete(matrix[j][i])
            } else {
                return false;
            }
        }
        if (temp.size > 0 || temp2.size > 0) {
            return false;
        }
    }


    return true;
};

matrix = [[1, 2, 3], [3, 1, 2], [2, 3, 1]]; 

console.log(checkValid(matrix))