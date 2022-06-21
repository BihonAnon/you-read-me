/*
GIVEN a command-line application that accepts user input
WHEN I am prompted for information about my application repository
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
WHEN I enter my project title
THEN this is displayed as the title of the README
WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README
*/

// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
/* License Tags TODO
Apache
[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
MIT
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
IBM
[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)

*/
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your repo?',
    validate: titleInput => {
      if (titleInput) {
        return true;
      } else {
        console.log('you need to enter a title');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'motivation',
    message: 'What was your motivation?',
    validate: motivationInput => {
      if (motivationInput) {
        return true;
      } else {
        console.log('you need to input a motivation');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'whybuild',
    message: 'Why did you build this project? (Note: the answer is not "Because it was a homework assignment.")',
    validate: whybuildInput => {
      if (whybuildInput) {
        return true;
      } else {
        console.log('You need to input a whybuild');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'whatproblem',
    messsage: 'What problem does it solve?',
    validate: whatproblemInput => {
      if(whatproblemInput) {
        return true;
      } else {
        console.log('you need a what problem');
        return false;
      }
    }
  },
  {
  'What did you learn?'
  },
  {
  'What makes your project stand out?'
  },
  {
  'What type of license do u want to use?'
  },
  {
    'What will your Shield read? (From Shield.io)'
  },
  {
    'Who do you owe Credits to?'
  },
  {
    'What kind of usage does your program provide?'
  }
  ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app *when you are ceating your object*
// init();
