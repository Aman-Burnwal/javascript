// Problem - 1
// Given an array of length N, where every element is present twice and only one element is present once.
// Find the unique element

// Sample input: 
// N = 5, Array = [3,2,1,2,3]
// Sample output:
// 1


const array = [3, 2, 1, 1, 5, 2, 3];
let N = 6;

// using xor operator

//Bitwise operator XOR to achieve this -> O(n)
function findSingle(arr) {

    let result = arr[0]
    
    for (let i = 1; i < arr.length; i++) {
        
        result = result ^ arr[i]
        
    }

    return result;
}

//findUniqueElement(arr)
let arr1 = [1, 2, 3, 3, 2, 1, 4]
console.log(findSingle(array))












// using basic function

// this is not a good solution cause you may get multiple of unique elements but our question says that there must be
// only one unique element and others should be in pairs

// uniqueElement(array, N);

function uniqueElement(array, N) {

    if (N === 1) {
        return array
    }

    if (N < 1) {

        return console.log("Not a valid array")
    }

    let i = 0, unique = new Array(), k = 0;
    while (i < N) {
        let match = false;
        for (let j = 0; j < N; j++) {
            if (j === i) {
                continue;
            }
            if (array[i] === array[j]) {
                match = true;
                break;
            }
        }
        if (match != true) {

            unique[k] = array[i]
            k++;
        }
        i++;
    }
    return console.log(unique);
}


//using hash map
// this is not a good solution cause you may get multiple of unique elements but our question says that there must be
// only one unique element and others should be in pairs

// <!--not a valid solution -->
// hashMap(array, N);
function hashMap(array, N) {
    let map = new Map();

    for (let i = 0; i < N; i++) {
        if (map.has(array[i])) {
            let value = map.has(array[i]);
            map.set(array[i], ++value)
            continue;
        } else {
            map.set(array[i], 1);
        }
    }



    return map.forEach((x, y) => y === 1 ? console.log(x) : "")
}


