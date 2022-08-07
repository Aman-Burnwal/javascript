// 2)	
// Given 2D Array. A Magic square is a 2D array having n rows and n columns which will be having all
// elements as distinct and the sum of row, column or diagonal is equal to the same number.

// You need to check whether that array is magic square or not.

// Input -> 

const array = [[2, 7, 6],
[9, 5, 1],
[4, 3, 8]]
console.log(isArraySquareMagic(array));

function isArraySquareMagic(array) {
    let presum = 0, sum = 0
    for (let i = 0; i < array.length; i++) {
        let row = 0, col = 0;
        for (let j = 0; j < array[0].length; j++) {
            row += array[i][j];
            col += array[j][i];
        }
        
        if (row != col) {
            return false;
        }

        presum = sum;


    }

    return true;
}


// default ans;

function magicSquare(arr) {

    var N = arr.length


    var sumd1 = 0, sumd2 = 0;

    for (var i = 0; i < N; i++) {


        sumd1 += arr[i][i];

        sumd2 += arr[i][N - 1 - i];

    }


    if (sumd1 != sumd2)

        return false;




    for (var i = 0; i < N; i++) {

        var colSum = 0;

        var rowSum = 0;

        for (var j = 0; j < N; j++) {

            rowSum += arr[i][j];

            colSum += arr[j][i];

        }

        if (rowSum != colSum || colSum != sumd1)

            return false;

    }

    return true;

}


var arr = [[2, 7, 6],

[9, 5, 1],

[4, 3, 8]];


if (magicSquare(arr))

    console.log("Array is Magic Square");

else

    console.log("Array is not a Magic Square");