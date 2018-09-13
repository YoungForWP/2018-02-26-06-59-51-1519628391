
"use strict";

import Person from "./person.js";

class Teacher extends Person {
    constructor(id, name, age, klasses) {
        super(id, name, age);
        this.klasses = klasses;
    }

    getKlassesName() {
        return this.klasses.map(item => item.number).join(", ");
    }

    introduce() {
        if (this.klasses === undefined || this.klasses.length === 0) {
            return super.introduce() + ` I am a Teacher. I teach No Class.`;
        }
        return super.introduce() + ` I am a Teacher. I teach Class ${this.getKlassesName()}.`;
    }

    isTeaching(student) {
        return klasses.map(klass => klass.isIn(student)).indexOf("true") > -1;
    }

    notifyLeaderInfo(student) {
        console.log(`I am ${this.name}. I know ${student.name} become Leader of ${student.klass.getDisplayName()}.`);
    }

    notifyJoinInfo(student) {
        console.log(`I am ${this.name}. I know ${student.name} has joined ${student.klass.getDisplayName()}.`);
    }
}

export default Teacher