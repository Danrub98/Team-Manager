


function render(data) {
      console.log('render', data)
      const {employeeName, id, email, role, office, github, school} = data
      function renderRole(role) {
        if(role === 'Manager') {
          return`Office number: ${office}`
        }
        else if (role === 'Engineer') {
          return`Github account: ${github}`
        }
        else if (role === 'Intern'){
          return`School name: ${school}`
        }
        else {
          return''
        }
      }
      return`
      <div class="card" style="width: 18rem;">
  <div class="card-header">
    ${employeeName}, <br> ${role}
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Employee ID: ${id}</li>
    <li class="list-group-item">         <a class="btn" href="mailto:${email}">Contact:</a> ${email}</li>
    <li class="list-group-item">${renderRole(role)}</li>
  </ul>
</div>
         `;
     };
   
     module.exports = render;
    