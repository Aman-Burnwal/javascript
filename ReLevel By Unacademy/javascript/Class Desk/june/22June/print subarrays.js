// A subarray of an array is defined as the contiguous cross section of the array. Example: [1,2,3] has
// the following subarrays: [1],[2],[3],[1,2],[2,3].[1,2,3] Given an array print all the subarrays of the given
// array
// Example-1
// Input: [1,2,3]
// Output: [1],[2],[3],[1,2],[2,3].[1,2,3]


let array = [1, 2, 3];
console.log(subarray(array));

function subarray (array) {

    let temp = [], result = [];
    for(let i = 0; i < array.length; i++) {
        for (let j = i; j < array.length; j++) {
            for (let k = i; k <= j; k++) {
                // console.log(array[k] + " ")
                temp.push(array[k]);
            }
            // console.log();
            result.push(temp)
            temp = []
        }
    }
    return result
}