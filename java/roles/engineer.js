const employeeInfo = require('../index')

class engineerInfo extends employeeInfo{
    constructor (id, employeeName, email, office, role){
        super(id, employeeName, email, office, role)
    }
}


module.exports = engineerInfo;