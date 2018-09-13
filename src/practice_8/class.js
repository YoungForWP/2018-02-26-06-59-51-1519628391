"use strict";

class Klass {
    constructor(number) {
        this.number = number;
    }

    getDisplayName() {
        return `Class ${this.number}`;
    }

    assignLeader(student)  {
        if (student.klass === this) {
            this.leader = student;
        }
    }
}

export default Klass;