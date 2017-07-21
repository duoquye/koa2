/**
 * Created by Lutz on 2017/7/21.
 *
 * 注：node.js v7.6.0开始完全支持 async/await 不需要加flag!
 *
 * Demo 相关依赖包版本
 *      node v8.1.3
 *      koa@2.3.0
 *
 * 如何运行
 *      进入到[文件所在目录]
 *      node [文件名.js]
 *
 *      例如:
 *          cd BaseDemo
 *          node helloWordld.js
 *          打开浏览器: localhost:3000
 */

const Koa = require('koa');
const app = new Koa();

app.use(async (ctx) => {
    ctx.body = 'hello koa2'
})

app.listen(3000)
console.log('port 3000',new Date().toLocaleString())