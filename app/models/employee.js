var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

let EmployeeSchema   = new Schema({
        employeeId: String,
        employeeName: String,
        dateOfJoin:  String,
        designation: Number,

});

module.exports = mongoose.model('Employee', EmployeeSchema);
