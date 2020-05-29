const router = require('koa-router')();
const _ = require('lodash');
const user = require('./controllers/User');
const pages = require('./controllers/Page');
const employe = require('./controllers/Employe');
var _modeA = [pages,user];
var _modeB = {employe};
var _root="/api/"
_.each(_modeA,(grp)=>{
    _.each(grp,(Funs,verb)=>{
        _.each(Funs,(fn,url)=>{
            console.log(`${verb}-${url}`)
            router[verb](`/api/${url}`,fn);
        })
    })
})

var map_crud={
    c:'post',
    r:'get',
    u:'patch',
    d:'delete'
}
_.each(_modeB,(grp,grp_name)=>{
    _.each(grp,(Verbs,path)=>{
        var _url = `${_root}${grp_name}${path}`;
        if (_.isFunction(Verbs)){
            router.post(_url,Verbs) 
            console.log(`post:${_url}`);
        }else{
            _.each(Verbs,(fn,crud)=>{
                var _verb =  map_crud[crud];
                router[_verb](_url,fn);
                console.log(`${_verb}:${_url}`);

            })
        }
    })
})
module.exports = router;
 