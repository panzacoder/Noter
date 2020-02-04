var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var noteSchema = new Schema({
	'title' : String,
	'body' : String
});

module.exports = mongoose.model('note', noteSchema);
