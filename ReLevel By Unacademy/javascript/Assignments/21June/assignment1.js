// Question 1: 
// Create a JSON object for a showroom of cars, who sells cars of different brands.
// JSON shall contain various details such as: car brand name, car models, price and few basic details.
// Also write a program to print details of most expensive car


var Cars = [{
    brand: "Range Rover",
    model: "Discovery",
    price: 6000000,
    category: "SUV"
}, {
    brand: "Range Rover",
    model: "Defender",
    price: 10000000,
    category: "SUV"
},
{
    brand: "Audi",
    model: "A6",
    price: 6000000,
    category: "Sedan"
},
{
    brand: "Audi",
    model: "R8",
    price: 20000000,
    category: "Sports"
},
{
    brand: "Ford",
    model: "Mustang",
    price: 8000000,
    category: "Muscle Car"
},
];
let max = 0;
let index;

for (let i in Cars) {
    if (Cars[i].price > max) {
        max = Cars[i].price;
        index = i;
    }
}
console.log(`${Cars[index].brand} - ${Cars[index].model}  price: ${Cars[index].price}`);