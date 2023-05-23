let string = "abc";
let arr = [];


subset(string, "", 0)
console.log(arr);


function subset(str, s, indx) {

    if (indx >= str.length) {
        arr.push(s);
        return;
    }

   

    
    subset(str, s + str[indx], indx + 1);
    subset(str, s, indx + 1);



}