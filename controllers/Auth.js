var jwt = require('jsonwebtoken');
module.exports = {
    '/login'(ctx, next){
        const data = ctx.request.body; 
        const userToken = {
            name: 'user_name',
            id: data
        }
        //指定密钥，这是之后用来判断token合法性的标志
        const secret = 'demo'; 
        // 签发token
        const token = jwt.sign(userToken,secret); 
        ctx.body = {
            success: true,
            token,  
        }
    },
}

 
