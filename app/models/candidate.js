var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var CandidateSchema   = new Schema({
            title: String,
            length: String,
            category: String,
            author: String,

});

module.exports = mongoose.model('Candidate', CandidateSchema);

