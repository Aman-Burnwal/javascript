// *****
// *****
// *****
// *****
// *****

let num = 5;
squareStrar(num);
function squareStrar(num) {
    let star = "*"
    
    for(let i = 1; i < num; i++) {
        star += "*"
    }
    for(let i = 0; i < num; i++) {
        console.log(star)
    }
}