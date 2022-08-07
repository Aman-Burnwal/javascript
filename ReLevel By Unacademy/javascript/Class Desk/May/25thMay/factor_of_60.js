// 60 a Factor (20 min)
// BED-Class #180DaysofPurpose
// Problem Statement:
// Given a number A you are supposed to take the digits of that number, and find a permutation such
// that 60 becomes a factor of that permutation. If there exists such permutation then return 1 else 0.

// Input 2340
// Output 1

// Example-2:

// Input 24
// Output 0

function isDivisibleBy60( num ){
    let sum = 0;
    if(num % 10 === 0) {
        num = Math.floor(num / 10);
        let lastTwoNum = num % 100;
        while(true) {
            if(num < 9){
                sum += num % 10;
                break;
            }
            sum += num % 10;
            num = Math.floor(num / 10);

        }
        if(sum % 3 === 0 && lastTwoNum % 4 === 0) {
            return 1;
        }else {
            return 0;
        }
    }
    else {
        return 0;
    }

}
   let number = 34440;
   console.log(isDivisibleBy60(number));
   

