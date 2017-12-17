class A {
    constructor(name,age) {
        this.name = name;
        this.age = age;
    }
    tostring() {
        console.log(this.naem + '--' + this.age);
        return 'basss';
    }
}
module.exports = A;