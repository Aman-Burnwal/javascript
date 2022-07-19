let str1 = "banti";
let str2 = "antib";


console.log(anagram(str1, str2));

function anagram(str1, str2) {
    let stl1 = str1.length, stl2 = str2.length;
    if (stl1 != stl2) {
        return false;
    }
    stl1.sort;
    stl2.sort;
    for (let i = 0; i < stl1; i++) {
        if (str1[i] != str2[i]) {
            return false;
        }
    }
    return true;
}