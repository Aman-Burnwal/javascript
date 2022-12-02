// /**
//  * @param {number[]} arr
//  * @return {number}
//  */
var sumSubarrayMins = function (arr) {

    let stack = [];
    let ans = 0;

    let nxse = nse(arr, arr.length);
    // console.log(nxse);
    let psse = pse(arr, arr.length);

    for (let i = 0; i < arr.length; i++) {

        let start = nxse[i] - i;
        let end = i - psse[i];


        stack.push(start * end);

        ans += stack[i] * arr[i]



    }

    return ans;

};


function nse(arr, len) {

    let stack = [];
    let ns = [];
    for (let i = len - 1; i >= 0; i--) {

        if (stack.length === 0) {

            ns[i] = len;

        } else {
            

            while (stack.length && arr[stack[stack.length - 1]] >= arr[i]) {

                stack.pop();
            }

            ns[i] = stack.length === 0 ? len : stack[stack.length - 1]
        }
        
        stack.push(i);

        // console.log(stack, i)
        // console.log(ns)
                
    }

    return ns;
}
console.log(nse([71, 55, 82, 55], 4))

function pse(arr, len) {

    let stack = [];
    let ans = [];

    for (let i = 0; i < len; i++) {

        if (stack.length === 0) {
            ans[i] = -1;
        } else {
            while (stack.length && arr[stack[stack.length - 1]] >= arr[i]) {
                stack.pop();
            }

            ans[i] = stack.length === 0 ? -1 : stack[stack.length - 1]
        }
        stack.push(i)
    }
    return ans;
}
// console.log(sumSubarrayMins([71, 55, 82, 55]))

// console.log(pse([3, 12, 4, 1, 19], 5))