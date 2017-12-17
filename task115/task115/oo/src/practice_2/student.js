

let Person = require("./person") 

class Student extends Person {
    constructor(name, age, klass) {
        super();
        this.name = name;
        this.age = age;
        this.klass = klass;
    }
    introduce() {
        let str = '';
        str = 'I am a Student. I am at Class ' + this.klass + '.';
        return str;
    }
}
module.exports = Student;
