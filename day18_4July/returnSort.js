// Write a program to sort a given data using recursive approach

const array1 = [1, 8, 2, 4, 45, 5];

function sorting(array) {
    length = array.length - 1;
    for (let i = 0; i <= length; i++) {
        for (let j = 0; j <= length; j++) {
            if(array[j] > 9){
                
            }
            if (array[j] < array[j - 1]) {
                let temp = array[j];
                array[j] = array[j - 1] 
                array[j - 1] = temp;
                
                
            }

        }
    }
    return array;
}
console.log(sorting(array1));
