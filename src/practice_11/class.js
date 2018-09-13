"use strict";

class Klass {
    constructor(number) {
        this.number = number;
    }

    getDisplayName() {
        return `Class ${this.number}`;
    }

    assignLeader(student) {
        if (student.klass === this) {
            this.leader = student;
            if (this.leaderListenter !== undefined) {
                this.leaderListenter(student);
            }
        } else {
            console.log("It is not one of us.");
        }
    }

    appendMember(student) {
        student.klass = this;
        if (this.joinLister !== undefined) {
            this.joinLister(student);
        }
    }

    isIn(student) {
        return student.klass === this;
    }

    registerAssignLeaderListener(teacher) {
        this.leaderListenter = function (student) {
            teacher.notifyLeaderInfo(student);
        }
    }

    registerJoinListener(teacher) {
        this.joinLister = function (student) {
            teacher.notifyJoinInfo(student);
        }
    }
}

export default Klass;