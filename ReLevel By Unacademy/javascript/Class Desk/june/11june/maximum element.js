// Given a 2D array. Our task is to find the maximum element of each row.

// Input
// const array = [
//     [2, 14, 15, 16],
//     [7, 18, 20, 22],
//     [8, 21, 23, 24],
//     [9, 26, 27, 28]
// ];

// Output:
// 16
// 22
// 24
// 28


// Approach
// In the problem statement, it is mentioned that we need to find the
// maximum from each row. We can iterate each row and find the
// maximum element in that particular row.
// Steps -
// 1. Initialize output array with size = number of rows
// 2. Iterate through row and find the maximum
// 3. Save maximum element in output array for respective row
// 4. Print output array



const array = [
    [2, 14, 15, 16],
    [7, 18, 20, 22],
    [8, 21, 23, 24],
    [9, 26, 27, 28]
];

console.log(maximumRowElement(array));

function maximumRowElement(array) {
    let maxElement = new Array();
    for(let i = 0; i < array.length; i++) {

        let max = array[i][0]
        for(let j = i; j < array[i].length; j++) {
            if(array[i][j] > max) {
                max = array[i][j]
            }
        }
        maxElement.push(max);
    }
    return maxElement;

}