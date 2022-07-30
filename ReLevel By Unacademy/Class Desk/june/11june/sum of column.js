// Given a 2D array of size MxN, you need to display N integers which
// denotes the column wise addition of the 2D array
// Input:
/**
 *  M=4,N=3
 *  [   
 *      [3, 4, 5],
 *      [3, 4, 2],
 *      [2, 3, 4],
 *      [4, 4, 4]
 *  ]
 *    
 */
// Output:

// 12,15,15

// Explanation:

// Sum of column-1 : 3+3+2+4= 12
// Sum of column-2 : 4+4+3+4 = 15
// Sum of column-3 : 5+3+4+4 = 15


let array = [
    [3, 4, 5],
    [3, 4, 2],
    [2, 3, 4],
    [4, 4, 4]
]

let M = 4, N = 3;
columnSum(array, M, N);

function columnSum(arr, M, N) {
    let col_sum = new Array();

    for (let i = 0; i < N; i++) {

        let sum = 0;

        for (let j = 0; j < M; j++) {

            sum += arr[j][i];

        }
        col_sum.push(sum);
    }

    return console.log(col_sum)
}


// Approach - 2
// Intuition:
// We can reduce it by applying column wise addition on two rows at a
// time. I.e.
// On using reduce, we will apply same logic with the next row
//  [6,8,7]
// +[2,3,4]
// —-------
// [8,11,11]
// Again using reduce we add this with next row
// [8,11,11]
// +[4,4,4]
// —---------
// [12,15,15]


console.log(sumOfColumn(array));

function sumOfColumn(arr) {
    let ans = arr.reduce((a, b) => a.map((elemet , index) => elemet + b[index]));

    return ans
}


