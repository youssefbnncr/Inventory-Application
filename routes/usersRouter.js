const { Router } = require("express");
const usersController = require("../controllers/usersController");

const { body, validationResult } = require("express-validator");

const router = Router();

router.get("/", usersController.getHome);
router.get("/addCategory", usersController.getAddCategory);
router.post(
  "/addCategory",
  [body("name").notEmpty().withMessage("name should be filled")],
  (req, res) => {
    const err = validationResult(req);
    if (!err.isEmpty()) {
      res.status(400).render("addCategory", { error: err.array() });
    }
    usersController.addCategory(req, res);
  },
);
module.exports = router;
