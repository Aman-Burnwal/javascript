// Problem - 1

// Given a 2D array A, return a boolean value indicating that the given
// matrix is a diagonal matrix or not. A matrix is said to be diagonal if all
// the elements of the array other then the diagonal is 0
// If there will be zero in the diagonal then also, we will print output as
// true if all remaining cells have zero. Having zeros in diagonal does not affect our output

// Input:

// A =   [ 
//     [1,0,0,0],
//     [0,2,0,0],
//     [0,0,3,0],
//     [0,0,0,4] ]

// Output:
//      true

// Explanation:

// Since all the elements of the array other then the diagonal element are
// 0, it can be considered as a diagonal matrix




//solutuin started from here

// 2D array
A =   [ 
    [1,0,0,0],
    [0,2,0,0],
    [0,0,0,0],
    [0,0,0,4] 
];

// function calling 
console.log(isDiagonal(A));


// function declaration
function isDiagonal (matrix) {

    for(let i = 0; i < matrix.length; i++) {

        for (let j = 0; j < matrix[0].length; j++) {

            if(i == j) {

                continue;
            }

            if(matrix[i][j] !== 0) {

                return false
            }

        }

    }

    return true;
    
}

