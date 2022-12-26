//{ Driver Code Starts
//Initial Template for javascript
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });

    main();
});

function readLine() {
    return inputString[currentLine++];
}



function main() {
    let t = parseInt(readLine());
    for (let i = 0; i < t; i++) {
        let input_line = readLine().split(" ");
        let n = parseInt(input_line[0]);
        let k = parseInt(input_line[1]);
        let a = new Array(n);
        input_line = readLine().split(" ");
        for (let i = 0; i < n; i++)
            a[i] = parseInt(input_line[i]);

        let obj = new Solution();
        let ans = obj.max_of_subarrays(a, n, k);
        let s = "";
        for (let i = 0; i < ans.length; i++) {
            if (ans[i] == -0)
                s += "0";
            else
                s += ans[i];
            s += " ";
        }
        console.log(s);
    }
}

// } Driver Code Ends


//User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} n
 * @param {number} k
 * @returns {number[]}
*/
class Solution {
    //Function to find maximum of each subarray of size k.
    max_of_subarrays(arr, n, k) {
        // code here

        let i = 0;

        let que = [];

        for (i; i < k; i++) {

            if (que.length === 0) {

                que.push(arr[i])

            } else if (que[que.length - 1] <= arr[i]) {

                while (que.length) {

                    if (que[que.length - 1] <= arr[i]) {
                        que.pop()
                    } else {
                        break;
                    }
                }
                que.push(arr[i])

            } else {

                que.push(arr[i])
            }

        }
        let ans = []
        ans.push(que[0])
        let start = 0;
        for (i; i < n; i++) {

            if (que[0] === arr[i - k]) {
                start++;
            }

            if (que.length === 0) {

                que.push(arr[i])

            } else if (que[que.length - 1] <= arr[i]) {

                while (que.length) {

                    if (que[que.length - 1] <= arr[i]) {
                        que.pop()
                    } else {
                        break;
                    }
                }
                que.push(arr[i])

            } else {

                que.push(arr[i])
            }
            ans.push(que[start])
        }

        return ans;

    }
}
