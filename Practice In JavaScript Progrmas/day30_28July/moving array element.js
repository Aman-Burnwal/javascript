const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(moving(arr, 3));

function moving(arr, n) {

    let arr2 = new Array() 
    for(let i = arr.length - n; i < arr.length; i++) {
        let num = arr[i];
        arr2.push(num);
    }

    for (let i = 0; i < arr.length - n; i++) {
        let num = arr[i];
        arr2.push(num);
    }

    return arr2;
}