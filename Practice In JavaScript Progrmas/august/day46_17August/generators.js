function* generator(){
    yield 1;
    yield 2;
    yield 3;
}

let generate = generator();

console.log(generate.next().value);
console.log(generate.next().value);