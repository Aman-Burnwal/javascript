function beautifulTriplets(d, arr) {
    // Write your code here

    // arr.sort((a, b) => a - b);

    let set = new Set();

    for (let i in arr) {
        set.add(arr[i]);
    }

    let count = 0;

    for (let i = 0; i < arr.length; i++) {

        let a = arr[i]
       
        if (set.has(a + d)) {
         
            let b = (a + d);
       

            if (set.has(b + d)) count++;
        }
    }
    return count;

}

console.log(beautifulTriplets(3, [1, 2, 4, 5, 7, 8, 10]))
