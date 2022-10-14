// Given an integer array arr, return true if there are three consecutive odd numbers in the array.Otherwise, return false.


//     Example 1:

// Input: arr = [2, 6, 4, 1]
// Output: false
// Explanation: There are no three consecutive odds.
//     Example 2:

// Input: arr = [1, 2, 34, 3, 4, 5, 7, 23, 12]
// Output: true
// Explanation: [5, 7, 23] are three consecutive odds.


//     Constraints:

// 1 <= arr.length <= 1000
// 1 <= arr[i] <= 1000




/**
 * @param {number[]} arr
 * @return {boolean}
 */
var threeConsecutiveOdds = function (arr) {

    // if array length is less than 3 then it should return false;
    if (arr.length < 3) return false;

    // creating a blank array;
    // this array will be used for return the consecutive odd numbers
    let arr1 = [];

    // getting the array length
    let len = arr.length;
    // creating a loop;
    // len - 2 because we need atleast 3 indexes;
    for (let i = 0; i < len - 2; i++) {

        // if our number is odd
        if (arr[i] % 2 !== 0 ) {

            // next loop should run 3 times
            run = i + 2;
            
            // loop will run three times and 
            while(i <= run && i < len ) {

                if (arr[i] % 2 !== 0) {

                    arr1.push(arr[i])

                } else {
                    arr1 = [];

                    break;
                } 
                i++;

                if (arr1.length === 3) {
                    // console.log(arr1)
                    // console.log(arr1.length)
                    return true;
                }
            }
        }
    }
    return false;

};


const arr  = [1, 2, 34, 3, 4, 5, 7, 23, 12]

console.log(threeConsecutiveOdds(arr));

