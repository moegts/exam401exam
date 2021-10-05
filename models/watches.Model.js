const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const MONGOOSE_URL = process.env.MONGOOSE_URL;


const WatchesSchema = new mongoose.Schema({
  title: String,
  description: String,
  toUSD: String,
  image: String,
});

const UserSchema = new mongoose.Schema({
    email: String,
    favlist: Array,
  });

const WatchesModel = mongoose.model('user', UserSchema);
const UserModel = mongoose.model('Watche', WatchesSchema);
module.exports = {WatchesModel, UserModel}

