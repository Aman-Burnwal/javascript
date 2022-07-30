function bubbleSort(array) {
    for(let i = 0; i < array.length - 1 ; i++) {
        let isSwaped = false;
        
        for(let j = 0; j < array.length - i - 1; j++) {
            if(array[j] > array[j + 1]) {
                temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;

                isSwaped = true;
            }
        }

        if(isSwaped != true){
            break;
        }
    }

    return array;
} 

let arr = [2, 5, 1, 8, 0, 1];

console.log(bubbleSort(arr));