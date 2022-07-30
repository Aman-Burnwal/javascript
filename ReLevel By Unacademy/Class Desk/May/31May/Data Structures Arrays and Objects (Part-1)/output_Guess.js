// what is the output of the below code

const car = {
    color: 'Black',
    speed: '120Kmph',
    brand: 'Audi',
    start: function () {
        console.log('Car started');
    },
    stop: function () {
        console.log('Car stopped');
    },
}
const newCar = car;
newCar.brand = 'BMW';
console.log(car.brand);
