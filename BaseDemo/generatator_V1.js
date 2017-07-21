/**
 * Created by Lutz on 2017/7/21.
 *
 * koa 中间件开发和使用
 * async await 中间件开发和使用只能在 koa2 环境中
 */

const koa = require('koa')  // koa@1
const loggerGenerator  = require('../middleware/logger-generator')
const app = koa()//koa@2 需要是用 new 来实例化

app.use(loggerGenerator())

app.use(function *( ) {
    this.body = 'hello world!'
})

app.listen(3000)
console.log('port 3000',new Date().toLocaleString())