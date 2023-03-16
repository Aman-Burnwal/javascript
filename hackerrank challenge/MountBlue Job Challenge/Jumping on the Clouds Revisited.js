// Complete the jumpingOnClouds function below.
function jumpingOnClouds(c, k) {
    let n = c.length;
    let energy = 100;

    let jump = (0 + k) % n;

    c[jump] === 1 ? energy -= 3 : energy -= 1;


    while (jump) {

        jump = (jump + k) % n;
        c[jump] === 1 ? energy -= 3 : energy -= 1;
    }
    return energy;
}
