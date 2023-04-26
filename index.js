require('dotenv').config();

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const MONGODB_DATABASE = process.env.MONGODB_DATABASE;
// const MongoStore = require('connect-mongo');
// const MONGODB_HOST = process.env.MONGODB_HOST;
// const MONGODB_USER = process.env.MONGODB_USER;
// const MONGODB_PASSWORD = process.env.MONGODB_PASSWORD;
// const MONGODB_DATABASE = process.env.MONGODB_DATABASE;
// const MONGODB_SESSION_SECRET = process.env.MONGODB_SESSION_SECRET;
// const NODE_SESSION_SECRET = process.env.NODE_SESSION_SECRET;

const {requireFile} = require('./filePathUtil');

const client = require('./databaseConnection');

app.get('/def', async (req, res) => {
    console.log('inserted john');
    res.send(`<h1>Welcome to MongoDB app!!</h1>`);
});

app.get('/add', async (req, res) => {
        await client.connect();
        const db = client.db(MONGODB_DATABASE);
        const collection = db.collection('assignment1');
        const exampleData = {
            name: 'shawn',
            age: 30,
            city: 'New York'
        };
        const result = await collection.insertOne(exampleData);
        console.log('inserted john', result.insertedId);
        res.send(`<h1>Inserted John with id: ${result.insertedId}</h1>`);

});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
