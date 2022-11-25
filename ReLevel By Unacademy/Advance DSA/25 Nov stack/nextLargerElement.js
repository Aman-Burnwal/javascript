// your code goes here

function nextLargerElement(N, arr) {

    let stack = [];

    let ans = [];

    for (let i = N - 1; i >= 0; i--) {


        while (stack.length && stack[stack.length - 1] <= arr[i]) {
            stack.pop();
        }

        stack.length === 0 ? ans[i] = -1 : ans[i] = stack[stack.length - 1];

        stack.push(arr[i])

    }
    console.log(ans)
    return ans
}

nextLargerElement(4, [1, 3, 2, 4])

