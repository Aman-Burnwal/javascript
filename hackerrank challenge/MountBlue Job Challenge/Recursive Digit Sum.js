function superDigit2(n, k) {
    // Write your code here

    if (k === 1) return n;


    n = String(n);
   
    let sum = 0;
    for (let i = 0; i < n.length; i++) {

        sum += Number(n[i]);
       
    }

    
   console.log(sum, k)

    return superDigit2(sum, String(sum).length)
   

}

function superDigit(n, k) {

    if (k === 1) return n;


    n = String(n);

    let sum = 0;
    for (let i = 0; i < n.length; i++) {

        sum += Number(n[i]);

    }

  

    return superDigit2(sum * k, String(sum *k).length)

}

console.log(superDigit(123, 3))

