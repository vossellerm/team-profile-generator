const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const generateTeam = (name, id, email, github, school, officeNumber) => {
  `  <!DOCTYPE html>
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
      <div class="col">
        <div class="card" style="width: 18rem">
          <div class="card-body p-3 mb-2 bg-primary text-white">
            <h4 class="card-title">Jared</h4>
            <h6 class="card-title">Manager</h6>
          </div>
          <ul class="list-group ms-4 me-4 mt-4 mb-4">
            <li class="list-group-item">ID: 1</li>
            <li class="list-group-item">
              Email: <a href="mailto:test@email.com">test@email.com</a>
            </li>
            <li class="list-group-item">Office number: 1</li>
          </ul>
        </div>
      </div>
      <div class="col">
        <div class="card" style="width: 18rem">
          <div class="card-body p-3 mb-2 bg-primary text-white">
            <h4 class="card-title">Jared</h4>
            <h6 class="card-title">Manager</h6>
          </div>
          <ul class="list-group ms-4 me-4 mt-4 mb-4">
            <li class="list-group-item">ID: 1</li>
            <li class="list-group-item">
              Email: <a href="mailto:test@email.com">test@email.com</a>
            </li>
            <li class="list-group-item">
              GitHub: <a href="#" target="_blank">github</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="col">
        <div class="card" style="width: 18rem">
          <div class="card-body p-3 mb-2 bg-primary text-white">
            <h4 class="card-title">Jared</h4>
            <h6 class="card-title">Manager</h6>
          </div>
          <ul class="list-group ms-4 me-4 mt-4 mb-4">
            <li class="list-group-item">ID: 1</li>
            <li class="list-group-item">
              Email: <a href="mailto:test@email.com">test@email.com</a>
            </li>
            <li class="list-group-item">
              GitHub: <a href="#" target="_blank">github</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="col">
        <div class="card" style="width: 18rem">
          <div class="card-body p-3 mb-2 bg-primary text-white">
            <h4 class="card-title">Jared</h4>
            <h6 class="card-title">Manager</h6>
          </div>
          <ul class="list-group ms-4 me-4 mt-4 mb-4">
            <li class="list-group-item">ID: 1</li>
            <li class="list-group-item">
              Email: <a href="mailto:test@email.com">test@email.com</a>
            </li>
            <li class="list-group-item">
              GitHub: <a href="#" target="_blank">github</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="col">
        <div class="card" style="width: 18rem">
          <div class="card-body p-3 mb-2 bg-primary text-white">
            <h4 class="card-title">Jared</h4>
            <h6 class="card-title">Manager</h6>
          </div>
          <ul class="list-group ms-4 me-4 mt-4 mb-4">
            <li class="list-group-item">ID: 1</li>
            <li class="list-group-item">
              Email: <a href="mailto:test@email.com">test@email.com</a>
            </li>
            <li class="list-group-item">
              GitHub: <a href="#" target="_blank">github</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </body>
</html>`;
};
