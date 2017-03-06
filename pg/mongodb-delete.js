const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if (err) {
		return console.log("Unable to connect to MongoDB server");
	}
	console.log("Connected to MongoDB server");

	// db.collection('Todos').deleteMany({text: "Eat lunch"})
	// 	.then((result) => {
	// 		console.log(result);
	// 	});

	// db.collection("Todos").deleteOne({text: "Eat lunch"})
	// 	.then((result) => {
	// 		console.log(result);
	// 	});

	// db.collection("Todos").findOneAndDelete({completed: false})
	// 	.then((result) => {
	// 		console.log(result);
	// 	});

	db.collection("Users").deleteMany({name: "Kot"});

	// db.collection("Users").findOneAndDelete({_id: new ObjectID('58bc9d6cc0f9cd11a0a9e092')})
	// 	.then((result) => {
	// 		console.log(result);
	// 	})	

	//db.close();
});