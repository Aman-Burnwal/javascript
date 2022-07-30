// error 
const arr = [1, 3, 23, 2, 8, 9, 12];
 
console.log(partion(arr, 0, arr.length - 1));

function partion(arr, l, r) {
    
    let random = Math.floor(Math.random() * (r - l) + l);
    
    let pivit = random;

    random = arr[r];

    arr[r] = pivit;

    let i = l - 1;

    for(j = l; j <= r - 1; j++) {
        if(arr[j] < pivit) {
            i++
            let temp = arr[j];
            arr[j] = arr[i];
            arr[i] = temp;
        }

    }

    let temp = arr[i + i];
        arr[i + 1] = arr[r];
        arr[r] = temp;

        return(arr);



}