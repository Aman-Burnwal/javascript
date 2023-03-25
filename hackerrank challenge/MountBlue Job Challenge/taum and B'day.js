function taumBday(b, w, bc, wc, z) {
    // Write your code here

    if (bc < wc && bc + z < wc) {
        wc = bc + z;
        
        // return ((b * bc) + (w * wc))

    } else if (bc > wc && bc > wc + z) {
        // console.log(b)
        bc = wc + z;
    }
    return ((b * bc) + (w * wc));

}

const b = 3, w = 6, bc = 9, wc = 1, z = 1
console.log(taumBday(b, w, bc, wc, z));
