// Farmer John has built a new long barn, with N(2 <= N <= 100, 000) stalls.The stalls are located along a straight line at positions x1,..., xN(0 <= xi <= 1, 000, 000, 000).

// His C(2 <= C <= N) cows don't like this barn layout and become aggressive towards each other once put into a stall. To prevent the cows from hurting each other, FJ wants to assign the cows to the stalls, such that the minimum distance between any two of them is as large as possible. What is the largest minimum distance?
// Input

// t – the number of test cases, then t test cases follows.
// * Line 1: Two space - separated integers: N and C
//     * Lines 2..N + 1: Line i + 1 contains an integer stall location, xi
// Output

// For each test case output one integer: the largest minimum distance.
//     Example

// Input:

// 1
// 5 3
// 1
// 2
// 8
// 4
// 9

// Output:

// 3

// Output details:

// FJ can put his 3 cows in the stalls at positions 1, 4 and 8,
//     resulting in a minimum distance of 3




// aggressive cows SPOJ;

// 1. brute force
// time complexity: O(n^2)
// space complexity: O(1)
// function aggressiveCows(arr, cows) {

//     let max = 0;

//     for (let i = 0; i < arr.length; i++) {
//         let count = 1;
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[j] - arr[i] >= max) {
//                 count++;
//                 i = j;
//             }
//         }
//         if (count >= cows) {
//             max++;
//         }
//     }
//     return max;
// }

// 2. binary search
// time complexity: O(nlogn)
// space complexity: O(1)

let t = Number(readline());

while (t--) {
    function aggressiveCows(arr, cows) {


        let beg = 0;
        let end = arr[arr.length - 1] - arr[0];

        while (beg <= end) {
            let mid = Math.floor((beg + end) / 2);

            if (isPossible(arr, cows, mid)) {

                beg = mid + 1;

            } else {
                end = mid - 1;
            }
            console.log(mid);
        }
        return end;
    }
}

function isPossible(arr, cows, mid) {
    let count = 1;
    let prev = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] - prev >= mid) {
            count++;
            prev = arr[i];
        }
    }
    return count >= cows;
}

console.log(aggressiveCows([1, 2, 8, 4, 9], 3));
