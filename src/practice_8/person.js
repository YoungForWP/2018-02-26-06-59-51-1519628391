"use strict"

class Person {
    constructor(id, name, age, klass) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.klass = klass;
    }

    introduce() {
        return `My name is ${this.name}. I am ${this.age} years old.`;
    }
}

export default Person;
