let Person = require("./person") 
let Class = require("./class");
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
        
        str = ' I am a Student. I am at Class ' + this.klass.number + '.';
        return this.basic_introduce+' I am a Student. I am at Class '+this.klass.number+'.';
    }
}
module.exports = Student;


