/**
 * Created by Lutz on 2017/7/21.
 *
 *  koa@2 中间件开发
 */

const Koa = require('koa');
const loggerAsync = require('../middleware/logger-async');
const app = new Koa();

app.use(loggerAsync());

app.use(async (ctx) => {
    ctx.body = 'hello world!'
}).listen(3000)

console.log('port 3000',new Date().toLocaleString())