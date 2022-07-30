// Sparse Array
// Given a 2D array. Our task is to check if the array is sparse or not.

// Sparse Matrix - A matrix is said to be sparse if the number of zeros is more than half of the total elements.


// Approach :
// Since it is mentioned that if half of the elements in a given array are zero, then it will be a sparse matrix. So we need
// to find the total number of zeros in the array. We will compare it with total elements and if it is greater then we will
// print true else false
// Steps -
// 1) Let m = number of rows and n = number of columns, counter = 0
// 2) Total elements = m*n
// 3) Iterate through the array and increment the counter if the element is 0
// 4) Compare the counter value with (total elements) / 2


// Time Complexity –
// If there are m rows and n columns in the
// array. Then complexity will be O(m*n)
// Space Complexity –
// If there are m rows and n columns in the
// array. Then complexity will be O(1)


let array = [ [ 11, 0, 31 ],
              [ 10, 0, 24 ],
              [ 16, 0, 0 ] ];

function spare (array) {
    let rowLen = array.length;
    let colLen = array[0].length;
    let count = 0;
    for(let i = 0; i < rowLen; i++) {
        for(let j = 0; j < colLen; j++) {
            if(array[i][j] === 0) {
                count += 1;;
            }
        }
    }
    return (count >= Math.floor((rowLen * colLen) / 2));
}

console.log(spare(array));
