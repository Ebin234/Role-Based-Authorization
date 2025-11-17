const router = require("express").Router();
const userAuth = require("../middlewares/userAuth");
const { getAdminPage ,getManagerPage,getUserPage} = require("../controllers/userController");
const authorizeAccess = require('../middlewares/authorizeAccess')

router.get("/admin", userAuth,authorizeAccess("admin"),getAdminPage);
router.get('/manager',userAuth,authorizeAccess("admin","manager"),getManagerPage)
router.get('/user',userAuth,authorizeAccess("admin","manager","user"),getUserPage)

module.exports = router;
