let arr = [1, 3,- 4, 4 , -3, 5, -19, 13, 19]
//[1, 3, 19, 4, 13, 5, -19 -3 -4];


function arrangement(array) {

    let length = array.length - 1;

    for(let i = 0; i < array.length; i++) {

        if(i === length) {
            break;
        }

        if(array[i] > 0) {
            continue;
        }

        let temp = array[i]
        array[i] = array[length];
        array[length] = temp;
        
        length--;

    }

    return array;
}

console.log(arrangement(arr));