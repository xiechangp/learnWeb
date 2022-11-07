// 列表页逻辑代码
// 1.  请求分类列表，渲染分类位置
getCateList();

function getCateList() {
    // 1-1 发送请求
    $.get('http://localhost:8888/goods/category', res => {
        console.log(res)
        // 1-2 渲染列表
        let str = '<li class="active">全部</li>';
        res.list.forEach(item => {
            str += `<li>${item}<li>`
        })
        $('.category').html(str);
    })
}



// 2. 请求商品列表渲染页面
// 2-1 准备请求参数
const info = {
    current: 1,
    pagesize: 12,
    search: '',
    filter: '',
    saleType: 10,
    sortType: 'id',
    sortMethod: 'ASC',
    category: ''
}

let totalPage = 1;

// 2-2 请求列表数据
getGoodsList();

function getGoodsList() {
    $.get('http://localhost:8888/goods/list', info, res => {
        totalPage = res.total;
        // 执行渲染页面的操作
        bindHtml(res);
    })
}

// 2-3 渲染页面
function bindHtml(res) {
    // console.log(res);
    //判断第一页 disable
    if (info.current === 1) $('.left').addClass('disable')
    else $('.left').removeClass('disable')
    //判断第最后页 disable    
    if (info.current === res.total) $('.right').addClass('disable')
    else $('.right').removeClass('disable')

    // 3. 渲染统计位置
    $('.total').text(`${info.current } / ${res.total}`);

    // 4. 渲染一页显示多少条
    $('select').val(info.pagesize);

    // 5. 渲染当前页
    $('.page').val(info.current);

    // 6. 渲染商品列表
    let str = ``
    res.list.forEach(item => {
        str += `
        <li goodsID="${item.goods_id}">
                <div class="show">
                    <img src="${item.img_big_logo}" alt="">
                    ${item.is_hot ? '<div class="hot">hot</div>':''}
                    ${item.is_sale ? '<div class="sale">sale</div>':''}
                    
                </div>
                <div class="info">
                    <p class="title">${item.title}</p>
                    <p class="price">
                        <span class="current">￥ ${item.current_price}</span>
                        <span class="old">￥ ${item.price}</span>
                    </p>
                    <button goodsID="${item.goods_id}">加入购物车</button>
                </div>
            </li>
        `
    })
    $('.list').html(str);
}

// 3各种事件的渲染
//  3-1 分类按钮
$('.category').on('click', 'li', function () {
    // 1 切换类名
    $(this).addClass('active').siblings().removeClass('active');
    // 2 修改 info 中的数据
    info.category = $(this).text() === '全部' ? '' : $(this).text();
    info.current = 1;
    // 3 从新请求列表数据并渲染
    getGoodsList();
})

// 3-2 热销筛选
$('.filter').on('click', 'li', function () {
    // 1. 切换类名
    $(this).addClass('active').siblings().removeClass('active');
    // 2. 修改 info 中的数据
    info.filter = $(this).attr('type');
    info.current = 1;
    // 3. 从新渲染页面
    getGoodsList();
})

// 3-3 折扣
$('.sale').on('click', 'li', function () {
    // 1. 切换类名
    $(this).addClass('active').siblings().removeClass('active');
    // 2. 修改 info 中的数据
    info.saleType = $(this).attr('type');
    info.current = 1;
    // 3. 从新渲染页面
    getGoodsList();
})

// 3-4 排序
$('.sort').on('click', 'li', function () {
    // 1. 求换类名
    $(this).addClass('active').siblings().removeClass('active');
    // 2. 修改info 中的属性
    info.sortType = $(this).attr('type');
    info.sortMethod = $(this).attr('method');
    // 3. 从新渲染页面
    getGoodsList();
})

// 3-5 模糊搜索
$('#search').on('input', function () {
    // 1. 修改 info 的信息
    info.search = $(this).val().trim();
    info.current = 1;
    // 2. 从新渲染页面
    getGoodsList();
})

// 3-6 各种分类
// 上一页
$('.left').on('click', function () {
    if ($(this).hasClass('disable')) return

    // 1.修改 info 信息
    info.current--;
    // 2. 从新渲染页面
    getGoodsList();
})
// 下一页
$('.right').on('click', function () {
    if ($(this).hasClass('disable')) return

    // 1.修改 info 信息
    info.current++;
    // 2. 从新渲染页面
    getGoodsList();
})
// 跳转
$('select').on('change', function () {
    // 1.修改 info 中的数据
    info.pagesize = $(this).val();
    info.current = 1;

    // 2. 从新渲染页面
    getGoodsList();
})
$('.jump').on('click', function () {
    // 1. 拿到文本框的内容
    let page = $('.page').val();
    // 非数字 
    if (isNaN(page)) page = 1;
    if (page <= 1) page = 1;
    if (page > totalPage) page = totalPage;
    // 2.修改 Info 中的信息
    info.current = page;
    getGoodsList();
})

// 4. 加入购物车
$('.list').on('click', 'button', function (e) {
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


// 5. 切换详情页面
$('.list').on('click', 'li', function () {
    // 拿到商品 id 存储在 localStorage 内
    window.localStorage.setItem('goodsId', $(this).attr('goodsId'));
    window.location.href = 'detail.html';
})