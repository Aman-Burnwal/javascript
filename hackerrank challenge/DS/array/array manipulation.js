// optimized solution


function arrayManipulation(n, queries) {
    // Write your code here

    const arr = new Array(n + 1).fill(0);
    let max = 0;

    for (let i = 0; i < queries.length; i++) {
        const a = queries[i][0] - 1;
        const b = queries[i][1];
        const k = queries[i][2];

        arr[a] += k;

        arr[b ] -= k;


    }

    for (let i = 1; i < arr.length; i++) {

        arr[i] += arr[i - 1]
        max = Math.max(max, arr[i]);
        

    }
    
    return max;

}

const n = 10;

const arr = [
    [1, 2, 100],
    [2, 5, 100],
    [3, 4, 100]
];

console.log(arrayManipulation(n, arr))








// brute force method
// this solution will not be accepted

// function arrayManipulation(n, queries) {
//     // Write your code here

//     const arr = new Array(n).fill(0);
//     let max = 0;

//     for (let i = 0; i < queries.length; i++) {
//         const a = queries[i][0] - 1;
//         const b = queries[i][1];
//         const k = queries[i][2];

//         for (let j = a; j < b; j++) {

//             arr[j] += k;
//             max = Math.max(arr[j], max);
//         }
//     }
//     return max;

// }