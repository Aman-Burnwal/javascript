// Requirements: Problem-1:
// Given a 1D array of size 10 , convert it into a 2D array of size 2x5




const oneDArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const twoDArray = new Array();

for (let j = 0; j < 2; j++) {
    twoDArray[j] = new Array(5);

}








// console.log(twoDArray);




let k = 0;
for (let i = 0; i < twoDArray.length; i++) {
    for (let j = 0; j < twoDArray[0].length; j++) {
        twoDArray[i][j] = oneDArray[k]
        k++;
    }
}

// console.log(twoDArray);

function ArrayTo2DArray(oneDArray, row, col) {

    let twoDArray = new Array();
    let k = 0;

    for (let i = 0; i < row; i++) {

        twoDArray[i] = new Array(col);

        for (let j = 0; j < twoDArray[0].length; j++) {

            twoDArray[i][j] = oneDArray[k];
            console.log(k);

            k++;
        }
    }

    return twoDArray;
}
// console.log(ArrayTo2DArray(oneDArray, 2, 5));



let A = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let M = []
let n = A.length
let num_row = 5;
for (let idx = 0; idx < n; idx = idx + num_row) {
    M.push(A.slice(idx, idx + num_row))
    // console.log(A.slice(idx, idx + num_row));
}
console.log(M);
