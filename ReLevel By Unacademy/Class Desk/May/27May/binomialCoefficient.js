function binomialCoefficient(n , k){
    //Base cases
    if(k > n){
      return 0;
    }
    
    if(k === 0 || k === n){
      return 1;
    }
    
    return binomialCoefficient(n - 1, k - 1) + binomialCoefficient(n - 1, k);
  }
  
  console.log(binomialCoefficient(6, 4));
  