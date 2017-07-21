/**
 * Created by Lutz on 2017/7/21.
 *
 *  run：node -harmony router.js
 */

const Koa = require('koa');
const fs = require('fs');
const app = new Koa();

/*
    使用 Promise 封装异步读取文件方法
    @params page:string
    @return promise:func
*/

function render(page) {
    return new Promise((resolve,reject) => {
        let viewUrl = `../view/${page}`;// view 目录
        fs.readFile(viewUrl,"binary",(err,data)=>{
            if(err){
                reject(err);
            }else{
                resolve(data)
            }
        })
    })
}

/*
    根据URL获取对应HTML内容
    @params url:string
    @return promise:func
*/
async function route(url){
    let view = '404';
    switch (url){
        case '/':
            view = 'index'
            break;
        case '/index':
            view = 'index';
            break;
        case '/todo':
            view = 'todo';
            break;
        default:
            break;
    }
    return await render(`${view}.html`);
}

app.use(async(ctx)=>{
    ctx.body = await route(ctx.request.url);
}).listen(3000);

console.log('port 3000',new Date().toLocaleString());