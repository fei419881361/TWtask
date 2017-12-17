let Person = require("./person") 
class Teacher extends Person{
    constructor(name,age,klass){
        super(name,age);
        this.klass = klass;
        this.basic_introduce = super.introduce();
    }
    introduce(){
       
       if(this.klass != null)
            return this.basic_introduce+' I am a Teacher. I teach Class '+this.klass+'.';
        return  this.basic_introduce+' I am a Teacher. I teach No Class.';

    }
}

module.exports = Teacher;


