const car = [{
    color: 'Black',
    speed: '120Kmph',
    brand: 'Audi',
    start: function () {
        console.log('Car started');
    },
    stop: function () {
        console.log('Car stopped');
    },
},
{
    color: 'Red',
    speed: '100Kmph',
    brand: 'BMW',
    start: function () {
        console.log('Car started');
    },
    stop: function () {
        console.log('Car stopped');
    },
},]

for ([key, value] of Object.entries(car)){
    console.log(`My car is ${value.brand} and color is ${value.color}`)
}
