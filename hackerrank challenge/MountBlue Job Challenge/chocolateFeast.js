function chocolateFeast(n, c, m) {
    // Write your code here


    let choclate =Math.floor( n / c);

    let cover = choclate;

    let coverLeft = 0;
    let i = 0;
    while (cover >= m) {
   
        let newChoclate = Math.floor(cover / m);

        choclate += newChoclate;

        coverLeft = cover % m;

        cover = newChoclate + coverLeft;

        console.log(cover, coverLeft);
        if (i === 5) break;
        i++;
        
  
    }

    return choclate;
}

console.log(chocolateFeast(12, 4, 4))