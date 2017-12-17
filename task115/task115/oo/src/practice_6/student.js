let Person = require("./person") 

class Student extends Person {
    constructor(name, age, klass) {
        super(name,age);
        this.basic_introduce = super.introduce();
        this.name = name;
        this.age = age;
        this.klass = klass;
    }
    introduce() {
        let str = '';
        
        str = ' I am a Student. I am at Class ' + this.klass + '.';
        return this.basic_introduce+' I am a Student. I am at Class '+this.klass+'.';
    }
}
module.exports = Student;


