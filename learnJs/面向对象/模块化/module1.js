//字面量方式
/* let module1 = new Object({
    count:0,
    m1:function(){
        console.log('m1');
    },
    m2:function(){
        return 'm2'
    }

}) */

// IIFE 立即执行函数
let module1 = (function(){
    let count = 0;
    m1 = function(){
        console.log('m1');
    }
    m2 = function(){
        console.log('m2');
    }
    return {
        m1:m1,
        m2:m2
    }
})();

//放大模式
/* (function(mod){
    mod.m3 = function(){
        console.log('m3');
    }
    return mod;
})(module1); */
// 宽放大模式
(function(mod){
    mod.m3 = function(){
        console.log('m3');
    }
    return mod;
})(window.module1 || {})