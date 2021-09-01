// function to generate markdown for README

function renderLicenseBadge(license) {
  let licenseString = ' '
  if (license[0] === "MIT") {
    licenseString = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
  };
  if (license[0] === "GNU General Public License 2.0") {
    licenseString = `![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)`
  };
  if (license[0] === "Apache License 2.0") {
     licenseString = `![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`
    };
  if (license[0] === "GNU General Public License 3.0") {
      licenseString = `![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)`
    };
  return licenseString
  };

function renderLicense(license) {
  if (license !== "none") {
    return (
      `## License
      
      This project is licensed under the ${license} license. `
    )
    return ' '
  }
}

function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ## Table of Contents:
  1. [Description](#description) 
  2. [Installation](#installation)
  3. [Usage](#usage)  
  4. [License](#license)  
  5. [Contributing](#contributing)
  6. [Tests](#tests)
  7. [Questions](#questions)

## Description
${data.description} 
## Installation
${data.installation}
## Usage
${data.usage}
${renderLicense(data.license)}
## Contributing
${data.contributing}
## Tests
${data.tests}
## Questions
Github: ${data.github}
Email:  ${data.email}
`;
}

module.exports = generateMarkdown;
