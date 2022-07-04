// create a program thats find smallest number without using comparssion operator

a = 25; 
b = 12; 
c = 8;

for(let i = a; i >= 0; i-- ){
    
    a -= 1;
    b -= 1;
    c -= 1;

    if(a === 0){
        i = a;
        console.log('A');
    } else if(b === 0){
        console.log('B');
        i = b;
    } else if(c === 0){
        i = c;
        console.log('C');
    }
    
}