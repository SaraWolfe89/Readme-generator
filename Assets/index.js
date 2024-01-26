// calling the Node modules so that they work.

const inquirer = require("inquirer");
const fs = require("fs");

// These are the areas to build off of.
// the prompts below will fill out this info. 

const generateMD = ({
  title,
  description,
  motivation, 
  intstalation,
  credits,
  license,
  author,
  whyBuild,
  whyThis,
  learnedWhat,
  author, 
}) =>

// The markdown File template that will be
// created with the answers to the quesations
// inside it. 

  `${title}

## Table of Contents 

- [Installation](#installation)
- [About](#About this project)
- [Credits](#credits)
- [License](#license)

## Installation

${intstalation}

## About this project

- ${description}

- ${motivation}

- ${whyBuild}

- ${whyThis}

- ${learnedWhat}

## Credits

${credits}

## License

${license}

---

## Features

${features}

## How to Contribute

## Contribute and fork

- Create a branch of your own

    git checkout -b <branch name>

- Make some additions or changes to the readme file and stage and commit your work.

    git add readme.md

    git commit -m "make it better"

- Push your changes to the remote branch

    git push origin <branch name>
    
- Back on the forked repository page, you should see a yellow bar at the top with a button to "Compare and Pull Request". Click that button.

   * After clicking that button, take some time to enter in a good description to help the owner of the project decide what it is we are trying to contribute.

   * We will see a list of commit messages and that our branch is "ahead" of the master branch.

- Click "Create Pull Request". The owner of the project will get an email notification that some changes have been made and that a pull request is ready for their review.

### Created by: ${author}`;

// inquirer prompts that go into the template
// asks questions and then inputs the answers in the tmplate. 

inquirer
  .prompt([
    {
      type: "input",
      name: "title",
      message: "What is your projects name?",
    },
    {
      type: "input",
      name: "description",
      message: "What is your project about?",
    },
    {
      type: "input",
      name: "motivation",
      message: "What was your motivation?",
    },
    {
      type: "input",
      name: "whyBuild",
      message: "Why did you build this project?",
    },
    {
      type: "input",
      name: "WhyThis",
      message: "What problem does it solve?",
    },
    {
      type: "input",
      name: "learnedWhat",
      message: "What did you learn?",
    },
    {
      type: "input",
      name: "steps",
      message: "What steps did you take to make this?",
    },
    {
      type: "input",
      name: "credits",
      message: "Do you have any credits you want to mention?",
    },
    {
      type: "input",
      name: "license",
      message: "What license did you use?",
    },
    {
      type: "input",
      name: "features",
      message: "What features does this have?",
    },
    {
        type: "input",
        name: "license",
        message: "What license did you use?",
      },
      {
        type: "input",
        name: "author",
        message: "Who wrote this code?",
      },
  ])

//    Code that allows the inquirer to create
//    the markdown file, and to save the info onto it. 

  .then((answers) => {
    const mdPageContent = generateMD(answers);

    fs.writeFile("README.md", mdPageContent, (err) =>
      err
        ? console.log(err)
        : console.log("Successfully created README.md file!!")
    );
  });