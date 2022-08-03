// *****
// *   *
// *   *
// *   *
// *****
hollowSquare(18);
function hollowSquare(num) {
    let star = "" 

    for(let i = 0; i < num; i++) {
        star = "*"
        space = ""
        for(let j = 0; j < Math.ceil(num/ 2); j++) {
            
            if(i === 0 ||i === num - 1) {
                star += "*"
            }
            else {
                space += " "
            }
        }
        if(i === 0 ||i === num - 1) {
            console.log(star + "*")
        } else{
            console.log(star + space +star)
        }
    }
}




let n = 5; // row or column count
// defining an empty string
let string = "";

for(let i = 0; i < n; i++) { // external loop
  for(let j = 0; j < n; j++) { // internal loop
    if(i === 0 || i === n - 1) {
      string += "*";
    }
    else {
      if(j === 0 || j === n - 1) {
        string += "*";
      }
      else {
        string += " ";
      }
    }
  }
  // newline after each row
  string += "\n";
}
// printing the string
console.log(string);
