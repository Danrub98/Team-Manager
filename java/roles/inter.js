const employeeInfo = require('./employee')

class internInfo extends employeeInfo{
    constructor (id, employeeName, email, school, role){
        super(id, employeeName, email);
        this.school = school;
        this.role = role;
        
    }
    
    }




module.exports = internInfo;