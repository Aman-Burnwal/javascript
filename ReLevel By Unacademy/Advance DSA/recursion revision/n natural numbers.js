function natural(n) {
    
    if (n == 0) {
        return 0;
    }
    

    natural(n - 1);
    console.log(n)
  
    
}

(natural(5));
