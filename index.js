// Packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require("fs");

// Array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "Describe what your project does.",
  },
  {
    type: "input",
    name: "installation",
    message: "How do we install your project?",
  },
  {
    type: "input",
    name: "usage",
    message: "Describe how to use your project.",
  },
  {
    type: "input",
    name: "contributing",
    message: "Any other contributers to your project?",
  },
  {
    type: "input",
    name: "contact",
    message: "For further questions (enter your email)",
  },
  {
    type: "input",
    name: "github",
    message: "What is your GitHub username?",
  },
  {
    type: "list",
    name: "license",
    message: "What license is being used?",
    choices: ["None", "MIT", "Apache", "ISC"]
  },
];

// Creates a README file and logs to the console success or error
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, function (err) {
    err
      ? console.log("File not saved", err)
      : console.log("Success! README file created");
  });
}

// A function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then((answers) => {
      writeToFile("README.md", generateMarkdown(answers));
    })
    .catch((error) => {
      console.log(error);
    });
}

// Function call to initialize app
init();
