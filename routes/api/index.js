const router = require("express").Router();
const SignUpRoutes = require("./SignUp");

router.use("/SignUp", SignUpRoutes);

module.exports = router;