/**
 * Created by Lutz on 2017/7/21.
 *
 * async/await 的特点
 *      让异步逻辑用同步写法实现
 *      最底层的 await 需要返回 Promise 对象
 *      可以通过多层 async function 的同步写法代替传统的callback嵌套
 */



const koa = require('koa');
const app = new koa();

function getSyncTime(){
    return new Promise((resolve,reject)=>{
        try{
            let startTime = new Date().getTime();
            setTimeout(()=>{
                let endTime = new Date().getTime();
                let date = endTime - startTime;
                resolve(date);
            },500)
        }catch(err){
            reject(err)
        }
    })
}

async function getSyncDate(){
    let time = await getSyncTime();
    let date = `endTime - startTime = ${time}`;
    return date;
}

async function getDate(){
    let date = await getSyncDate();
    return date;
}

app.use( async (ctx) => {
    ctx.body = await getDate();
}).listen(3000)

console.log('port 3000',new Date().toLocaleString())