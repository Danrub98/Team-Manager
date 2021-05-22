const employeeInfo = require('../index')

class internInfo extends employeeInfo{
    constructor (id, employeeName, email, office, role){
        super(id, employeeName, email, office, role)
    }
}


module.exports = internInfo;