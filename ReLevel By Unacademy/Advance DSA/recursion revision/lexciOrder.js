const a = [];

function newARray(n, curr) {
    if (curr > n) return;

    console.log(curr)

    let i = 0;

    if (curr === 0) i = 1;
    newARray(n - 1);
    a.push(n);

}



function lexicoOrder(n, curr) {
    if (curr > n) {
        return;
    }
    console.log(curr);
    let i = 0;
    if (curr == 0) {
        i = 1;
    }
    for (; i <= 9; i++) {
        lexicoOrder(n, curr * 10 + i);
    }
}

lexicoOrder(20, 0);

