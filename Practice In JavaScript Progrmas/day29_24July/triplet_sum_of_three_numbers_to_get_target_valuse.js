// Requirements: "Given an array. You need to find a triplet that will be having sum as a target. A Triplet is a set of 3 numbers.
let Input = [3, 6, 5, 2, 10]
let Target = 11
// Output - [3,6,2]

console.log(triplet(Input, Target));

function triplet(arr, target) {
    let length = arr.length;

    if(length < 3) {
        return;
    }
    let tripletNum = new Array();

    for(let i = 0; i < length - 2; i++) {

        for(let j = i + 1; j < length - 1; j++) {
            
            for(let k = j + 1; k < length; k++) {

                if(arr[i] + arr[j] + arr[k] === target) {
                    
                    tripletNum.push(arr[i], arr[j], arr[k]);
                    
                    return tripletNum;
                }
            }

        }

    }
}


 