/**
 *原型模式 ： 
 *
 * 优点:实例可以共享属性和方法
 * 缺点：实例不能拥有术语自己的属性和方法，并且实例化时无法传参
 */
function Person(){}
Person.prototype.name = "dailu";
Person.prototype.sayName = function(){
  console.log(this.name)
}