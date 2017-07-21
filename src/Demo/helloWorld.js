/**
 * Created by Lutz on 2017/7/21.
 */

const Koa = require('koa');
const app = new Koa();

app.use(async (ctx) => {
    ctx.body = 'hello koa2'
})

app.listen(3000)
console.log('[demo] start-quick is starting at port 3000')