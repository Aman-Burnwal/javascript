function taumBday(b, w, bc, wc, z) {
    // Calculate cost of black gifts
    let minBC = Math.min(bc, wc + z);
    let costBC = BigInt(b) * BigInt(minBC);

    // Calculate cost of white gifts
    let minWC = Math.min(wc, bc + z);
    let costWC = BigInt(w) * BigInt(minWC);

    // Calculate total cost
    let totalCost = costBC + costWC;

    return totalCost.toString();

}

const b = 3, w = 6, bc = 9, wc = 1, z = 1
console.log(taumBday(b, w, bc, wc, z));
