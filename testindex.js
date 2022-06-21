var inquirer = require('inquirer');
inquirer
  .prompt([
    {
    name: 'favRep',
    message: 'what is your fav rep?'
    }
    /* Pass your questions in here */
  ])
  .then((answers) => {
    console.info('answer:', answers.favRep);
  })
  .catch((error) => {
    if (error.isTtyError) {
      return 'err1'
    } else {
      return 'err2';
    }
  });
  // INQUIRER WORKS