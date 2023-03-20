
function flippingBits(n) {
    // Write your code here



    let bit = ""

    while (n) {
        
        if (n % 2 === 0) {
            bit = "0" + bit;

            n /= 2;
        } else {

            n = Math.floor(n / 2);
            bit = "1" + bit;
        }
    }


    while (bit.length !== 32) {
        bit = "0" + bit;
    }


 


   
    let sum = 0;
 


    for (let i = 0; i < 32; i++) {

        if (bit[i] == "0") {
            
            
            sum += Math.pow(2, 31 - i)
            

          
        }
   

        
    }
    return sum ;




}

console.log(flippingBits(123456))

