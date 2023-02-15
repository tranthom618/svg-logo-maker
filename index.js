// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateSVG = require('./utils/generateSVG.js');

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
        type: "input",
        name: "shape", 
        message: "Choose a shape to be the base of your logo." 
    },

    {
        type: "input",
        name: "shapeColour", 
        message: "Pick a colour for the shape by typing it's name or it's hexadecimal number." 
    }
];