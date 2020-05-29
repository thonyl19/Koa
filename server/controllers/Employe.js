module.exports = {
    '/:sid':{
        c(ctx, next){
            let {sid} = ctx.params;
            ctx.body = {
                s:"post" ,sid
            };
        },
        r(ctx, next){
            let {sid} = ctx.params;
            ctx.body = {
                s:"get",sid
            };
        },
        u(ctx, next){
            let {sid} = ctx.params;
            ctx.body = {
                s:"put",sid
            };
        },
        d(ctx, next){
            let {sid} = ctx.params;
            ctx.body = {
                s:"delete",sid
            };
        }
    },
    ''(ctx, next){
        ctx.body = {
            s:"post" 
        };
    }
    
}

 
