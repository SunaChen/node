//路由参数

const Koa = require('koa')
const Router = require('koa-router')

let server =new Koa()
server.listen(8080)

let router = new Router()

//多个同名的参数，先碰到是是谁，要想继续向下执行加next()
router.get('/news/:id',async(ctx,next) => {
    let {id} = ctx.params
    ctx.body=`新闻${id}`
})

router.get('/news/1',async(ctx,next) => {
    let {id} = ctx.params
    ctx.body=`新闻${id}`
    await next()
})

//多个参数
router.get('/news/:id/:id2/:id3',async ctx => {
    let {id,id2,id3} = ctx.params
    ctx.body=`新闻${id}_${id2}_${id3}`
})

router.get('/news/',async(ctx,next) => {
    let {id} = ctx.query //?传参
    ctx.body=`新闻??${id}`
})



server.use(router.routes())

