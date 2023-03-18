function gridSearch(G, P) {
    // Write your code here

    // iterate over rows of G
    for (let i = 0; i < G.length; i++) {

        // iterate over columns of G[i]
        for (let j = 0; j < G[i].length; j++) {

            // check if the first character of P is found in G[i]
            if (G[i][j] === P[0][0] && G[i].includes(P[0])) {

                let found = true;

                // iterate over rows of P
                for (let k = 0; k < P.length; k++) {

                    // iterate over columns of P[k]
                    for (let l = 0; l < P[k].length; l++) {

                        // check if the corresponding character of P is found in G[i + k][j + l]
                        if (G[i + k][j + l] === P[k][l]) found = true;
                        else {
                            found = false;
                            break;
                        };
                    }

                    if (!found) break;

                }
                if (found) return "YES"
            }
        }
    }
    return "NO";
}


let G = ["7283455864",
    "6731158619",
    "8988242643",
    "3830589324",
    "2229505813",
    "5633845374",
    "6473530293",
    "7053106601",
    "0834282956",
    "4607924137"
]

let P = [
    "9505",
"3845",
"3530"
]



console.log(gridSearch(G, P))



