
function printFirstNegativeInteger(n, k, arr) {
   
    let result = [];
    let queue = [];
    

    for (let i = 0; i < k; i++) {

        if (arr[i] < 0) queue.push(arr[i]);

    }

    result.push(queue[0] || 0);

    let start = 0;

    for (let i = k; i < n; i++) {

        if (arr[i - k] < 0) {
            
            start++;
        }

        if (arr[i] < 0) {
            
            queue.push(arr[i]);
        }

        result.push(queue[start] || 0)
    }
    return result;
}


const N = 5, A = [- 8, 2, 3, -6, 10], K = 2;

console.log(printFirstNegativeInteger(N, K, A))