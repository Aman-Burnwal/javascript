var tests = Number(readline());

while (tests--) {
    var p = Number(readline());
    var cooks = readline().split(" ").map(x => Number(x));

    var L = cooks[0];

    let beg = 0;

    let end = 4 * p * (p + 1);

    while (beg <= end) {
        var mid = Math.floor((beg + end)/2)
    }
}