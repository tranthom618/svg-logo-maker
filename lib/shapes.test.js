const {Triangle, Square, Circle} = require('./shapes')

// Triangle Test
test ('Triangle', () => {
    const shape = new Triangle();
    shape.setColour("blue");
    shape.setTitle("ABC");
    shape.setTextColour("red");
    expect(shape.render()).toEqual('<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg"> <polygon points="150, 18 244, 182 56, 182" fill="blue" /> <text x="150" y="150" font-size="50" text-anchor="middle" fill="red">ABC</text></svg>');
})

// Square Test
test ('Square', () => {
    const shape = new Square();
    shape.setColour("yellow");
    shape.setTitle("DEF");
    shape.setTextColour("black");
    expect(shape.render()).toEqual('<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg"> <rect x="0" y="0" width="200" height="200" fill = "yellow"/> <text x="100" y="125" font-size="50" text-anchor="middle" fill="black">DEF</text></svg>');
})

// Circle Test
test ('Circle', () => {
    const shape = new Circle();
    shape.setColour("green");
    shape.setTitle("GHI");
    shape.setTextColour("white");
    expect(shape.render()).toEqual('<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg"> <circle cx="100" cy="100" r="90" fill = "green"/> <text x="100" y="120" font-size="50" text-anchor="middle" fill="white">GHI</text></svg>');
})