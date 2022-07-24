let newAvenger = {
    realName: "Tony Stark", country: "USA", city: ["California", "Malibu"], heroName: "Iron Man"
};
let { realName, country, ...restOfDetails } = newAvenger;
console.log(realName); // "Tony Stark"
console.log(restOfDetails); // { city: [ 'California', 'Malibu' ], heroName: 'Iron Man' }
//    The object elements/properties which do not have the corresponding variable names are assigned to the rest of
//    the details.