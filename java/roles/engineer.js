const employeeInfo = require('./employee')

class engineerInfo extends employeeInfo{
    constructor (id, employeeName, email, github, role){
        super(id, employeeName, email);
        this.github = github;
        this.role = role;
        
    }
    
    }




module.exports = engineerInfo;