const {ObjectID} = require('mongodb');

const {mongoose} = require('../server/db/mongoose');
const {Todo} = require('../server/models/todo');
const {User} = require('../server/models/user');

// Todo.remove({})
// 	.then((result) => {
// 		console.log(result);
// 	});

//Todo.findOneAndRemove()
//Todo.findByIdAndRemove()

Todo.findOneAndRemove({_id: "58f52ac5fa2befd54ce25f47"})
	.then((todo) => {
		
	})

Todo.findByIdAndRemove('58f52ac5fa2befd54ce25f47')
	.then((todo) => {
		console.log(todo);
	})