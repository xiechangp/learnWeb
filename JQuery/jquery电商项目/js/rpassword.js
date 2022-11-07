// 修改密码逻辑
// 1. 判断是否登录
const token = window.localStorage.getItem('token');
const id = window.localStorage.getItem('id');

if(!token || !id){
    //未登录
    window.location.href = 'login.html';
}else{
    //已登录
    getInfo();
}

// 2.获取用户信息
function getInfo(){
    // 发送请求，请求个人信息
    $.ajax({
        url: 'http://localhost:8888/users/info',
        method: 'GET',
        data:{id:id},
        headers:{authorization:token},
        succss(res){
            //判断错误
            if(res.code !== 1){
                window.location.href = 'login.html';
            }
        }

    })
}

// 3.提交表单修改密码

$('form').on('submit',function(e){

    // 3.1 阻止默认事件
    e.preventDefault();

    // 3.2 采集信息
    const data = $('form').serialize();

    // 3.3 发送请求
    $.ajax({
        url:'http://localhost:8888/users/rpwd',
        method:'POST',
        data:data + '&id='+id,
        headers:{authorization:token},
        success(res){
            console.log(res);
            // 如果密码错误 提示
            if(res.code !== 1){ 
                $('form > span').css('display','block');
                return;
            }
            alert('密码修改完成,请重新登录');
            // window.location.href = 'login.html';
            
        }
    })

})