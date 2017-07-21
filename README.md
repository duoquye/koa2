# koa2

## koa@2文件目录
```
├── lib
│   ├── application.js
│   ├── context.js
│   ├── request.js
│   └── response.js
└── package.json
```
application.js 是整个koa2 的入口文件，封装了context，request，response，以及最核心的中间件处理流程。
context.js 处理应用上下文，里面直接封装部分request.js和response.js的方法
request.js 处理http请求
response.js 处理http响应

## koa2 特性
只提供封装好 http 上下文、请求、响应，以及基于 async/await 的中间件容器。
利用ES7的 async/await 的来处理传统回调嵌套问题和代替 koa@1 的 generator，但是需要在 node.js 7.x 的harmony模式下才能支持async/await。
中间件只支持 async/await 封装的，如果要使用 koa@1 基于 generator 中间件，需要通过中间件 koa-convert 封装一下才能使用。

## 相关依赖包
```bash
## koa@2
## koa-router@7
## koa-convert

npm i --save koa koa-router koa-convert
```

## 相关参考
[koa](https://chenshenhai.github.io/koa2-note/)
[koa-router](http://www.nodepeixun.com/a/nodekuangjia/20170114/126.html)
