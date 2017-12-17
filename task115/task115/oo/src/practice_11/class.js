class Class {
    constructor(number) {
        this.number = number;
        this.leader;
    }
    getDisplayName() {
        return "Class " + this.number;
    }
    assignLeader(student) {
        if (student.klass.number == this.number){
            this.leader = student;
            if(this.teacher != null)     
            console.log('I am '+this.teacher.name+'. I know '+student.name+' become Leader of Class '+this.number+'.');
        }
        else {
            console.log('It is not one of us.')
        }
    }
    appendMember(student){
        student.klass = this;
        if(this.teacher != null)
        console.log('I am '+this.teacher.name+'. I know '+student.name+' has joined Class '+this.number+'.');
    }
    isIn(student){
        return student.klass.number == this.number?true:false;
    }
    registerJoinListener(teacher){
        this.teacher = teacher;
    }
    registerAssignLeaderListener(teacher){
        this.teacher = teacher;
    }
}

module.exports = Class;







