//Print all subarrays
function printSubArrays(arr) {
    let result = [], temp = [];
    for (let startPoint = 0; startPoint < arr.length; startPoint++) {
        for (let group = startPoint; group < arr.length; group++) {
            for (let i = startPoint; i <= group; i++) {
                temp.push(arr[i])
            }
            result.push(temp);
            temp = [];
        }
    }

    return result
}

let arr = [1, 2, 3]
console.log(printSubArrays(arr))
