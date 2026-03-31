const express = require('express');
const router = express.Router();
const {
    getPostsLists,
    addNewPost,
    sendPostById
} = require('../controllers/postController');


router.get("/",getPostsLists);
router.post("/",addNewPost);
router.post("/:id",sendPostById);

module.exports = router;