function strangeCounter(t) {
   
    let value = 3;

    

    while (t > value) {

        t -= value;
        value *= 2;
    

    
    }

    return (value - t + 1);
}





const x = 4;
console.log(strangeCounter(14))