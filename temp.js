// your code goes here


// var n = readline();


// let arr = [...n.split(", ")];
// // console.log(arr);

let arr = [2, 4, 6];
console.log(findingHcf(arr));
function findingHcf(arr) {

    let hcf = arr[0];
    for (let i = 1; i < arr.length; i++) {

        hcf = find(hcf, arr[i]);

    }

    return hcf;
}

// console.log(arr)
function find(hcf, val) {

    if (hcf > val)  [hcf, val] = [val, hcf];

    for (let i = hcf; i >= 1; i--) {

        if (val % i === 0)   return i;
    }

}



