let arr = [3, 5, 9, 2, 1, 7]
console.log(maxSumSubArrayOfSizeK(arr, 2))


function maxSumSubArrayOfSizeK(arr, k) {

    if(arr.length < k ) {
        return false;
    }

    let sumarraySum = 0, maxsum = 0;

    for(let i = 0 ; i < k; i++) {
        sumarraySum += arr[i];
    }

    maxsum = sumarraySum;

    for(let j = k; j < arr.length; j++) {
        sumarraySum = (sumarraySum + arr[j]) - arr[j - k];

        // if(maxsum < sumarraySum) {
        //     maxsum = sumarraySum;
        // }

        
        // Math.max is a inbuild function that give us maximum numbers between two numbers
        maxsum = Math.max(sumarraySum, maxsum)
    }

    return maxsum;
    
}