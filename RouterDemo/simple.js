/**
 * Created by Lutz on 2017/7/21.
 */

const Koa = require('koa');
const app = new Koa();

app.use(async(ctx)=>{
    ctx.body = ctx.request.url;
}).listen(3000);

console.log('port 3000',new Date().toLocaleString());
