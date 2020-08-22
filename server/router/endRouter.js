const {nextHandle} = require("../env");
const router = require('koa-router')()

//todo 匹配不到, 默认走next的服务端渲染
router.get('*', async (ctx, next) => {
  await nextHandle(ctx.req, ctx.res)
  ctx.respond = false
})

module.exports = router
