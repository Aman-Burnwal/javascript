// Subarray with sum 0 – A subarray in a given array having a sum equal to 0.
// Problem – Given an array having positive and negative numbers.You need to find a subarray having a sum of 0. For
// example –
// Input – { 0, 2, 4, -1, -3, 4, -5, 5 }
// Output –
// Index 3 to 5
// Index 6 to 7


// Approach - We can use hashing concept.Intuition: If we take prefix sum of an array, then every index of a prefix sum
// which has a value as 0, denotes the ending of a subarray starting from index 0 with sum 0
// Also in the prefix sum array every index j that has a repeated value with index i denotes a subarray starting from i + 1 to j
// with sum zero, as the prefix sum remains unchanged at j.
//     Steps –
// 1) Iterate through the array
// 2) Track the sum of elements in a variable
// 3) If sum = 0, there is a subarray from index 0 to the current index
// 4) Verify if sum exists in the hash table
// 5) If sum exists, it means that sum was part of subarray(index 0 to index i) and now the same is for subarray(index
// 0 to index j) and hence subarray(index i + 1 to index j) must be 0
// 6) Add the current sum to the hash table
// Code Link -> https://jsfiddle.net/0e3n1Lgb/






// Time Complexity –
// If there are N characters in string str, then complexity will be O(N)
// Space Complexity –
// If there are N characters in string str, then complexity will be O(N)

// non optimized solution
function subarraySum(arr) {


    let a = {};
    for (let i = 0; i < arr.length - 1; i++) {

        if (arr[i] === 0) continue;
        let sum = arr[i];

        for (let j = i + 1; j < arr.length; j++) {

            sum += arr[j];
            // console.log(sum)
            if (sum === 0) console.log(i, j)
            

        }
    }

    

    
    return;
}

// const arr = [0, 2, 4, -1, -3, 4, -5, 5]
// console.log(subarraySum(arr))


// optimized solution


function subArrayWithZeroSum(arr) {

    var map = new Map();
    var n = arr.length;
    var output = new Array();

    var sum = 0;
    for (var i = 0; i < n; i++) {

        sum += arr[i];

        if (sum == 0) {
            const pair = {
                key: 0,
                value: i
            };
            (output.push(pair) > 0);
        }
        var tempArray = new Array();

        if (map.has(sum)) {

            tempArray = map.get(sum);
            for (var j = 0; j < tempArray.length; j++) {
                const pair = {
                    key: tempArray[j] + 1,
                    value: i
                };
                (output.push(pair) > 0);
            }
        }
        (tempArray.push(i) > 0);
        map.set(sum, tempArray);
    }
    if (output.length == 0) {
        console.log("No subarray having zero sum exists");
    }
    else {
        print(output);
    }

}

function print(out) {
    for (var i = 0; i < out.length; i++) {
        var p = out[i];
        console.log("Index " + p.key + " to " + p.value + "\n");
    }
}

var arr = [0, 2, 4, -1, -3, 4, -5, 5];
var output = subArrayWithZeroSum(arr);

