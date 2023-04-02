

// brute force method
var successfulPairs = function (spells, potions, success) {

  
    potions.sort((a, b)=> a - b);

    let slen = spells.length;
    let plen = potions.length;

    let sum = [];
  

    for(let i = 0; i < slen; i++) {

        let len = 0;

        for(let j = 0; j < plen; j++) {

            if((potions[j] * spells[i]) >= success) {
             
                len = plen - j ;
                break;
            }
        }
        sum.push(len);
    }

    return sum;
    
};




//optimize solution

var successfulPairs = function (spells, potions, success) {


    potions.sort((a, b) => a - b);

    let slen = spells.length;
    let plen = potions.length;

    let sum = [];


    for (let i = 0; i < slen; i++) {

        let len = 0;

        let left = 0;
        let right = plen - 1;

        while (left <= right) {
            
            let mid = Math.floor((right + left) / 2);

            if (potions[mid] * spells[i] >= success) {

                len = plen - mid;
                right = mid - 1;


            } else {
                left = mid + 1;
            }

        }
 
        sum.push(len);
    }

    return sum;

};


const spells = [5, 1, 3], potions = [1, 2, 3, 4, 5], success = 7


console.log(successfulPairs(spells, potions, success));