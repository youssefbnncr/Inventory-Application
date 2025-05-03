const { Router } = require('express');
const usersController = require("../controllers/usersController");

const router = Router();

router.get('/',usersController.getHome);
router.get('/signup',usersController.getSignup)
router.post('/addUser',usersController.addUser)
module.exports = router;