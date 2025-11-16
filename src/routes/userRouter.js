const router = require("express").Router();
const userAuth = require("../middlewares/userAuth");

router.get("/admin",userAuth,(req,res)=>{
    const user = req.user;
    res.json({user})
});

module.exports = router;
