const fs = require('fs');
const inquirer = require('inquirer');
const render = require('./roles/render')

const teamMembers = [];

function init (){
    inquirer
        .prompt([
            {
                name: 'employeeName',
                type: 'prompt',
                message: 'What is the Team Member name',
            },
            {
                name: 'id',
                type: 'prompt',
                message: 'What is the Team Member ID',
            },
            {
                name: 'email',
                type: 'prompt',
                message: 'What is the Team Member Email?',
            },
            {
                name: 'role',
                type: 'list',
                message: 'What is the role of the Team Member?',
                choices: ['Manager', 'Intern', 'Engineer'],
            },
            {
            name: 'office',
            when: function(answer) {
                return answer.role === 'Manager'
            },
            type: 'input',
            message: 'What is the office number of the Manager?',
        },
        {
            name: 'github',
            when: function(answer){
                return answer.role === 'Engineer'
            },
            type: 'input',
            message: 'What is the Engenieer Github?'
        },
        {
            name: 'school',
            when: function(answer){
                return answer.role === 'Intern'
            },
            type: 'input',
            message: 'What is the School of the Intern?'
        },
        {
            name:'newMember',
            type: 'confirm',
            message: 'Would you like to add a new Team Member?'
            
        }
        ])
   
    .then((data) => {
        module.exports = init;
        const managerInfo = require("./roles/manager");
        const internInfo = require("./roles/inter");
        const engineerInfo = require('./roles/engineer');
        if (data.role === 'Manager'){
            console.log(data)
            const manager = new managerInfo (data.employeeName, data.id, data.email, data.office, data.role);
            teamMembers.push(manager)
            console.log(teamMembers)
        }
        if (data.role === 'Intern'){
            const intern = new internInfo (data.employeeName, data.id, data.email, data.school, data.role);
            teamMembers.push(intern)
        }
        if (data.role === 'Engineer'){
            const engineer = new engineerInfo (data.employeeName, data.id, data.email, data.github, data.role);
            teamMembers.push(engineer)
        }
        if (data.newMember === true) {
            console.log('trial', teamMembers)
            init();
            console.log (teamMembers)
            console.log('index', data)
            const filename = `index.html`;
            let designTemplate = render(data);
            console.log('design', designTemplate)
        
        
             fs.appendFile(filename, designTemplate, (err) =>
               err ? console.log(err) : console.log('Success!')
        
             );
            
              
        } else {
            
                console.log (teamMembers)
                    console.log('index', data)
                    const filename = `index.html`;
                    let designTemplate = render(data);
                    console.log('design', designTemplate)
                
                
                     fs.appendFile(filename, designTemplate, (err) =>
                       err ? console.log(err) : console.log('Success!')
                
                     );
            
            
        };
             
    });

    }

init();
