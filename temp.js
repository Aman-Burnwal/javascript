/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    const blank = [];
    const porenst = "() {} []"

    let i = 0;

    while (i < s.length) {
        blank.push(s[i])
        i++;
        console.log(blank)
        console.log(i)

        let open = blank[blank.length - 2];
        let closed = blank[blank.length - 1]

        let potParent = open + closed;
        

        if (porenst.includes(potParent)) {
            console.log("remove data is           " +potParent)
            blank.pop();
            blank.pop();
        }
    }
    return blank.length === 0;

};

console.log(isValid("(){}[]"))