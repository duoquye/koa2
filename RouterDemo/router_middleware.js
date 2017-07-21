/**
 * Created by Lutz on 2017/7/21.
 */

const Koa = require('koa');
const fs = require('fs');
const Router = require('koa-router');

const app = new Koa();

//子路由1
let home = new Router();
home.get('/',async (ctx) => {
    let html = `
        <ul>
            <li><a href="/page/helloworld">/page/helloworld</a></li>
            <li><a href="/page/404">/page/404</a></li>
        </ul>
    `;
    ctx.body = html;
})

//子路由2
let page = new Router();
page.get('/404',async (ctx) => {
    ctx.body = '404 page!'
}).get('/helloworld',async (ctx)=>{
    ctx.body = 'helloworld page!';
})

//装载所有子路由
let router = new Router();
router.use('/',home.routes(),home.allowedMethods())
      .use('/page',page.routes(),page.allowedMethods());

//加载路由中间件
app.use(router.routes())
   .use(router.allowedMethods())
   .listen(3000);

console.log('port 3000',new Date().toLocaleString());
