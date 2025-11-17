const authorizeAccess = (...input)=>{
    return function (req,res,next){
        console.log({input})
        console.log(req.user.role)
        const access = input.includes(req.user.role)
        console.log(access)
        if(access){
            next()
        }else{
            res.status(401).json({message:"Access Denied"})
        }
    }
}

module.exports = authorizeAccess