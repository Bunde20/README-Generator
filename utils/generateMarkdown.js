//Creates a license badge based on which license is selected by the user
function renderLicenseBadge(data) {
  if(data.license === "None") {
    return "" //Returns empty string if user selects none
  } else if(data.license === "MIT") {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  } else if(data.license === "Apache") {
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  } else if(data.license === "ISC") {
    return `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`
  }
}

// Returns the license link on the page if one is selected, if none, it will return an empty string
function renderLicenseLink(data) {
  if(data.license !== "None") {
    return `- [License](#License)`
  } else {
    return ""
  }
}

// Creates a license section with link on the page, if there is no license, it will return an empty string
function renderLicenseSection(data) {
  if(data.license !== "None"){
    return `## License
Licensed with the ${renderLicenseBadge(data)} license`
  } else {
    return ''
  }
}

// Creates a function to generate a markdown for the README
function generateMarkdown(data) {
  return `# ${data.title}

## Table of Contents
- [Project Description](#description)
- [Usage](#usage)
- [Contributing](#contributing)
- [Installation](#installation)
- [Question](#questions)
${renderLicenseLink(data)}

## Description
${data.description}

## Usage
${data.usage}

## Installation
${data.installation}

## Contributing
${data.contributing}

## Questions
Feel free to email me at: ${data.contact}
Here is my GitHub Profile: https://github.com/${data.github}

${renderLicenseSection(data)}
`;
}

module.exports = generateMarkdown;
