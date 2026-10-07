import express from 'express'
import { MongoClient } from 'mongodb'
import dotenv from 'dotenv'


const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

// Database Name
const dbName = 'passop';  
const app = express()
const port = 3000

await client.connect();



app.get('/', async (req, res) => {
  const db = client.db(dbName);
  const collection = db.collection('documents');
  const findResult = await collection.find({}).toArray();
  res.json(findResult)
})

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`)
})

// import express from 'express'
// import { MongoClient } from 'mongodb'
// import dotenv from 'dotenv'

// dotenv.config()

// const app = express()
// const port = 3000

// const url = 'mongodb://127.0.0.1:27017'
// const client = new MongoClient(url)

// const dbName = 'passop'

// // connect to MongoDB
// await client.connect()
// console.log('MongoDB connected')

// app.get('/', async (req, res) => {
//   const db = client.db(dbName)
//   const collection = db.collection('documents')
//   const findResult = await collection.find({}).toArray()
//   res.json(findResult)
// })

// app.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}`)
// })
