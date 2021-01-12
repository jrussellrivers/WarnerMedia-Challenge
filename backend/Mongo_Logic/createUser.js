const {MongoClient} = require('mongodb');
const uri = require('./uri')

module.exports = async function main(user){

    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

    try {
        // Connect to the MongoDB cluster
        await client.connect();

        // Make the appropriate DB calls

        // Create a single new listing
        await createUser(client,
            {
                username: user.username,
                password: user.password
            }
        );

    } finally {
        // Close the connection to the MongoDB cluster
        await client.close();
    }
}

async function createUser(client, newUser){
    // See http://bit.ly/Node_InsertOne for the insertOne() docs
    const result = await client.db("wm_challenge_users").collection("users").insertOne(newUser);
    console.log(`New user created with the following id: ${result.insertedId}`);
}