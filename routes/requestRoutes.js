const express = require("express");
const requestController = require("../controllers/requestController.js");

const router = express.Router();

// router.get("/", requestController.getAllRequests);
// router.get("/getRequest", requestController.getRequest);
router.post("/", requestController.createRequest);
// router.patch("/updateRequest/:id", requestController.updateRequest);
// router.delete("/deleteRequest/:id", requestController.deleteRequest);

module.exports = router;