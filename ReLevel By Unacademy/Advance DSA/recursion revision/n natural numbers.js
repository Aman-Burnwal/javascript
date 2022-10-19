function natural(n) {
    
    if (n == 1) {
        console.log(n)
        return;
    }
    

    natural(n - 1);
    console.log(n)
  
    
}

(natural(5));
