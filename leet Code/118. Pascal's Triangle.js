// Given an integer numRows, return the first numRows of Pascal's triangle.

// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

//

// Example 1:

// Input: numRows = 5
// Output: [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]]

// Example 2:

// Input: numRows = 1
// Output: [[1]]

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {

    if (numRows === 1) return [[1]];

    let ans = [[1], [1, 1]];

    if (numRows === 2) return ans;

    for (let i = 3; i <= numRows; i++) {

        let temp = [1]

        for (let j = 1; j < i - 1; j++) {

            temp[j] = ans[i - 2][j - 1] + ans[i - 2][j]
            
        }
        temp.push(1);

        ans.push(temp);
        
    } 
    return ans;
};

console.log(generate(5));
