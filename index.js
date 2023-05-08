const inquirer = require("inquirer");
const fs = require("fs");
const { Triangle, Circle, Square } = require("./lib/shapes");

const questions = [
  {
    type: "input",
    name: "text",
    message: "Enter up to three characters:",
    validate: (input) => input.length <= 3 || "Please enter 3 or fewer characters.",
  },
  {
    type: "input",
    name: "textColor",
    message: "Enter the text color (keyword or hex):",
  },
  {
    type: "list",
    name: "shape",
    message: "Choose a shape:",
    choices: ["circle", "triangle", "square"],
  },
  {
    type: "input",
    name: "shapeColor",
    message: "Enter the shape color (keyword or hex):",
  },
];

inquirer.prompt(questions).then((answers) => {
    const { text, textColor, shape, shapeColor } = answers;
    let shapeInstance;
    let centerX = 150;
    let centerY = 100;
  
    switch (shape) {
      case "circle":
        shapeInstance = new Circle();
        break;
      case "triangle":
        shapeInstance = new Triangle();
        centerX = 153;
        centerY = 140;
        break;
      case "square":
        shapeInstance = new Square();
        break;
    }
  
    shapeInstance.setColor(shapeColor);
    const shapeSVG = shapeInstance.render();
  
    const logoSVG = `
  <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200" viewBox="0 0 300 200">
    ${shapeSVG}
    <text x="${centerX}" y="${centerY}" font-size="72" text-anchor="middle" dominant-baseline="middle" fill="${textColor}">${text}</text>
  </svg>
    `;

  fs.writeFile("logo.svg", logoSVG, (err) => {
    if (err) {
      console.error("Error writing file:", err);
    } else {
      console.log("Generated logo.svg");
    }
  });
});