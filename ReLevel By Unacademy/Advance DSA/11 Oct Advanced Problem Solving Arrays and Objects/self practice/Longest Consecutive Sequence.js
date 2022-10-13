// Longest consecutive sequence – A sequence having elements as consecutive integers.Consecutive integers can be
//     in any order.
//         Problem – Given an array.You need to find the length of the longest consecutive sequence such that elements are
// consecutive integers.For example –
// Input – { 35, 3, 4, 88, 9, 10, 21, 5, 6 }
// Output – 4
// Sequence is 3, 4, 5, 6


function longestConsecutiveSequence(arr) {

    if (arr.length === 0) return 0;

    let obj = {};
    let max = 0;
    let count = 0;

    for (let i = 0; i < arr.length; i++) {

        if (!obj[arr[i]]) obj[arr[i]] = true;

    }

    for (let i = 1; i < arr.length; i++) {

        let val = arr[i];
        


        if (!obj[val - 1]) {

            
            while (obj[val++]) {

                count++;

            }

        } 
        max = Math.max(max, count);
        count = 0;
    }
    return max;
}

const arr = [2, 5, 3, 4, 9, 10, 34, 11, 12, 13];
console.log(longestConsecutiveSequence(arr))

