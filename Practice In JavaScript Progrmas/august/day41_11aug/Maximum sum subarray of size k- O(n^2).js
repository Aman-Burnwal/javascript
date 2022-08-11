// Maximum sum subarray of size k- O(n^2)

let arr = [3, 5, 2, 1, 7, 6]
console.log(maxSumSubArrayOfSizeK(arr, 3))

function maxSumSubArrayOfSizeK(arr, k) {
    let maxsum = 0;
    for(let i = 0; i <= arr.length - k; i++) {

        if(arr. length < k) {
            return false;
        }
        let sum = 0;
        for (let j = i; j < i + k; j++) {
            sum += arr[j]
            
        }
        
        if(sum > maxsum) {
            maxsum = sum;
        }
    }
    return maxsum;
}