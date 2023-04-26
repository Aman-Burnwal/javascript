function min(arr) {

    if (arr.length === 1) return arr[0];


    let mid = parseInt(arr.length / 2);

    let a = min(arr.slice(0, mid));
    let b = min(arr.slice(mid, arr.length));

    let ans = [Math.min(a, b)];
    

    
    

    
    
    return ans;
}


const arr = [43, 23, 14, 4, 6, 32, 293];
console.log(min(arr))

// console.log(arr.slice(2, 4))