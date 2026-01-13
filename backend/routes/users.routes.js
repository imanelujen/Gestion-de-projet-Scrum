const router = require("express").Router();
const userController = require("../controllers/user.controller");
const auth = require("../middlewares/auth.middleware");
const admin = require("../middlewares/admin.middleware");

router.get("/", auth, admin, userController.getAllUsers);
router.get("/:id", auth, admin, userController.getUserById);
router.put("/:id", auth, admin, userController.updateUser);
router.delete("/:id", auth, admin, userController.deleteUser);

module.exports = router;
