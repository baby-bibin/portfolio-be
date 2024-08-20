const { Router } = require("express");

const profileController = require("../controllers/profileController");

const router = Router();

router.get("/", profileController.getProfile);
router.post("/", profileController.updateProfile);

module.exports = router;
