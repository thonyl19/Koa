module.exports = {
    async ''(ctx, next){
        const title = 'hello koa2--test'
        await ctx.render('index', {
            title,
        })
    },
    async 'user/:id'(ctx, next){
        const title = `hello koa2-- ${ctx.params.id}`;
        await ctx.render('index', {
            title,
        })
    }
}
