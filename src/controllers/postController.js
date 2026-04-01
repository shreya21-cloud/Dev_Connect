const getPostList = (req, res) => {
  res.send("blog list ");
}
const addNewPost = (req, res) => {
  res.send("new blog added" );
}
const sendPostById = (req, res) => {
  const postId = req.params.id;
  res.send(`blog with id.no  ${postId}` );
}
const deletePostById = (req, res) => {
  const postId = req.params.id;
  res.send(`deleted blog with ID: ${postId}` );
}
const updatePostById = (req, res) => {
  const postId = req.params.id;
  res.send("blog updated " );
}
const getPostById = (req, res) => {
  const postId = req.params.id;
  res.send("this is ur blog");
}
const putPostById = (req, res) => {
  const postId = req.params.id;
  res.send("ur blog changed ");
}
const patchPostById = (req, res) => {
  const postId = req.params.id;
  res.send("post updated ");
}
module.exports = {getPostList,addNewPost,sendPostById,deletePostById,updatePostById,getPostById,putPostById,patchPostById};