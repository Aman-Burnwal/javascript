function incre(num){
    if(num === 1){
        console.log(1)
        return;
    }

    incre(num - 1);
    console.log(num);


}

incre(10);