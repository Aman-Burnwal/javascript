function naturalNumber(n) {

    if (n === 1) {
        console.log(1);
        return;
    }

    console.log(n);

    naturalNumber(n - 1);
}

naturalNumber(5);