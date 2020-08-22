const Koa = require('koa')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger');
const Router = require('koa-router')
const session = require('koa-generic-session');
const redisStore = require('koa-redis');

const indexRouter = require('./router/indexRouter');
const endRouter = require('./router/endRouter');


module.exports = function (nextHandle) {
  const app = new Koa();
  const router = new Router()

  // error handler
  onerror(app)

  // middlewares
  app.use(bodyparser({
    httpOnly: true,
    enableTypes:['json', 'form', 'text']
  }))
  app.use(json())
  app.use(logger())

// //todo 静态文件
// app.use(koaStatic(__dirname + '/public'))
// app.use(koaStatic(targetFilePath))


// logger
  app.use(async (ctx, next) => {
    const start = new Date()
    await next()
    const ms = new Date() - start
    console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
  })

// //todo session 配置
// app.keys = ['SUN#1992'];
// app.use(session({
//   key: 'weibo.sid',
//   prefix: 'weibo.sess',
//   cookie: {
//     path: '/',
//     maxAge: 24 * 60 * 60 * 1000
//   },
//   // ttl: 24 * 60 * 60 * 1000,   //session 过期时间
//   store: redisStore({
//     all: `${REDIS_CONFIG.host}:${REDIS_CONFIG.port}`
//   })
// }));


  //路由
  indexRouter(router);
  endRouter(router, nextHandle);
  app.use(router.routes(), router.allowedMethods());


  // error-handling
  app.on('error', (err, ctx) => {
    console.error('server error', err, ctx)
  });


  return app;
};
