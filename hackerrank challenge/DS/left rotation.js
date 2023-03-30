
// solution 1
function rotateLeft(d, arr) {
    // Write your code here

    d = d % arr.length;
    let rArr = [];

    for (let i = 0; i < arr.length; i++) {

        let idx = (i + d) % arr.length;

        rArr[i] = arr[idx];

    }

    return rArr;

}



// solution 2;

function rotateLeft(d, arr) {
    // Write your code here

    let rotation = d % arr.length;

    const roted = [...arr.slice(rotation), ...arr(0, arr.length)]

    return roted;

}