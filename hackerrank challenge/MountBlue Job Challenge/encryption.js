function encryption(s) {
    // Write your code here

    let withoutSpace = ""

    for (let i = 0; i < s.length; i++) {
        if (s[i] == " ") continue;
        else withoutSpace += s[i];
    }

    let len = Math.pow(withoutSpace.length, 0.5);

    let row = Math.ceil(len);
    let col = Math.floor(len);

    row * col < withoutSpace.length ? col = row : col;

    let encrypted = [];
    let iterarion = 0;
    console.log(row, col, withoutSpace)

    for (let i = 0; i < col; i++) {
        
        let tempStr = ""

        for (let j = 0; j < row; j++) {

            if (iterarion >= withoutSpace.length) break;

            tempStr += withoutSpace[iterarion];

            iterarion++;
        }
        // console.log(tempStr);
        encrypted.push(tempStr);
    }

    // return encrypted;

    withoutSpace = "";
    console.log(encrypted)
    let ans = "";

    for (let i = 0; i < encrypted[0].length; i++) {

        for (let j = 0; j < encrypted.length; j++) {

            
            if (j === encrypted.length - 1 && i >= encrypted[encrypted.length - 1].length) break;


            ans += encrypted[j][i]
        }
        ans += " "
    }
    

    return ans;
  

};



console.log(encryption("feedthedog "))