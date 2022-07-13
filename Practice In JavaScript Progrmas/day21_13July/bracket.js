function bracket(n,open,close,str) {
    if(open === n && close === n){
        console.log(str);
        return;
    }
    if(open < n){
        bracket(n, open+1, close, str+"(")
    }
    if(open > close) {
        bracket(n, open, close+1, str+")")
    }
}

a(3,0,0,"");