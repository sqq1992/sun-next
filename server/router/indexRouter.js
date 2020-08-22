
const router = require('koa-router')()


// todo 测试session
router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json',
  }
})

module.exports = router
