function squareSum(num){
    var a = 0;
    while(a * a < num){
        var b = 0;
        while(b * b < num){
            if(a * a + b * b === num){
                if(a <= b){
                    console.log(a + "," +b)
                }
            }
            b += num;
        }
        a += 1;
    } 
}

squareSum(50)

