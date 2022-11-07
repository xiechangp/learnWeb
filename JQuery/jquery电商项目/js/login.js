//登录页面逻辑

$('form').on('submit',function(e){
    // 1. 阻止默认事件
    e.preventDefault(); 

    // 2. 获取用户信息
    const data = $('form').serialize();

    // 3. 发送请求
    $.post('http://localhost:8888/users/login',data, res =>{
        // 4.判断登录失败
        if(res.code === 0){
            // 提示错误
            $('form>span').css('display','block');
            return;
        }
        // window.location.href = 'index.html';

        // 5. 登录成功跳转

        // 5-1 把登录过的凭证 token 存起来，为了其他页面使用
        window.localStorage.setItem('token',res.token);

        // 5-2 把用户 id 也存起来
        window.localStorage.setItem('id',res.user.id);

        // 5-3 跳转页面
        window.location.href = 'index.html';

    } )


})