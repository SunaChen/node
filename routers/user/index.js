const Router = require('koa-router')
const router = new Router()

router.get('/',ctx => {
    ctx.body = '用户'
})

router.use('/company',require('./company'))
router.use('/admin',require('./admin'))

module.exports = router.routes()