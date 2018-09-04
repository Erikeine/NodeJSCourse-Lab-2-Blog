const express = require('express')
const logger = require('morgan')
const bodyParser = require('body-parser')
const routes = require('./routes')

let app = express()
app.use(bodyParser.json())
app.use(logger('dev'))

app.post('/posts', routes.posts.addPost)
app.get('/posts', routes.posts.getPosts)
app.delete('/posts/:postId', routes.posts.removePost)
app.put('/posts/:postId', routes.posts.updatePost)

app.post('/posts/:postId/comments', routes.comments.addComment)
app.get('/posts/:postId/comments', routes.comments.getComments)
app.delete('/posts/:postId/comments/:commentId', routes.comments.removeComment)
app.put('/posts/:postId/comments/:commentId', routes.comments.updateComment)

app.listen(3000)
