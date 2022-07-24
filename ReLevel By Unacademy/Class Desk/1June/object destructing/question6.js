let newAvenger = { realName: 'Tony Stark', city: 'California', heroName: 'Iron Man' };

let realName, location, heroName;

({ realName: fooName, city: location, heroName: barName } = newAvenger);

console.log(fooName); // Tony Stark
console.log(location); // California
console.log(barName); // Iron Man

// Here we have assigned the values to fooName, location and barName. 
