// You are given an integer array height of length n.There are n vertical lines drawn such that the two endpoints of the ith line are(i, 0) and(i, height[i]).

// Find two lines that together with the x - axis form a container, such that the container contains the most water.

// Return the maximum amount of water a container can store.

// Notice that you may not slant the container.



//     Example 1:


// Input: height = [1, 8, 6, 2, 5, 4, 8, 3, 7]
// Output: 49
// Explanation: The above vertical lines are represented by array[1, 8, 6, 2, 5, 4, 8, 3, 7].In this case, the max area of water(blue section) the container can contain is 49.
// Example 2:

// Input: height = [1, 1]
// Output: 1


// Constraints:

// n == height.length
// 2 <= n <= 105
// 0 <= height[i] <= 104

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {

    let left = 0;
    let right = height.length - 1;

    let max = 0;
    let min = 0;
    let len = 0;
    while (left <= right) {
        
        min = Math.min(height[left], height[right]);
        // console.log(min)
        len = right - left;
        // console.log(len)

        max = Math.max(max, (len * min));

        if (height[left] <= height[right]) {
            left++
        } else {
            right--;
        }
    }

    return max
};


// const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];

// console.log(maxArea(height));


