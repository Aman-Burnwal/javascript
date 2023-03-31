function waiter(number, q) {
    // Write your code here

    let answerArray = [];
    let A1 = [];
    const B1 = [];


    let primeElements = [];

   
    let i = 2;

    while (primeElements.length !== q) {

        let isPrime = true;

        for (let j = 2; j < i; j++) if (i % j === 0) isPrime = false;
        
        if (isPrime) primeElements.push(i);

        i++;
    }


    let j = 0;

    while (q--) {
        
        let primeNumber = primeElements[j];

        while(number.length) {

            const lastElement = number.pop();

            lastElement % primeNumber === 0 ? B1.push(lastElement) : A1.push(lastElement);

        }

        
        while (B1.length) answerArray.push(B1.pop());


        number = A1;

        A1 = [];
        j++;
        

    }


    while (number.length) answerArray.push(number.pop());
    


    return answerArray


}



console.log(waiter([2, 3, 4, 5, 6, 7], 3))