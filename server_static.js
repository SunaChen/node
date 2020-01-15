const Koa = require('koa')
const Router = require('koa-router')
const static = require('koa-static')

let server = new Koa()
server.listen(8080)


/*
let router = new Router()
server.use(router.routes())

server.use(static('./static',{
    maxage:86400*1000,  //设置缓存时间
    index:'static.html' //设置默认根路径
})
)*/

//针对不同的文件设置不同的缓存时间

let staticRouter = new Router()
staticRouter.all(/(\.jpg|\.png|\.gif)$/i,static('./static',{
    maxage:1238*1000,

}))
staticRouter.all(/(\.css)$/i,static('./static',{
    maxage:5643*1000,

}))
staticRouter.all(/(\.html|\.xhtml)$/i,static('./static',{
    maxage:4643*1000,

}))


server.use(staticRouter.routes())
