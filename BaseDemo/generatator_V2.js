/**
 * Created by Lutz on 2017/7/21.
 *
 * koa 中间件开发和使用
 * async await 中间件开发和使用只能在 koa2 环境中
 */

const koa = require('koa');
const convert = require('koa-convert');
const loggerGenerator  = require('../middleware/logger-generator');
const app = new koa();

app.use(convert(loggerGenerator()));//koa@2中需要用koa-convert封装一下才能使用

app.use(async(ctx) => {
    ctx.body = 'hello world!'
})

app.listen(3000)
console.log('port 3000',new Date().toLocaleString())