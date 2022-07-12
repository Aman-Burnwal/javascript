// Print all the prime number up to a given number value.

let num = 2;


function isprime(num){
    if(num < 1){
        return ;
    }
    let primeis = true;
    for(let i = 2; i < num; i++){
        if(num % i === 0){
            primeis = false;
            return primeis; 
        }
    }
    return primeis;
}

for(let j = 2; j <= num; j++){
    if(num >= j){
        if(isprime(j) === true){
            console.log(j);
        }
    }
    
}


