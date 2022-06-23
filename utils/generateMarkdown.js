var renderLicense
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(data) {
//   if(data.license === 'IPL'){
//     renderLicense = '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)'
//     } ifelse (data.license === 'MIT'){
//       renderLicense = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
//     } ifelse (data.license === 'Apache') 
//       renderLicense = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
//     }else{
//       renderLicense = ''
//     }
// }
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  ## Licensing: ${data.license}

  ## Table of Contents
  - [Description](#description)
  - [Features](#features)
  - [Usage](#usage)
  - [Contribution](#contribution)

  ## Description
  
  ### Motivation
  ${data.motivation}

  ### Why did you build this?
  ${data.whybuild}

  ### Solves What Problem
  ${data.whatproblem}

  ### Learning Outcomes
  ${data.whatlearn}

  ## Features
  ${data.features}

  ## Usage
  ${data.usage}

  ## Credits
  ${data.credits}`;
}

module.exports = generateMarkdown;
