const array = [
    [2, 14, 15, 16],
    [7, 18, 20, 22],
    [8, 21, 23, 24],
    [9, 26, 27, 28]
];

console.log(secondMaxElement(array));

function secondMaxElement(arr) {
    let searchElement = new Array();

    for(let i = 0; i < arr.length; i++) {
        let max = arr[i][0];
        let secMax = arr[i][0];
        for(let j = 1; j < arr[i].length; j++) {
            if(arr[i][j] > max) {
                secMax = max;
                max = arr[i][j]
            } else if( arr[i][j] > secMax && arr[i][j] < max) {
                secMax = arr[i][j]
            }
        }

        searchElement.push(secMax);
    }
    return searchElement;
}