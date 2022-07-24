let newAvenger = {
    realName: "Tony Stark",
    location: {
        country: "USA",
        city: "California"
    },
    heroName: "Iron Man"
};
let {
    realName: foo,
    location: {
        country: bar,
        city: x
    },
} = newAvenger;
console.log(foo); // Tony Stark
console.log(bar); // USA
console.log(x); // California