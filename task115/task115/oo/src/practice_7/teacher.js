let Person = require("./person") 
let Class = require("./class");
class Teacher extends Person{
    constructor(name,age,klass){
        super(name,age);
        this.klass = klass;
        this.basic_introduce = super.introduce();
    }
    introduce(){
       if(this.klass != null)
            return this.basic_introduce+' I am a Teacher. I teach Class '+this.klass.number+'.';
        return  this.basic_introduce+' I am a Teacher. I teach No Class.';
    }
    introduceWith(student){
        if(student.klass.number == this.klass.number){
            return this.basic_introduce+" I am a Teacher. I teach "+student.name+".";
        }
        return this.basic_introduce+" I am a Teacher. I don't teach "+student.name+".";
    }
}

module.exports = Teacher;



