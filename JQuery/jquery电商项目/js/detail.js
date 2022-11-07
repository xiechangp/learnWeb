//详情页的逻辑
// 1.验证是否是从列表页跳转过来的
const goodsId = window.localStorage.getItem('goodsId');
if(!goodsId) window.location.href = '../list.html'

// 2. 根据商品 id 请求商品信息

function getInfo(){
    //直接发送请求
    $.get("http://localhost:8888/goods/item",{id : goodsId},res=>{

        $('.show > img').prop('src',res.info.img_big_logo);
        $('.info > .title').text(res.info.title);
        $('.info > .price').text('￥'+res.info.current_price);
    })
}
getInfo();

$('.info').on('click', 'button', function (e) {
    //阻止事件
    e.stopPropagation();
    // console.log('加入购物车')
    const token = window.localStorage.getItem('token');
    const id = window.localStorage.getItem('id');

    // 2. 判断token id 是否存在
    if (!token || !id) {
        // 不是登录状态
        alert('请登录')
    } 
    // 3. 发送请求加入购物车
    $.ajax({
        url:'http://localhost:8888/cart/add',
        method:'POST',
        headers:{authorization:token},
        data:{id:id,goodsId:$(this).attr('goodsId')},
        success(res){
            if(res.code !== 1){
                alert('请登录,在操作')
                return
            }
            alert('加入购物车成功')
            // window.location.href = 'cart.html';
        }
    })


})