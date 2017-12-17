let A = require("./test2")

  class B extends A {
    constructor(name,age) {
      super();
    this.basic = super.tostring();
    this.name = name;
    this.age = age;
      this.world = 'world';
    }
}
let ab = new B('zlf',12);

console.log(ab.basic);
