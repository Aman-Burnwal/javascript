function fabonaci(num){

    if(num === 0 || num === 1){
        return num;
    }

    
    return fabonaci(num - 1) + fabonaci(num - 2);


}


console.log(fabonaci(10));