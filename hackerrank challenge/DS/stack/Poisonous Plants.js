function poisonousPlants(p) {
    // Write your code here

  
    let days = 0;

    for (let i = 1; i < p.length; i++) {

        let curr = p[i - 1];
        let max = 0;
        if (curr < p[i] ) {
            while (curr < p[i] && i < p.length) {
                i++;
                max++;

                console.log(curr, p[i], max, days)
            }
            
        }
        
        days = Math.max(days, max);
        
    }
    return days;

}

console.log(poisonousPlants([3, 2, 5, 4]))