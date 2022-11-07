//注册页面的逻辑代码
$('form').on('submit',function(e){
    // 1. 阻止默认行为
    e.preventDefault();

    // 2. 采集用户信息
    const data = $('form').serialize();
    // console.log(data);
    
    // 3. 发送请求了
    $.post('http://localhost:8888/users/register',data, res =>{
        console.log(res);
        // 4. 判断结果，来是否提示错误
        if(res.code === 0){
            //提示错误
            $('form>span').css('display','block');
            return ;
        }
        // 5. 注册成功 进行跳转
        window.alert('恭喜啊同志注册成功了,去登录吧');
        // window.location.href = '../jquery/login.html';
        
        // return false;
    })
})