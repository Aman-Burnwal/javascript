function greet(callbackFn) {
    callbackFn();
    console.log('Welcome to Grandline');
}
greet(function () { console.log('Hi')});