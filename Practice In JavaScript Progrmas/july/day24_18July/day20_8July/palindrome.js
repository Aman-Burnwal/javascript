// write a program that prints prime palindrome numbers till 100.

function primepalindrom(num) {
    for (let i = 2; i <= num; i++) {
        let a = true;

        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                a = false;
                break;
            }
        }

        if (a === true) {
            if (i < 10) {
                console.log(i);
            }
            if (i > 10 && i < 100) {
                let temp_Num = 0;
                let temp_Num2 = 0;
                temp_Num = i % 10;
                temp_Num2 = Math.floor(i / 10);
                if (temp_Num === temp_Num2) {
                    console.log(i)

                }
            }
        }

    }
}

primepalindrom(1000);