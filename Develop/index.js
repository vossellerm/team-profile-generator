const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const fs = require("fs");
const getSite = require("./src/generateTeam");
const inquirer = require("inquirer");

const employeeArray = [];

const init = () => {
  inquirer
    .prompt([
      {
        name: "position",
        type: "list",
        message: "What position would you like to add?",
        choices: ["Manager", "Engineer", "Intern"],
      },
    ])
    .then((result) => {
      if (result.position === "Manager") {
        inquirer
          .prompt([
            {
              name: "name",
              type: "input",
              message: "What is the manager's name?",
            },
            {
              name: "id",
              type: "input",
              message: "What is the manager's ID?",
            },
            {
              name: "email",
              type: "input",
              message: "What is the manager's email?",
            },
            {
              name: "officeNumber",
              type: "input",
              message: "What is the manager's office number?",
            },
          ])
          .then((managerResult) => {
            const newManager = new Manager(
              managerResult.name,
              managerResult.id,
              managerResult.email,
              managerResult.officeNumber
            );
            employeeArray.push(newManager);
            inquirer
              .prompt([
                {
                  name: "doneCheck",
                  type: "list",
                  message: "Are you done adding team members?",
                  choices: ["Yes", "No"],
                },
              ])
              .then((ifDone) => {
                if (ifDone.doneCheck === "Yes") {
                  const employeeCards = getSite(employeeArray);
                  fs.writeFile(`./dist/Site.html`, employeeCards, (err) =>
                    err
                      ? console.log("Site Generation failed.")
                      : console.log("Site Created!")
                  );
                } else {
                  init();
                }
              });
          });
      } else if (result.position === "Engineer") {
        inquirer
          .prompt([
            {
              name: "engineerName",
              type: "input",
              message: "What is the engineer's name?",
            },
            {
              name: "engineerID",
              type: "input",
              message: "What is the engineer's ID?",
            },
            {
              name: "engineerEmail",
              type: "input",
              message: "What is the engineer's email?",
            },
            {
              name: "github",
              type: "input",
              message: "What is the engineer's github?",
            },
          ])
          .then((engineerResult) => {
            const newEngineer = new Engineer(
              engineerResult.engineerName,
              engineerResult.engineerID,
              engineerResult.engineerEmail,
              engineerResult.github
            );
            employeeArray.push(newEngineer);
            inquirer
              .prompt([
                {
                  name: "doneCheck",
                  type: "list",
                  message: "Are you done adding team members?",
                  choices: ["Yes", "No"],
                },
              ])
              .then((ifDone) => {
                if (ifDone.doneCheck === "Yes") {
                  const employeeCards = getSite(employeeArray);
                  fs.writeFile(`./dist/Site.html`, employeeCards, (err) =>
                    err
                      ? console.log("Site Generation failed.")
                      : console.log("Site Created!")
                  );
                } else {
                  init();
                }
              });
          });
      } else {
        inquirer
          .prompt([
            {
              name: "name",
              type: "input",
              message: "What is the intern's name?",
            },
            {
              name: "id",
              type: "input",
              message: "What is the intern's ID?",
            },
            {
              name: "email",
              type: "input",
              message: "What is the intern's email?",
            },
            {
              name: "school",
              type: "input",
              message: "What is the intern's school?",
            },
          ])
          .then((internResult) => {
            const newIntern = new Intern(
              internResult.name,
              internResult.id,
              internResult.email,
              internResult.school
            );
            employeeArray.push(newIntern);
            inquirer
              .prompt([
                {
                  name: "doneCheck",
                  type: "list",
                  message: "Are you done adding team members?",
                  choices: ["Yes", "No"],
                },
              ])
              .then((ifDone) => {
                if (ifDone.doneCheck === "Yes") {
                  const employeeCards = getSite(employeeArray);
                  fs.writeFile(`./dist/team.html`, employeeCards, (err) =>
                    err
                      ? console.log("Site Generation failed.")
                      : console.log("Site Created!")
                  );
                } else {
                  init();
                }
              });
          });
      }
    });
};

init();
module.exports = employeeArray;
