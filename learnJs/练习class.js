class Student{
    constructor(name){
        this.name=name;
    }
    hello(){
        alert('hello');
    }
}

class Xiaoxuesheng extends Student{
    constructor(name,age){
        super(name);
        this.age=age;
    }
    myxiaoxuesheng(){
        alert("我是小学生");
    }
}
var xiaojun = new Xiaoxuesheng("xiaojun",6);

var xiaoming = new Student("xiaoming");
// console.log('xiaoming');
// xiaoming.hello();

