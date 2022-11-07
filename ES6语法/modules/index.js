// es6模块功能主要有两个命令构成: export 和 import
// export 用于规定模块的对外接口
// import 用于输入其它模块提供的接口
// 一个模块就是独立的文件

export const name = "Jack";
// 函数导出方式一
export const sayHi = function(){
    return "Hello！！！";
}
// 函数导出方式二
function sayName(){
    return "say!!!";
}
export {sayName}

// export default 抛出对象
const obj = {
    name:"Tom",
    age:18
}
// export default obj;

// export default 抛出类
class Person{
    constructor(name,age){
        this.name = name
        this.age = age
    }
    getName(){
        return `my name is ${this.name}`
    }
}
export default Person;