/**
 * 稳妥构造函数:
 *      适用在一些安全的环境中，如不能使用this 和new
 *      特点: 
 *          1.实例方法不能使用this
 *          2.不能使用new操作符创建实例
 *      缺点:无法区分对象具体类型
 */

 function Person(name,age){
    const o = new Object();
    o.name = name;
    o.age = age;
    o.sayName = function() {
        console.log(name)
    }

    return o;
 }

 const person1 = Person();
 person1.sayName();