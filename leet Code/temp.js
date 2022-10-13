function times(arr, k) {
    let map = new Map();

    for (let i = 0; i < arr.length; i++) {
        if (map.has(arr[i])) {
            let temp = map.get(arr[i]);
            temp++;
            map.set(arr[i], temp)
        } else {
            map.set(arr[i], 1);
        }
    }

    console.log(map)
}

let arr = []