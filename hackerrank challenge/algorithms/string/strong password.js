
function minimumNumber(n, password) {
    // Return the minimum number of characters to make the password strong

    const numbers = "0123456789"
    const lower_case = "abcdefghijklmnopqrstuvwxyz"
    const upper_case = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const special_characters = "!@#$%^&*()-+"



    let additonalChar = 4;

    let includeNumber = false;
    let includeLower_case = false;
    let includeUpper_case = false;
    let includeSpecial_characters = false;

    for (let i = 0; i < password.length; i++) {

        if (!includeNumber) {

            if (numbers.includes(password[i])) {
                includeNumber = true;
                additonalChar--;
            }
        }

        if (!includeLower_case) {

            if (lower_case.includes(password[i])) {
                includeLower_case = true;
                additonalChar--;
            }
        }

        if (!includeUpper_case) {

            if (upper_case.includes(password[i])) {
                includeUpper_case = true;
                additonalChar--;
            }
        }


        if (!includeSpecial_characters) {

            if (special_characters.includes(password[i])) {
                includeSpecial_characters = true;
                additonalChar--;
            }
        }

        if (additonalChar === 0) break;

    }
    return additonalChar + n >= 6 ? additonalChar : additonalChar + (6 - n - additonalChar);
}

