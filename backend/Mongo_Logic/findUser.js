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

// async function findListingsWithMinimumBedroomsBathroomsAndMostRecentReviews(client, {
//     minimumNumberOfBedrooms = 0,
//     minimumNumberOfBathrooms = 0,
//     maximumNumberOfResults = Number.MAX_SAFE_INTEGER
// } = {}) {

//     // See http://bit.ly/Node_find for the find() docs
//     const cursor = client.db("sample_airbnb").collection("listingsAndReviews")
//         .find({
//             bedrooms: { $gte: minimumNumberOfBedrooms },
//             bathrooms: { $gte: minimumNumberOfBathrooms }
//         }
//         )
//         .sort({ last_review: -1 })
//         .limit(maximumNumberOfResults);

//     // Store the results in an array
//     const results = await cursor.toArray();

//     // Print the results
//     if (results.length > 0) {
//         console.log(`Found listing(s) with at least ${minimumNumberOfBedrooms} bedrooms and ${minimumNumberOfBathrooms} bathrooms:`);
//         results.forEach((result, i) => {
//             date = new Date(result.last_review).toDateString();

//             console.log();
//             console.log(`${i + 1}. name: ${result.name}`);
//             console.log(`   _id: ${result._id}`);
//             console.log(`   bedrooms: ${result.bedrooms}`);
//             console.log(`   bathrooms: ${result.bathrooms}`);
//             console.log(`   most recent review date: ${new Date(result.last_review).toDateString()}`);
//         });
//     } else {
//         console.log(`No listings found with at least ${minimumNumberOfBedrooms} bedrooms and ${minimumNumberOfBathrooms} bathrooms`);
//     }
// }
