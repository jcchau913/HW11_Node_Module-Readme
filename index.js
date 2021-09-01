const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    { 
        type: "input",
        message: "What is the title for your project?",
        name: "title",  
           },
      { 
        type: "input",
        message: "Describe your project?",
        name: "description",  
           },
      {
        type: "input",
        message: "How do you install your project?",
        name: "installation",
     },
      {
          type: "input",
          message: "How do you use your project?",
          name: "usage",
      },
      {
          type: "checkbox",
          message: "What License did you use for this repository?",
          choices: ["MIT", "GNU General Public License 2.0", "Apache License 2.0", "GNU General Public License 3.0"],
          name: "license",
      },
      {
          type: "input",
          message: "How can people contribute to your project?",
          name: "contributing",
      },
     {
          type: "input",
          message: "How do people update the tests for your project?",
          name: "tests"
      },
      {
          type: "input",
          message: "What is your GitHub username?",
          name: "github"
      },
      {
          type: "input",
          message: "What is your email address where users and contributors can send questions?",
          name: "email"
      }
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(path.join (process.cwd(), fileName), data);
}


// function to initialize program
function init() {
    inquirer.prompt(questions)
    .then((inquirerResponses) => {
      console.log("Generating Readme...");
      writeToFile("README.md", generateMarkdown({...inquirerResponses}));
      });    
}

// function call to initialize program
init();

