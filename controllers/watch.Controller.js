'use strict';
// Add-To-list button
const { WatchesModel, UserModel } = require('../models/watches.Model');
const axios = require('axios');

let seedData = async (req, res) => {
    let url = "https://watches-world.herokuapp.com/watches-list/";
    let apiData = await axios.get(url);
    console.log(apiData);
    // let cleanedData = await apiData
    // let a = app.get("https://watches-world.herokuapp.com/watches-list/")

}

let watchesDataGet = async (req, res) => {
    let watchesList = await WatchesModel.find({});
    res.status(200).json(watchesList)
}

let userCheck = async(req,res) => {
    let email = req.params.email
    let checker = await UserSchema.findOne({ email: email })
    if (checker === null) new usermodel({ email }).save(), res.status(200).json('added');
    if (checker != null) res.status(200).json('already added');
}

let UserFavlist = async(req, res) => {
    let email = req.params.email;
    let user = await usermodel.findOne({ email })
    res.status(200).json(user);
}

let deleteUserItem = async (req, res) => {
    let id = req.params.id;
    let email = req.params.email;
    let userData = await UserModel.findOne({ email });
    userData.favlist?.map((e,i)=>{
        if (id == e?._id.toString()) userData.favlist.splice(i,1);
    })
    userData.save();
    res.status(200).json(userData);
}

let updateUserItem = async (req, res) => {
    let id = req.params.id;
    let email = req.params.email;
    let userData = await UserModel.findOne({ email });
    let body = req.body;
    userData.favlist.map(e => {
        if ((e._id.toString()) === id) {
            e.title = body.title;
        }
    })
    await UserModel.findByIdAndUpdate(userData._id, userData);
    res.status(200).json(userData);
}

// let seedData = async =(req,res)=>{

// }

module.export ={ seedData,updateUserItem, watchesDataGet, deleteUserItem,  UserFavlist, userCheck};