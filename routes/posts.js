var data = require('../data.js')

module.exports = {
  getPosts(req, res) {
	  res.status(200).send(data.posts)
  },
  addPost(req, res) {
	  let newPost = req.body
	  let id = data.posts.length
	  newPost.comments = []
	  data.posts.push(newPost)
	  res.status(201).send({id: id})
  },
  updatePost(req, res) {
	  data.posts[req.params.postId] = req.body
	  res.status(200).send(data.posts[req.params.postId])
  },
  removePost(req, res) {
	  data.posts.splice(req.params.postId,1)
	  res.status(204).send()
  }
}
