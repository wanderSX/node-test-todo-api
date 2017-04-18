require('./config/config.js');

let express = require('express');
let bodyParser = require('body-parser');
let {ObjectID} = require('mongodb');
let _ = require('lodash');

let { mongoose } = require('./db/mongoose.js');
let { Todo } = require('./models/todo.js');
let { User } = require('./models/user.js');

let app = express();
const port = process.env.PORT;


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
			res.status(400).send(e);
		})
});

// GET /todo/someId
app.get('/todos/:id', (req, res) => {
	const {id} = req.params;

	if (!ObjectID.isValid(id)) {
		return res.status(404).send();
	};

	Todo.findById(id)
		.then((todo) => {
			if (todo) {
				res.send({todo});
			} else {
				res.status(404).send();
			}
		}).catch((e) => {
			res.status(400).send();
		})
});

app.delete('/todos/:id', (req, res) => {
	const {id} = req.params;

	if (!ObjectID.isValid(id)) {
		return res.status(404).send();
	};

	Todo.findByIdAndRemove(id)
		.then((todo) => {
			if (!todo) {
				return res.status(404).send();
			}

			res.send({todo});
		}).catch((e) => {
			res.status(400).send();
		})
});

app.patch('/todos/:id', (req, res) => {
	let {id} = req.params;
	let body = _.pick(req.body, ['text', 'completed']);

	if (!ObjectID.isValid(id)) {
		return res.status(404).send();
	};

	if (_.isBoolean(body.completed) && body.completed) {
		body.completedAt = new Date().getTime();
	} else {
		body.completed = false;
		body.completedAt = null;
	}

	Todo.findByIdAndUpdate(id, {$set: body}, {new: true})
		.then((todo) => {
			if (!todo) {
				return res.status(404).send();
			}

			res.send({todo});
		}).catch((e) => {
			res.status(400).send();
		})
})


app.listen(port, () => {
	console.log(`Started on port ${port}`);
});

module.exports = {app};