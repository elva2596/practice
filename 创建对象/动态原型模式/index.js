function Person(name,age) {
  this.name = name;
  this.age = age;
  if(typeof this.sayName !== 'function') {
    Person.prototype.sayName = function () {
      console.log(this.name);
    }
  }
}

const person1 = new Person("zansongting",24);
person1.sayName()