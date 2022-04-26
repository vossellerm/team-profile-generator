const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const fs = require("fs");
const generateTeam = require("./src/generateTeam");
const inquirer = require("inquirer");

inquirer
  .prompt([
    {
      type: "input",
      name: "name",
      message: "What is the team manager's name?",
    },
    {
      type: "input",
      name: "id",
      message: "What is the team manager's employee ID?",
    },
    {
      type: "input",
      name: "email",
      message: "What is the team manager's email address?",
    },
    {
      type: "input",
      name: "officeNumber",
      message: "What is the team manager's office number?",
    },
    {
      type: "list",
      name: "nextStep",
      message: "What would you like to do next?",
      choices: ["Add an engineer", "Add an intern", "Finish Building"],
    },
  ])
  .then((answers) => {
    if (answers.nextStep === "Finish Building") {
      // Write HTML file with answers
      console.log("done");
    } else if (answers.nextStep === "Add an engineer") {
      // more prompts
      inquirer.prompt([
        {
          type: "input",
          name: "name",
          message: "What is the engineer's name?",
        },
        {
          type: "input",
          name: "id",
          message: "What is the engineer's employee ID?",
        },
        {
          type: "input",
          name: "email",
          message: "What is the engineer's email address?",
        },
        {
          type: "input",
          name: "github",
          message: "What is the engineer's GitHub username?",
        },
        {
          type: "list",
          name: "nextStep",
          message: "What would you like to do next?",
          choices: ["Add an engineer", "Add an intern", "Finish Building"],
        },
      ]);
    } else if (answers.nextStep === "Add an intern") {
      // more prompts
      inquirer.prompt([
        {
          type: "input",
          name: "name",
          message: "What is the interns's name?",
        },
        {
          type: "input",
          name: "id",
          message: "What is the interns's employee ID?",
        },
        {
          type: "input",
          name: "email",
          message: "What is the interns's email address?",
        },
        {
          type: "input",
          name: "school",
          message: "Where does the intern go to school?",
        },
        {
          type: "list",
          name: "nextStep",
          message: "What would you like to do next?",
          choices: ["Add an engineer", "Add an intern", "Finish Building"],
        },
      ]);
    }
  });
//   .then(new Promise =((resolve, reject) => {
//       if (choices[2])
//   }))
//   .then((data) => {
//     console.log(data);
//   });
