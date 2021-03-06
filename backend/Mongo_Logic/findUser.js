const { MongoClient } = require('mongodb');
const uri = require('./uri')

module.exports =  async function main(user) {

    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

    try {
        // Connect to the MongoDB cluster
        await client.connect();

        // Make the appropriate DB calls

        let result = await findUser(client, user);

        return result

    } finally {
        // Close the connection to the MongoDB cluster
        await client.close();
    }
}

async function findUser(client, user) {
    // See http://bit.ly/Node_findOne for the findOne() docs
    const result = await client.db("wm_challenge_users").collection("users").findOne({ username: user.username, password: user.password });

    if (result) {
        return result
    } else {
        console.log(`No user found`);
        return false
    }
}