const SignUpController = require("../../controllers/SignUpController");

router.route("/")
  .get(SignUpController.findAll)
  .post(SignUpController.create);

router
  .route("/:id")
  .get(SignUpController.findById)
  .put(SignUpController.update)
  .delete(SignUpController.remove);

module.exports = router;