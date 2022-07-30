// Given a 2D array where the value of any row element is greater than the previous row. Our task is to find if element x is present in
// the array. 

// Input : - 
// [
//     [2, 14, 15, 16],
//     [7, 18, 20, 22],
//     [8, 21, 23, 24],
//     [9, 26, 27, 28]
// ]


// X= 21


// Output:
// True


// Explanation:
// Position of element 15 in the array is 2,1, so it exists hence true


// Approach
// In the problem statement, it is mentioned that every row element is
// greater than the previous row element. So we can start from the top
// right element and can move either left or downward based upon the
// comparison of the value.
// Steps -
// 1. Initialize i and j to top right element of matrix i.e. -> i=0, j=col-1
// 2. Iterate through the matrix and check if current element is our
// target element - if yes print output
// 3. If current element < target element -> increment the row
// 4. If current element > target element -> decrement the column


const array = [
    [2, 14, 15, 16],
    [7, 18, 20, 22],
    [8, 21, 23, 24],
    [9, 26, 27, 28]
];

let x = 21;

console.log(searchElement(array, x));

function searchElement(arr, x) {

    if(arr.length === 0) {
        return false;
    }

    let rowLen = arr.length, col_len = arr[0].length - 1;

    let i = 0, j = col_len;

    while (i < rowLen && j >= 0) {

        if(arr[i][j] === x) {
            return true;
        } 

        if(arr[i][j] > x) {
            j--;
        }

        if(arr[i][j] < x) {
            i++
        }
    }

    return false;
}