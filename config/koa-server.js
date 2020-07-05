/*
這個範例實作不完全,待完善
*/
const Koa = require('koa')

const appConfig = require('./../app.config')

const app = new Koa()
const uri = 'http://' + appConfig.appIp + ':' + appConfig.appPort

const server = app.listen(appConfig.appPort,appConfig.appIp,() => {
    console.log('Example app listening on ' + uri + '\n');
})

//以 指令化的 方式,將 Koa 的服務停掉
process.on('SIGTERM', () => {
    console.log('Stopping dev server')
    server.close(() => {
        process.exit(0)
    })
})