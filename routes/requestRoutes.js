const express = require("express");
const requestController = require("../controllers/requestController.js");

const router = express.Router();

router.get("/", requestController.getAllRequests);
router.post("/", requestController.createRequest);
router.patch("/:id", requestController.updateRequest);
router.get("/:id", requestController.getRequest);
router.delete("/:id", requestController.deleteRequest);

module.exports = router;