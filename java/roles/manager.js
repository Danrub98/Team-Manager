const employeeInfo = require('./employee')

class managerInfo extends employeeInfo{
    constructor (id, employeeName, email, office, role){
        super(id, employeeName, email);
        this.office = office;
        this.role = role;
        
    }
    
    }




module.exports = managerInfo;