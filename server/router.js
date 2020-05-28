const router = require('koa-router')();
const _ = require('lodash');
const user = require('./controllers/User');
const pages = require('./controllers/Page');
var _list = [pages,user];

_.each(_list,(grp)=>{
    _.each(grp,(Funs,verb)=>{
        _.each(Funs,(fn,url)=>{
            console.log(`${verb}-${url}`)
            router[verb](url,fn);
        })
    })
})
module.exports = router;
 