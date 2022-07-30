array = [1,2, 6, 3, 4, 7, 1];

function isDublicateElemet(array) {
    for(let i = 0; i < array.length - 1; i++) {
        for(let j = i + 1; j < array.length; j++){
            if(array[i] === array[j]) {
                return true;
            }
        }
    }
    return false;
}

let result = isDublicateElemet(array);

console.log(result);

