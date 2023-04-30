function power(n, pow) {
    
    if (pow === 1) return pow * n;

    let mid = pow / 2;

    let a = power(n, parseInt(mid));

    if (mid === parseInt(mid))  return a * a;
    
    else return  a * power(n, Math.ceil(mid))
}

console.log(power(2, 9))