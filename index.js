// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const SVG = require('./lib/SVG.js');
const {Triangle, Rectangle, Circle} = require('./lib/shapes')

// An array of questions for user input
const questions = [
    {   type: "input",
        name: "title", 
        message: "Pick 3 characters that'll be the shorthand of your application or company name." 
    },

    {
        type: "input",
        name: "textColour", 
        message: "Pick a colour for the text by typing it's name or it's hexadecimal number." 
    },

    {
        type: "list",
        name: "shape", 
        message: "Choose a shape to be the base of your logo." ,
        choices: ['Circle', 'Triangle', 'Square']
    },

    {
        type: "input",
        name: "shapeColour", 
        message: "Pick a colour for the shape by typing it's name or it's hexadecimal number." 
    }
];

// Function to initialize app
function init() {

    // Inquirer prompt, using the questions array
    inquirer.prompt(questions)

    // Then after inquirer is executed, takes the answers and passes them to the generateSVG function that is located in utils/generateSVG.js
    .then((answers) => {
        // const svgContent = generateSVG(answers);
        
        let shape;
        
        if (answers.shape === 'Triangle') {
            shape = new Triangle();
        }

        shape.setColour(answers.shapeColour);

        const newSVG = new SVG();
        newSVG.setTitle(answers.title, answers.textColour);

        newSVG.setShape(shape);
        console.log("=======");
        console.log(newSVG);
        console.log(shape);
        console.log("=======");

        // File System for writing the 'logo.svg' file name, then svgContent that is returned from generateSVG. Also provides error feedback in case there are issues.
        return fs.writeFile('logo.svg', newSVG.render(), (err) =>
        err ? console.log(err) : console.log('Generated logo.svg')
        );
    });
}

// Function call to initialize app
init();