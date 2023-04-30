function min(arr) {

    if (arr.length === 1) return arr[0];


    let mid = parseInt(arr.length / 2);

    let a = min(arr.slice(0, mid));
    let b = min(arr.slice(mid, arr.length));

    let ans = [Math.min(a, b)];
    

    
    

    
    
    return ans;
}


function minMax(arr) {

    if (arr.length === 1) return { max: arr[0], min: arr[0] };

    if (arr.length === 2) {
        return {
            max : Math.max(arr[0], arr[1]), min : Math.min(arr[0], arr[1])
        };

    }

    let mid = Math.floor(arr.length / 2);

    let left = minMax(arr.slice(0, mid));
    let right = minMax(arr.slice(mid, arr.length));

    return ({ max: Math.max(left.max, right.max), min: Math.min(left.min, right.min) });
}



const arr = [43, 23, 14, 4, 6, 32, 293];

console.log(minMax(arr));
// console.log(min(arr))

// console.log(arr.slice(2, 4))




function consumer() {
    for (let i = 0; i < 20; i++) {
        while (buffer.length === 0) { }
        // wait for buffer to have items
        const item = buffer.shift();
        // remove item from buffer
        console.log(`Consumed item: ${item}`);
    }
}
