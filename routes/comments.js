var data = require('../data.js')

module.exports = {
  	getComments(req, res) {
		res.status(200).send(data.posts[req.params.postId].comments)
  	},
  	addComment(req, res) {
  		let newComment = req.body
	  	let id = data.posts[req.params.postId].comments.length
	  	data.posts[req.params.postId].comments.push(newComment)
		res.status(201).send({id: id})
  	},
  	updateComment(req, res) {
		data.posts[req.params.postId].comments[req.params.commentId] = req.body
  	  	res.status(200).send(data.posts[req.params.postId].comments[req.params.commentId])
  	},
  	removeComment(req, res) {
		console.log(req.params.commentId)
		data.posts[req.params.postId].comments.splice(req.params.commentId,1)
		res.status(204).send()
  	}
}
