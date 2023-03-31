function andXorOr(a) {

    let stack = [];

    let maxResult = 0;

    for (let i = 0; i < a.length; i++) {

        while (stack.length > 0) {

            let x = a[i] ^ stack[stack.length - 1];

            maxResult = Math.max(maxResult, x);

            if (a[i] < stack[stack.length - 1]) stack.pop();
                
            else break;
            
        }
        stack.push(a[i]);
    }

    return maxResult;
}


console.log(andXorOr([9, 6, 3, 5, 2]))