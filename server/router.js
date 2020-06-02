const router = require('koa-router')();
const _ = require('lodash');
const user = require('./controllers/User');
const pages = require('./controllers/Page');
const employe = require('./controllers/Employe');
 
var KoaRouterApp = {
    map_crud:{
        c:'post',
        r:'get',
        u:'patch',
        d:'delete'
    },
    Mode_A(_modeA){
        _.each(_modeA,(grp)=>{
            _.each(grp,(Funs,verb)=>{
                _.each(Funs,(fn,url)=>{
                    console.log(`${verb}-${url}`)
                    //router[verb](`/api/${url}`,fn);
                })
            })
        })
    },
    Mode_C(rootGrp){
        _.each(rootGrp,(root,rootName)=>{
            KoaRouterApp.Mode_B(rootName,root);
        })
    },
    Mode_B(rootName,root){
        switch(rootName){
            case "/api/":
                _.each(root,KoaRouterApp.Ctrs(rootName))
                break;
            case "/page/":
                _.each(root,KoaRouterApp.Verbs(rootName,""))
                break;
        }
    },
    Ctrs(rootName){
        return (ctrs,ctrName)=>{
            _.each(ctrs,KoaRouterApp.Verbs(rootName,ctrName));
        }
    },
    Verbs(rootName,ctrName){
        return (Verbs,path)=>{
            var _url = `${rootName}${ctrName}${path}`;
            if (_.isFunction(Verbs)){
                switch(rootName){
                    case "/api/":
                        KoaRouterApp.bindVerb(_url)(Verbs,"c");
                        break;
                    case "/page/":
                        KoaRouterApp.bindVerb(_url)(Verbs,"r");
                        break;
                }
            }else{
                _.each(Verbs,KoaRouterApp.bindVerb(_url))
            }
        }
    },
    bindVerb(_url){
        return (fn,crud)=>{
            var _verb =  KoaRouterApp.map_crud[crud];
            console.log(`${_verb}:${_url}`);
            //router[_verb](_url,fn);
        }
    }
}

//var _root="/api/"
var _router = {
    '/api/':{employe},
    '/page/':pages
}
KoaRouterApp.Mode_C(_router);




module.exports = router;
 