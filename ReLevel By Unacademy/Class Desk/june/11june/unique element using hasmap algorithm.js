// a element will be called unique if that element occurs only once in whole array

const array = [
    [2,  14, 15, 18],
    [10, 18, 14, 22],
    [8,  26, 22, 15],
    [10, 14, 21, 28]
];

hashMap(array, array.length, array[0].length);

function hashMap(arr, M, N) {
    let map = new Map() 

    for(let i = 0; i < M; i++) {
        for(let j = 0; j < N; j++) {
            if(map.get(arr[i][j]) >= 1) {
                let val = map.get(arr[i][j]);
                map.set(arr[i][j], ++val)
            } else {
                map.set(arr[i][j], 1);
            }
        }
    }

    map.forEach((val, indx) => {if(val === 1) console.log(indx)})
    return;
}