
let array = [1,2, 3, 4, 5, 6,7, 8 , 9];

let two = 4;

// sumOfSubArray(array, two);


function sumOfSubArray(array, elementsnum){
    // index = elementsnum - 1;
    let sum = 0;
    for(let i = 0; i < elementsnum; i++){
        sum += array[i];
    }

    for(let i = elementsnum - 1; i < array.length; i++){
        console.log(sum);
        sum = sum + array[i + 1] - array[i - 2];

    }
    return;
}
