const express = require("express");
const cors = require('cors')
const findUser = require('./Mongo_Logic/findUser')
const createUser = require("./Mongo_Logic/createUser")

const port = 3434

const app = express();

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())

app.use(express.static("public"));

app.post('/user/register', async (req, res)=>{
    let user = await findUser(req.body)
    if (!user){
        let result = await createUser(req.body)
        result ? res.send(result) : res.send(false)
    } else {
        console.log('User already exists')
        res.send(false)
    }
})

app.post('/user/login', async (req, res)=>{
    let result = await findUser(req.body)
    result ? res.send(result) : res.send(false)
})

app.listen(port);