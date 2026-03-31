const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');


router.get("/",postController.getPostsLists);
router.post("/",postController.addNewPost);
router.post("/:id",postController.sendPostById);

module.exports = router;