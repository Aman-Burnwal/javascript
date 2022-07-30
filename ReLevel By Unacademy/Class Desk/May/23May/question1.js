// Problem 1 –
// Create a program which gives output for children to go out in park if the temperature is between 20
// degrees Celsius – 25 degrees Celsius and if it’s not raining outside, ask them to be in play school if
// the temperature is between 18 degrees Celsius to 20 degrees Celsius and raining otherwise, they
// should not step out of the home.


const prompt = require('prompt-sync')();

let temperatureis = parseInt(prompt("Your City temperature is  =>"));

let israining = prompt("If raining write 'true' else 'false'  ");


function childrensFuture(temperature, raining){
    raining = Boolean(raining);
    console.log(typeof(raining));
    if((temperature => 20 && temperature <= 25) && raining == false ) {
        console.log("Go to park");
    } else if((temperature >= 18 && temperature <= 20) && raining == true) {
        console.log("play in School");
    } else {
        console.log("live in home");
    }
}

childrensFuture(temperatureis, israining)