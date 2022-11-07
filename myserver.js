//http模块
var http = require('http');

// 创建服务器
var server = http.createServer(function(req,res){
    // 请求 req  响应 res
    // res.write('myserver');
    res.writeHead(200,{'Content-type':'text/html;charset=UTF-8'});
    res.write('<h> myserver!!!</h>')
    res.end();
});

// 监听3000端口
server.listen(1088,'127.0.0.1');
