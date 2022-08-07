let newAvenger = { realName: 'Tony Stark', city: 'California', heroName: 'Iron Man' };

let realName, city, heroName;

({ realName, city, heroName } = newAvenger);

console.log(realName); // Tony Stark
console.log(city); // California
console.log(heroName); // Iron Man


// Note:
// We have the same variable names as declared inside the object.
// Let's see what we get if the names are different.