class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    introduce(){
        let str = '';
        str = 'My name is '+this.name+'. I am '+this.age+' years old.';
        return str;
    }
}

module.exports = Person;