const getPostsLists = (req, res) => {
    res.send("ye le saare blogs ki list");
};

const addNewPost = (req, res) => {
    res.send("ja krdiya post!");
};

const sendPostById = (req, res) => {
    res.send("ye lo yeh waale poora blog");
}

module.exports = {getPostsLists, addNewPost, sendPostById};