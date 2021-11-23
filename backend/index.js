require('dotenv').config()

const { v4: uuidv4 } = require('uuid');
const express = require('express')
const cors = require('cors')

const app = express()
const port = process.env.PORT || 4000
const { MongoClient } = require('mongodb');
const uri = process.env.URI;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(cors());
app.use(express.json())

app.get('/', (req, res) => {
	res.send('Hello World!')
})

app.post('/createpost', (req, res) => {
	const {username: bodyUsername, password: bodyPassword, title: bodyTitle, description: bodyDescription, date: bodyDate, body: bodyBody} = req.body; //object
	client.connect( async(err) => {
		const collectionUser = client.db("Blog").collection("Admin");
		let authUser = await collectionUser.findOne({username: bodyUsername, password: bodyPassword})
		console.log("This is the user " + authUser)
		if (authUser){
			client.connect(async(err) => {
				const collection = client.db("Blog").collection("Posts");
				let postNumber = await collection.countDocuments() + 1
				let post = {
					id: uuidv4(),
					number: postNumber,
					date: bodyDate,
					title: bodyTitle,
					description: bodyDescription,
					body: bodyBody
				}
				await collection.insertOne(post)
				res.sendStatus(201)
				return 201
			});
		}
		else{
			res.sendStatus(401)
			return 401
		}
	});
})

app.get('/getposts', (req, res)=> {
	client.connect( async(err) => {
		const collection = client.db("Blog").collection("Posts");
		collection.find({}).sort({number: -1}).toArray((err, result) => {
			if (err){
				res.send(err);
			}
			else{
				res.send(result)
			}
		})
	})
})

app.get('/getpost/:id', (req, res) => {
	let postNumber = req.params.id;
	client.connect( async(err) => {
		const collection = client.db("Blog").collection("Posts");
		let post = await collection.findOne({number: parseInt(postNumber)});
		if (post !== null){
			console.log(post)
			res.send(post)
		}
		else{
			res.sendStatus(404)
		}
	})
})

app.put('/visit/:id', (req, res) => {
	let postNumber = req.params.id;
	client.connect( async(err) => {
		const collection = client.db("Blog").collection("Posts");
		await collection.updateOne({number: parseInt(postNumber)}, {$inc: {visits: 1}})
	})
	res.send(200)
})

app.listen(port, () => {
	console.log(`Blog app is running at http://localhost:${port}`)
})
