// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const MarkDown = require('./utils/generateMarkdown')
const fs = require('fs')

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
console.log(questions);


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return inquirer.prompt(questions)
        const mark = MarkDown.generateReadme(answers)
        fs.writeFile('README.md', mark, function(err) {
            if (err) {
                console.log('File not saved', err);
            } else {
                console.log('Success! README file created');
            }
        })
        .catch((error) => {
            console.log(error)
        });
}

writeToFile();

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
