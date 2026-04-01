const express = require('express');
const router = express.Router();
const {getPostList, addNewPost, sendPostById, deletePostById,updatePostById,getPostById,putPostById,patchPostById} = require("../controllers/postController");

router.get("/", getPostList);
router.post("/", addNewPost);
router.put("/:id", sendPostById);
router.delete("/:id",deletePostById);
router.update("/:id",updatePostById);
router.get("/:id",getPostById);
router.put("/:id",putPostById);
router.patch("/:id",patchPostById);

// const postController = require("../controllers/postController");
// router.get("/", postController.getPostList);
// router.post("/", postController.addNewPost);
// router.put("/:id", postController.sendPostById);
module.exports = router;