//interaction with mongodb database using mongoose module
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//set schema for posts
var postSchema = new mongoose.Schema({
	created_by: String, //{ type: Schema.ObjectId, ref: 'User' },		//should be changed to ObjectId, ref "User"
	created_at: {type: Date, default: Date.now},
	text: String
}, { collection: 'posts'});

//set schema for users
var userSchema = new mongoose.Schema({
	username: String,
	password: String, //hash created from password
	created_at: {type: Date, default: Date.now}
}, { collection: 'users'});

//set models from schema
mongoose.model('Post', postSchema);
mongoose.model('User', userSchema);
