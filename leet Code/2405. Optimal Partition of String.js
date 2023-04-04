/**
 * @param {string} s
 * @return {number}
 */
var partitionString = function (s) {


    let set = new Set()

    let subStr = ""


    for (let i = 0; i < s.length; i++) {

        subStr += s[i]

        if (set.has(subStr) || set.has(s[i])) {
            subStr = s[i]
           
        }

        else {
            set.add(subStr)
            // subStr = ""
        }
    }

    console.log(set)

    return set.size;
};


console.log(partitionString("abacaba"))


// console.log(partitionString("ssssss"))