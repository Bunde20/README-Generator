// TODO: Include packages needed for this application
const inquierer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?"
    },
    {
        type: "input",
        name: "description",
        message: "Describe what your project does."  
    },
    {
        type: "input",
        name: "installation",
        message: "How do we install your project?"
    },
    {
        type: "input",
        name: "usage",
        message: "Describe how to use your project."
    },
    {
        type: "input",
        name: "contributing",
        message: "Any other contributers to your project?"
    },
    {
        type: "input",
        name: "contact",
        message: "For questions (enter your email)"
    },
    {
        type: "input",
        name: "contact",
        message: "For questions (enter your github username)"
    },
    {
        type: "input",
        name: "license",
        message: "What license is being used?"
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
