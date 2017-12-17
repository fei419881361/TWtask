let Person = require("./person") 
let Class = require("./class");
class Teacher extends Person{
    constructor(id,name,age,classes){
        super(id,name,age);
        this.klasses = classes;
        this.basic_introduce = super.introduce();
    }
    introduce(){
       if(this.klasses != null && this.klasses.length != 0){
           let basic = this.basic_introduce+' I am a Teacher. I teach Class';
           for(let i = 0;i<this.klasses.length;i++){
               if(i == this.klasses.length - 1){
                    basic += ' '+this.klasses[i].number+'.';
               }else
                basic += ' '+this.klasses[i].number+',';
           }
           return basic; 
       }
        return  this.basic_introduce+' I am a Teacher. I teach No Class.';
    }
    introduceWith(student){
        if(student.klass.number == this.klass.number){
            return this.basic_introduce+" I am a Teacher. I teach "+student.name+".";
        }
        return this.basic_introduce+" I am a Teacher. I don't teach "+student.name+".";
    }
    isTeaching(student){
        let flag = false;
        for(let i =0;i<this.klasses.length;i++){
            if(this.klasses[i].isIn(student)){
                flag = true;
                break;
            }
        }
        return flag;

    }
}

module.exports = Teacher;






