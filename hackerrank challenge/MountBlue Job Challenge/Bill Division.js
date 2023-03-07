// https://www.hackerrank.com/contests/mountblue-technologies/challenges/bon-appetit


function bonAppetit(bill, k, b) {
    // Write your code here
    let total = 0;
    for (let i = 0; i < bill.length; i++) {
        if (i !== k) {
            total += bill[i];
        }
    }
    let result = total / 2;
    if (result === b) {
        console.log("Bon Appetit");
    } else {
        console.log(b - result);
    }


        

}

let bill = [4, 1]
let k = [3, 10, 2, 9];
let b = 12;



console.log(bonAppetit(bill, k, b)); 