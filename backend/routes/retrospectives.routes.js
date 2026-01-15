const router = require("express").Router();
const retroController = require("../controllers/retrospective.controller");
const auth = require("../middlewares/auth.middleware");

router.get("/sprint/:sprintId", auth, retroController.getRetroBySprint);
router.post("/", auth, retroController.createRetrospective);
router.post("/items", auth, retroController.addItem);
router.post("/items/:id/vote", auth, retroController.voteItem);
router.delete("/items/:id", auth, retroController.deleteItem);

module.exports = router;
