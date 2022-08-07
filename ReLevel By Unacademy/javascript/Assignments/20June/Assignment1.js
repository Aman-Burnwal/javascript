// 1. Bikers A and B started the journey and A having X litres of petrol and B having Y litres of petrol. 
// K and L are the km per litre for A and B bikes.
// Let us consider halt as an array a1, a2, a3, .... an where n is the length of the array. a represent distance
// from one halt to another


// Write a program to find each biker will cross how many halts based on the petrol quantity and the litre per km.
// Sample Input:
// 10 12
// 20 15
// 40 98 134 179 211 248
// Sample Output:
// 2 2

const Bikers = (x, y, k, l, arr) => {
    const aKm = x * k;
    const bKm = y * l;
    let aCount = 0, bCount = 0,
        aTotal = 0, bTotal = 0;
    arr.map(item => {
        aTotal += parseInt(item);
        bTotal += parseInt(item);
        if (aKm > aTotal) {
            aCount++;
        }
        if (bKm > bTotal) {
            bCount++
        }
    });
    return `${aCount} ${bCount}`;
}

const inp = `10 12
20 15
40 98 134 179 211 248`;

const [x, y] = inp.split('\n')[0].split(' ');
const [k, l] = inp.split('\n')[1].split(' ');
const arr = inp.split('\n')[2].split(' ');

console.log(Bikers(x, y, k, l, arr));