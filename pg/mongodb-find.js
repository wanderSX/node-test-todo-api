const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if (err) {
		return console.log("Unable to connect to MongoDB server");
	}
	console.log("Connected to MongoDB server");

	// db.collection("Todos").find({
	// 	_id: new ObjectID('58bc9657b374a718c8b2202e')
	// }).toArray()
	// 	.then((docs) => {
	// 		console.log("Todos");
	// 		console.log(JSON.stringify(docs, null, 2));
	// 	}, (err) => {
	// 		console.log("Unable to fetch todos", err);
	// 	});

		// db.collection("Todos").find().count()
		// 	.then((count) => {
		// 		console.log(`Todos count: ${count}`);
		// 	}, (err) => {
		// 		console.log("Unable to fetch todos", err);
		// 	});

		db.collection("Users").find({name: "Kot"}).toArray()
			.then((users) => {
				console.log("Users");
				console.log(JSON.stringify(users, null, 2));
			}, (err) => {
				console.log("Unable to fetch users", err);
			})	

	//db.close();
});