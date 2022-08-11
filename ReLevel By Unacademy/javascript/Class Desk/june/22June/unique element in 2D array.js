// Problem - 7
// Given a 2D array. Our task is to find the unique elements. A unique element is an element whose
// frequency is 1 i.e. it is not repeating in the whole 2D Array.
// If there is no any unique element, print message as “No unique element found”

// Input: const arr = [
//     [2, 14, 15, 18],
//     [10, 18, 14, 22],
//     [8, 21, 22, 15],
//     [10, 14, 21, 28],
// ];

// Output: 2, 8, 28


// solution


const arr = [
    [2, 14, 15, 18],
    [10, 18, 14, 22],
    [8, 21, 22, 15],
    [10, 14, 21, 28],
];

uniqueElements(arr);

function uniqueElements(arr) {

    let map = new Map();

    arr.forEach(element => {

        element.forEach((e) => {

            if(map.has(e)) {

                val = map.get(e);

                map.set(e, ++val);

            } else{
                map.set(e, 1);
            }
            
        })
    });

    let unique = new Array();

    for (let [key, value] of map.entries()) {

        value === 1 ? unique.push(key): "";

    }

    if(unique.length > 0 ) {
        return console.log(unique);
    } else {
        return console.log("No unique element fournd")
    }

    
}