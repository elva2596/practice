/**
 * 工厂模式:
 *  优点: 解决了创建多个对象的问题
 *  缺点: 没有解决对象种类识别的问题
 */

function createPerson(name,age,job) {
  const o = {
    name,
    age,
    job,
    sayName(){
      console.log(this.name)
    }
  };
  return o;
}