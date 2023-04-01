function camelcase(s) {
    // Write your code here

    if (s.length === 0) return 0;
    if (s.length === 1) return 1;


    let letters = 1;


    for (let i = 0; i < s.length; i++) {


        let char = s.charCodeAt(i);

        if (char >= 65 && char <= 90) letters++;
    }

    return letters;

}