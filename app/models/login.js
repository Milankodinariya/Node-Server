var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

let LoginSchema   = new Schema({
	/*firstName: String,
	lastName: String,*/
	email: String,
	password: String,

});

module.exports = mongoose.model('Login', LoginSchema);
