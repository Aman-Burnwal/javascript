function angryProfessor(k, a) {
    // Write your code here

    let onTime = 0;

    for (let i = 0; i < a.length; i++) if (a[i] <= 0) onTime++;

    return onTime - k >= 0 ? "YES" : "NO"

}

console.log(angryProfessor(3, [-1, -3, 2, 4]))