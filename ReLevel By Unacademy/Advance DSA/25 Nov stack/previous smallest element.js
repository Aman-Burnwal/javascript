function immediateSmaller(arr, n) {
    //code here

    let stack = [];
    let ans = [];

    for (let i = 0; i < n; i++) {

        while (stack.length && stack[stack.length - 1] >= arr[i]) {
            stack.pop();
        }
       
        stack.length === 0 ? ans[i] = -1 : ans[i] = stack[stack.length - 1];

        stack.push(arr[i])
    }
    return ans;

}

console.log(immediateSmaller([2, 3, 4, 5, 1], 5));

