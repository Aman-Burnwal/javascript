function minimumNumber(n, password) {

    // Return the minimum number of characters to make the password strong

    let numbers = "0123456789"
    let lower_case = "abcdefghijklmnopqrstuvwxyz"
    let upper_case = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let special_characters = "!@#$%^&*()-+"

    let nIs = true, lIs = true, uIs = true, sIs = true;

    for (let i = 0; i < n; i++) {
        if (numbers.includes(password[i])) nIs = false;
        if (lower_case.includes(password[i])) lIs = false;
        if (upper_case.includes(password[i])) uIs = false;
        if (special_characters.includes(password[i])) sIs = false;

    }

    let ans = nIs + lIs + uIs + sIs;

    return 6 - n > ans ? 6 - n: ans;
}


console.log(minimumNumber(3, "Ab1"))