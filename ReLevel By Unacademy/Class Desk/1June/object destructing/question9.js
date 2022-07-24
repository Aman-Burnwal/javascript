// We can also use arrays with objects in object destructuring.
// Example 9:

let newAvenger = { realName: "Tony Stark", city: ["California", "Malibu"], heroName: "Iron Man" };
let { realName: foo, city: bar } = newAvenger;
console.log(foo); // Tony Stark
console.log(bar); // ["California", "Malibu"]