'use strict';

const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;
const mongoose = require('mongoose');
main().catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb://localhost:27017/test');
}

const { 
    seedData,
    updateUserItem,
    watchesDataGet,
    deleteUserItem,
    UserFavlist,
    userCheck
} = require('./controllers/watch.Controller');

app.get('/', (req, res) => {
    res.status(200).json({
        "server msg": "the server running 👌"
    })
});


app.get('/seedData', seedData);
app.get('/watchesDataGet', watchesDataGet);
app.post('userCheck/:email', userCheck)
app.get('/UserFavlist', UserFavlist);
app.patch('/deleteUserItem:email/:id', deleteUserItem);
app.patch('/updateUserItem/:email/:id', updateUserItem);

app.listen(PORT, () => { console.log(`port is running on: ${PORT}`) })
// (v.salvatore7.gs@gmail.com) (moegts@gmail.com)
