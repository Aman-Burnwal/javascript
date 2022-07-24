let newAvenger = { realName: 'Tony Stark', city: 'California', heroName: 'Iron Man' };

let { realName = 'Downey Jr', location = 'Malibu', heroName = 'Allu Arjun' } = newAvenger;

console.log(realName); // Tony Stark
console.log(location); // Malibu
console.log(heroName); // Iron Man

// Here the realName was changed to "Tony Stark," but the location had the default value as "Malibu" as there is no
// corresponding element location in the extracted object.