const employeeInfo = require('../index')

class managerInfo extends employeeInfo{
    constructor (id, employeeName, email, office, role){
        super(id, employeeName, email, office, role)
    }
}


module.exports = managerInfo;