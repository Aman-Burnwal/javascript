// determine the length of the smallest substring that contains the maximum numberof distinct charaters.

// Input: "aabacbebebe"
// Output: 5

// Input: "aabbcc"
// Output: 2

// Input: "aaab"
// Output: 3


// Path: ReLevel By Unacademy\Advance DSA\02 November Problem Solving on Binary SEarch\assignment\assignment1.js
// Compare this snippet from ReLevel By Unacademy\Advance DSA\07 November revise sorting\roti and paratha.js:
// var tests = Number(readline());
//
while (tests--) {
    var p = Number(readline());
    var cooks = readline().split(" ").map(x => Number(x));

    var L = cooks[0];

    let beg = 0;

    let end = 4 * p * (p + 1);
//
    while (beg <= end) {
        var mid = Math.floor((beg + end)/2)
    };
}