const Koa = require('koa')
const Router = require('koa-router')

let server = new Koa()
let router = new Router()
server.listen(8080)

router.get('/login',async ctx => {
   /* if (!ctx.query.username || !ctx.query.password){
        ctx.throw(400,"usr and password is required")
    }else {
        ctx.body = '成功'
    }*/

   ctx.assert(ctx.query.username,400,'username is required')
   ctx.assert(ctx.query.password,400,'password is required')
    ctx.body = '成功assert'
})

server.use(router.routes())