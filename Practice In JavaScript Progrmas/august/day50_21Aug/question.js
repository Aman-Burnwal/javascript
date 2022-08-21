// consider an array a consisting of N possible integer. 
// An array B is a subarray of an array A 
// if B can be obtained from A by deletion of several (possible,zero and all) 
// element from brgining and sevral (possibly, zero or all) elements from the end. 
// in particular an array is a subarray of itself. 
// A nice array is an array satisfying the below condition :
//  Bitwise AND of any two elements of the array must be zero.
//  more formally for any two integers i and j, Bitwise AND of the Ith and jth elements of the array must be zero.

let arr = [6, 2, 4, 1, 7];
console.log(subarray(arr));


function subarray(arr) {
    let newArr = [];

    for (let i = 0; i < arr.length - 1; i++) {


        for (let j = i + 1; j < arr.length; j++) {

            if ((arr[i] & arr[j]) === 0000) {
                newArr.push(arr[i], arr[j])
            }

        }


    }

    let uniqueChars = newArr.filter((x, index) => {
        return newArr.indexOf(x) === index;
    });


    let set = new Set();
    for (let i = 0; i < uniqueChars.length - 1; i++) {


        for (let j = i + 1; j < uniqueChars.length; j++) {

            if ((uniqueChars[i] & uniqueChars[j]) === 0000) {
                set.add(uniqueChars[i], uniqueChars[j])
            }

        }

    }


    return set.size


}


