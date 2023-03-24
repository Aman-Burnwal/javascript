function maxMin(k, arr) {
    // Write your code here
    
    arr.sort((a, b) => a - b);
    
    let min = Infinity;
    
    for(let i = 0; i < arr.length - k; i++) {
        
        if(arr[i + k - 1] - arr[i] < min) min = arr[i + k - 1] - arr[i];
    }
    return min;
    
    
    

}