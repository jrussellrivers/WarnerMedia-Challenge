const express = require("express");
const findUser = require('./Mongo_Logic/findUser')
const createUser = require("./Mongo_Logic/createUser")

const port = 3434

const app = express();

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use(express.static("public"));

app.get('/user/register', async (req, res)=>{
    let result = await createUser(req.body.user)
    result ? res.send(result) : res.send(false)
})

app.get('/user/find', async (req, res)=>{
    let result = await findUser(req.body.user)
    result ? res.send(result) : res.send(false)
})

app.listen(port);