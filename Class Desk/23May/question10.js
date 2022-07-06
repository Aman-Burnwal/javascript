// Create a pattern using ‘*’ as shown below using loops

//             *
//            ***
//           *****
//          *******
//         *********



let number_of_Row = 5;

for(let row = 1; row <= number_of_Row; row++){
    let blank ="";
    let star="*";
    for(let j = row; j <= number_of_Row; j++){
        blank += " ";
    }
    for(let s = 1; s< row; s++){
        star += "**";
    }

    console.log(blank+star+blank);
}
