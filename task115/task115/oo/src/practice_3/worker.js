class Worker{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    introduce(){
        
        let str = 'I am a Worker. I have a job.';
        return str;
    }
}

module.exports = Worker;
