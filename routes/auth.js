const express = require("express")

const router = express.Router();

//const { attachment } = require("express/lib/response");

const authCtrl = require("../controllers/auth");

router.get("/auth/users", authCtrl.auth_user_get);
router.get("/auth/users/detail", authCtrl.user_detail_get)
//router.get("/auth/signup", authCtrl.auth_signup_get);
router.post("/auth/signup", authCtrl.auth_signup_post);
//router.get("/auth/login", authCtrl.auth_login_get);
router.post("/auth/login", authCtrl.auth_login_post);
//router.get("/auth/logout", authCtrl.auth_logout_get);

module.exports = router;