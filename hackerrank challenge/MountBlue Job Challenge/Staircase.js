function staircase(n) {
    // Write your code here

    let hash = "#"

    for (let i = 0; i < n; i++) {
        let space = ""
        for (let j = 0; j < n - i - 1; j++) {
            
            space += " "
        }
        
        console.log(space + hash)
        hash += "#"
    }

}


console.log(staircase(4));