let Person = require("./person") 
class Worker extends Person{
    constructor(name,age){
        super(name,age);
        this.basic_introduce = super.introduce();
    }
    introduce(){
       
        let str = ' I am a Worker. I have a job.';
        return this.basic_introduce+' I am a Worker. I have a job.';
    }
}

module.exports = Worker;
