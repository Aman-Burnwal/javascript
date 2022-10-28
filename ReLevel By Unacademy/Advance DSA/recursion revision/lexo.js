function lexo(i, n) {
    if (i <= n) {
        console.log(i);

        lexo(i * 10, n);
        if (i % 10 !== 9) {
            lexo(i + 1, n)
        }
    }
}

lexo(1, 1000)

