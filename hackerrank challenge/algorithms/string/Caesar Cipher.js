
function caesarCipher(s, k) {
    // Write your code here

    let encrypted = "";
    const len = s.length;
    k %= 26;

    for (let i = 0; i < len; i++) {

        let charCode = s.charCodeAt(i);

        if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)) {
            
            charCode += k;
           
            if ((charCode > 90 && charCode < 97) || charCode > 122) {
                charCode -= 26;
            }

            encrypted   += String.fromCharCode(charCode)

        } 
        else encrypted += s[i]
    }


    return encrypted;

}

console.log(caesarCipher("1X7T4VrCs23k4vv08D6yQ3S19G4rVP188M9ahuxB6j1tMGZs1m10ey7eUj62WV2exLT4C83zl7Q80M", 27))
