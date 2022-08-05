function person(name) {
    this.name = name;
    console.log(this.name);
}

person("Banti");

person.prototype.age = function (age) {
    this.age = age;
}

// console.log(person.prototype);

person.prototype.age.prototype.vot = function (vote) {
    this.vote = vote;
}

console.log(person.prototype)

