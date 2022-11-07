// 购物车页面得逻辑
// 1. 验证登录
const token = window.localStorage.getItem('token')
const id = window.localStorage.getItem('id')

if (!token || !id) {
  window.location.href = './login.html'
} else {
  // 请求商品列购物车数据, 进行渲染
  getCartList()
}

// 2. 获取购物车列表
function getCartList() {
  // 2-1. 发送请求
  $.ajax({
    url: 'http://localhost:8888/cart/list',
    method: 'GET',
    data: { id: id },
    headers: { authorization: token },
    success (res) {
      // 判断失败
      if (res.code !== 1) {
        window.location.href = './login.html'
        return
      }

      // 渲染页面
      bindHtml(res)
    }
  })
}

// 3. 渲染页面
function bindHtml(res) {
  // 3-1. 判断渲染 empty 标签还是 list 标签
  if (!res.cart.length) {
    $('.empty').addClass('active')
    $('.list').removeClass('active')
    return
  }

  // 代码能来到这里, 说明购物车是有数据的
  // 渲染页面

  // 3-2. 统计一些数字
  // 一共有多少个选中的
  // 一共有多少种商品
  // 总价是多少
  let selectNum = 0, totalPrice = 0, totalNum = 0
  res.cart.forEach(item => {
    if (item.is_select) {
      selectNum++
      totalNum += item.cart_number
      totalPrice += item.cart_number * item.current_price
    }
  })

  // 3-3. 渲染页面
  let str = `
    <div class="top">
      全选 <input class="selectAll" type="checkbox" ${ selectNum === res.cart.length ? 'checked' : '' }>
    </div>
    <ul class="center">
    `

    res.cart.forEach(item => {
      str += `
        <li>
          <div class="select">
            <input ${ item.is_select ? 'checked' : '' } type="checkbox" goodsId="${ item.goods_id }">
          </div>
          <div class="show">
            <img src="${item.img_small_logo }" alt="">
          </div>
          <div class="title">
            ${ item.title }
          </div>
          <div class="price">￥ ${ item.current_price }</div>
          <div class="number">
            <button goodsId="${ item.goods_id }" class="sub">-</button>
            <input class="cart_number" type="text" value="${ item.cart_number }">
            <button goodsId="${ item.goods_id }" class="add">+</button>
          </div>
          <div class="subPrice">￥ ${ (item.current_price * item.cart_number).toFixed(2) }</div>
          <div class="destory">
            <button goodsId="${ item.goods_id }" class="del">删除</button>
          </div>
      `
    })

    str += `
      </li>
    </ul>
    <div class="bottom">
      <p>
        共计 <span>${ totalNum }</span> 件商品
      </p>
      <div class="btns">
        <button class="clear">清空购物车</button>
        <button class="clear_complete" ${ selectNum === 0 ? 'disabled' : '' }>删除所有已选中</button>
        <button class="pay" ${ selectNum === 0 ? 'disabled' : '' }>去支付</button>
      </div>
      <p>
        共计 ￥ <span>${ totalPrice.toFixed(2) }</span>
      </p>
    </div>
  `

  $('.list').html(str)
}

// 4. 各种点击事件
// 4-1. 修改单一商品选中
$('.list').on('click', '.center .select input', function () {

  // 拿到对应的信息发送请求
  $.ajax({
    url: 'http://localhost:8888/cart/select',
    method: 'POST',
    headers: { authorization: token },
    data: { id: id, goodsId: $(this).attr('goodsId') },
    success (res) {
      console.log(res)
    }
  })

  // 从新渲染页面
  getCartList()
})

// 4-2. 修改单一商品数量增加
$('.list').on('click', '.center .number .add', function () {
  // 发送请求
  $.ajax({
    url: 'http://localhost:8888/cart/number',
    method: 'POST',
    headers: { authorization: token },
    data: {
      id: id,
      goodsId: $(this).attr('goodsId'),
      number: $(this).prev().val() - 0 + 1
    }
  })

  // 从新渲染页面
  getCartList()
})

// 4-3. 修改单一商品数量减少
$('.list').on('click', '.center .number .sub', function () {
  // 发送请求
  // 需要判断一下, 如果当前的购买数量是1 , 那么不能继续减少操作了
  const number = $(this).next().val() - 0
  if (number <= 1) return

  $.ajax({
    url: 'http://localhost:8888/cart/number',
    method: 'POST',
    headers: { authorization: token },
    data: {
      id: id,
      goodsId: $(this).attr('goodsId'),
      number: $(this).next().val() - 0 - 1
    }
  })

  // 从新渲染页面
  getCartList()
})

// 4-4. 删除单一商品
$('.list').on('click', '.center .del', function () {
  // 发送请求
  $.ajax({
    url: 'http://localhost:8888/cart/remove',
    method: 'GET',
    data: { id: id, goodsId: $(this).attr('goodsId') },
    headers: { authorization: token }
  })

  // 从新渲染页面
  getCartList()
})

// 4-5. 全选事件
$('.list').on('click', '.selectAll', function () {
  // 拿到自己的选中状态
  const type = $(this).prop('checked') ? 1 : 0

  // 发送请求进行修改
  $.ajax({
    url: 'http://localhost:8888/cart/select/all',
    method: 'POST',
    data: { id: id, type: type },
    headers: { authorization: token }
  })

  // 从新渲染页面
  getCartList()
})

// 4-6. 清空购物车
$('.list').on('click', '.clear', function () {
  // 发送请求
  $.ajax({
    url: 'http://localhost:8888/cart/clear',
    method: 'GET',
    data: { id: id },
    headers: { authorization: token }
  })

  // 从新渲染页面
  getCartList()
})

// 4-7. 删除所有已选中
$('.list').on('click', '.clear_complete', function () {
  // 发送请求
  $.ajax({
    url: 'http://localhost:8888/cart/remove/select',
    method: 'GET',
    data: { id: id },
    headers: { authorization: token }
  })

  // 从新渲染页面
  getCartList()
})

// 4-8. 支付
$('.list').on('click', '.pay', function () {
  console.log('去支付')
})
