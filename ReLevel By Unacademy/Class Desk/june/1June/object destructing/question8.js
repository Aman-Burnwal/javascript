// Using Computed property name, we can specify the name of a property via an expression if we put it in square
// brackets:
// Note that the property name should be a string.
let prop = "realName";
let { [prop]: foo } = { realName: 'Tony Stark', city: 'California', heroName: 'Iron Man' };
console.log(foo); // Tony Stark