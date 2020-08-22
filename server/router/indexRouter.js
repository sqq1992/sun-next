

module.exports = function (router, nextHandle) {

  // todo 测试session
  router.get('/json', async (ctx, next) => {
    ctx.body = {
      title: 'koa2 json',
    }
  })
};
