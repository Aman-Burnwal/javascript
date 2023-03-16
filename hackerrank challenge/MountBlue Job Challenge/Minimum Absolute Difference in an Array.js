

// brute force method

function minimumAbsoluteDifference(arr) {
    // Write your code here
    let min = Number.MAX_VALUE;

    for (let i = 0; i < arr.length - 1; i++) {

        for (let j = i + 1; j < arr.length; j++) {

            let sum = arr[i] - arr[j];
            let sum2 = arr[j] - arr[i];

            if (sum < 0) sum = -sum;
            if (sum2 < 0) sum2 = -sum2;

            sum = Math.min(sum, sum2)

           

            if (min > sum) min = sum;
            console.log(sum)
            console.log(min)
            
        }
        
    }
    return min;
}

// optimized method

function minimumAbsoluteDifference(arr) {
    // Write your code here
    let min = Number.MAX_VALUE;

    arr.sort((a, b) => a - b)

    for (let i = 0; i < arr.length - 1; i++) {

        min = Math.min(min, Math.abs(arr[i] - arr[i + 1]))
    }
    return min;
}
let arr = [-59, -36, -13, 1, -53, -92, -2, -96, -54, 75];

console.log(minimumAbsoluteDifference(arr))