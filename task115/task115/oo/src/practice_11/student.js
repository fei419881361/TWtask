let Person = require("./person") 
let Class = require("./class");
class Student extends Person {
    constructor(id,name, age, klass) {
        super(id,name,age);
        this.basic_introduce = super.introduce();
        this.name = name;
        this.age = age;
        this.klass = klass;
    }
    introduce() {
        let basic = this.basic_introduce+' I am a Student.';
        if(this.klass.leader==null || this.klass.leader.id != this.id)
            return basic+" I am at Class "+this.klass.number+'.';
        return basic+" I am Leader of Class "+this.klass.number+".";
    }
}
module.exports = Student;






