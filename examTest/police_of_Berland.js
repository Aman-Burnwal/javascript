// 6

// 0 0 1 0 1 0
// 0 -> non engineers
// 1 -> engineers


function numOfHouses(array){
    let lenngth = array.length - 1;
    let count = 0;
    for(let i = 1; i < lenngth; i++){
        if(array[i] === 1 && array[i - 1] === 0 && array[i + 1] === 0 ){
            count += 1;
            i += 1;
        }
    }
    return count;
}

const array = [0, 0, 1, 0, 1,  ]
console.log(numOfHouses(array));