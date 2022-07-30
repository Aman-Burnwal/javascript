function subarray(array) {
    let length = array.length;

        for(j = 0; j < length; j++) {
            let temp = [];
            for(k = j; k < length; k++) {

                temp.push(array[k]);
                console.log(temp);
            }
        }

    return;
}

let array = [1,2, 3, 4, 5, 6];
subarray(array);