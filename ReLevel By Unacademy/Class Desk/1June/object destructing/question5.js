let newAvenger = { realName: 'Tony Stark', city: 'California', heroName: 'Iron Man' };
let realName, location, heroName;
({ realName, location, heroName } = newAvenger);
console.log(realName); // Tony Stark
console.log(location); // undefined
console.log(heroName); // Iron Man


// As we have used a "location" instead of "city," we get undefined as a result.
// Object Destructuring using new variable name:
// In case we want to use different names, we can do that as below