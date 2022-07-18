// Requirements: "1.) Given 2 numbers as input. You need to find if they have opposite signs or not.
// Input -> +123, -12
// Output -> true"

class MyApp{
    constructor(num1, num2){
        this.num1 = num1;
        this.num2 = num2;
    }
    oppositeSign(num1, num2) {
        if(num1 > 0 && num2 < 0 ) {
            return true;
        } else if (num1 < 0 && num2 > 0) {
            return true
        } else {
            return false;
        }
    }
}

let myapp1 = new MyApp;
console.log(myapp1.oppositeSign(-12, -12))