let express = require('express');
let bodyParser = require('body-parser');

let { mongoose } = require('./db/mongoose.js');
let { Todo } = require('./models/todo.js');
let { User } = require('./models/user.js');

let app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
	let todo = Todo({
		text: req.body.text
	});

	todo.save().then((doc) => {
		res.send(doc);
	}, (e) => {
		res.status(400).send(e);
	})
});

app.get('/todos', (req, res) => {
	Todo.find()
		.then((todos) => {
			res.send({todos});
		}, (e) => {
			res.statur(400).send(e);
		})
});


app.listen(3000, () => {
	console.log("Started on port 3000");
});

module.exports = {app};