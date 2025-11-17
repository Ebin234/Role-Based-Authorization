const authorizeAccess = (...input)=>{
    return function (req,res,next){
        const access = input.includes(req.user.role);
        if(access){
            next()
        }else{
            res.status(401).json({message:"Access Denied"});
        }
    }
}

module.exports = authorizeAccess