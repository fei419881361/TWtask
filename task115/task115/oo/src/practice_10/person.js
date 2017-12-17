class Person{
    constructor(id,name,age){
        this.name = name;
        this.age = age;
        this.id = id;
    }
    introduce(){
        let str = '';
        str = 'My name is '+this.name+'. I am '+this.age+' years old.';
        return str;
    }
}

module.exports = Person;





