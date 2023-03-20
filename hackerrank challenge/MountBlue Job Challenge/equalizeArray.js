
function equalizeArray(arr) {
    // Write your code here

    let hasMap = {};

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] in hasMap) {

            hasMap[arr[i]] = ++hasMap[arr[i]];
        }
        
        else hasMap[arr[i]] = 1;

       
    }

    let max = -Infinity;
    for (let i in hasMap) {
        max = Math.max(max, hasMap[i])
        
    }
    return arr.length - max;

}

console.log(equalizeArray([1, 3, 4, 5, 3, 2, 3, 5]));