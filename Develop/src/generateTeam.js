const getSite = (employeeArray) => {
  return `  <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
      crossorigin="anonymous"
    />

    <title>My Team</title>
  </head>
  <body>
    <h3 class="p-3 mb-2 bg-danger text-white text-center pt-5 pb-5">My Team</h3>
    <div class="row row-cols-1 row-cols-md-4 g-4 mx-auto">
      ${generateTeam(employeeArray)}
    </div>
  </body>
</html>`;
};
function generateTeam(employeeArray) {
  function generateManager(manager) {
    return `  <div class="col">
    <div class="card" style="width: 18rem">
         <div class="card-body p-3 mb-2 bg-primary text-white">
          <h5 class="card-title">Manager-</h5>
          <h6 class="card-title">${manager.name}</h6>
          </div>
          <ul class="list-group ms-4 me-4 mt-4 mb-4">
           <li class="list-group-item">ID: ${manager.id}</li>
            <li class="list-group-item">
              Email: <a href="mailto:${manager.email}">${manager.email}</a>
            </li>
            <li class="list-group-item">Office number: ${manager.officeNumber}</li>
          </ul>
        </div>
      </div>`;
  }
  function generateEngineer(engineer) {
    return `  <div class="col">
    <div class="card" style="width: 18rem">
           <div class="card-body p-3 mb-2 bg-primary text-white">
          <h5 class="card-title">Engineer-</h5>
          <h6 class="card-title">${engineer.name}</h6>
          </div>
          <ul class="list-group ms-4 me-4 mt-4 mb-4">
           <li class="list-group-item">ID: ${engineer.id}</li>
            <li class="list-group-item">
              Email: <a href="mailto:${engineer.email}">${engineer.email}</a>
            </li>
            <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.github}" target="_blank">${engineer.github}</a></li>
          </ul>
          </div>
        </div>`;
  }
  function generateIntern(intern) {
    return `  <div class="col">
    <div class="card" style="width: 18rem">
           <div class="card-body p-3 mb-2 bg-primary text-white">
            <h5 class="card-title">Intern-</h5>
            <h6 class="card-title">${intern.name}</h6>
           </div>
          <ul class="list-group ms-4 me-4 mt-4 mb-4">
           <li class="list-group-item">ID: ${intern.id}</li>
            <li class="list-group-item">
              Email: <a href="mailto:${intern.email}">${intern.email}</a>
            </li>
            <li class="list-group-item">School: ${intern.school}</li>
          </ul>
          </div>
        </div>`;
  }
  const document = [];
  for (let i = 0; i < employeeArray.length; i++) {
    if (employeeArray[i].getRole() === "Manager") {
      document.push(generateManager(employeeArray[i]));
    } else if (employeeArray[i].getRole() === "Engineer") {
      document.push(generateEngineer(employeeArray[i]));
    } else {
      document.push(generateIntern(employeeArray[i]));
    }
  }
  return document.join(" ");
}
module.exports = getSite;
