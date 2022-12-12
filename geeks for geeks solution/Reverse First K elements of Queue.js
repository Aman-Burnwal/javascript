function modifyQueue(queue, k) {
    // your code here

    k = k % queue.length;

    for (let i = 0; i < k / 2; i++) {
        [queue[i], queue[k - i - 1]] = [queue[k - i - 1], queue[i]]
    }

    return queue
}


// function f(q, k) {
//     let stack = []
//     let ans = []

//     for (let i = 0; i < k; i++) {
//         stack.push(q.shift())
//     }

//     while (stack.length > 0) {
//         ans.push(stack.pop())
//     }

//     while (q.length > 0) {
//         ans.push(q.shift())
//     }

//     return ans;
// }

// let q = [1, 2, 3, 4, 5]
// console.log(f(q, 4))

console.log(modifyQueue([1, 2, 3, 4, 5], 2))