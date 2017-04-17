const {ObjectID} = require('mongodb');

const {mongoose} = require('../server/db/mongoose');
const {Todo} = require('../server/models/todo');
const {User} = require('../server/models/user');

// var id = '58f4ac5983322d10241e454811';

// if (!ObjectID.isValid(id)) {
// 	console.log('Id not valid');
// }


// Todo.find({
// 	_id: id
// }).then((todos) => {
// 	console.log("todos", todos);
// });

// Todo.findOne({
// 	_id: id
// }).then((todo) => {
// 	console.log("todo", todo);
// });

// Todo.findById(id)
// 	.then((todo) => {
// 		if (!todo) {
// 			return console.log('Id not found');
// 		}
// 		console.log('Todo by Id', todo);
// }).catch((e) => console.log(e)); // for invalid Id


User.findById('58bd8fef7e34fcbc09f5e0e7')
	.then((user) => {
		if (!user) {
			return console.log('User not Found');
		}
		console.log(JSON.stringify(user, null, 2));
	}).catch((e) => console.log(e));