const {Triangle, Square, Circle} = require('./shapes')

test ('Triangle', () => {
    const shape = new Triangle();
    shape.setColour("blue");
    expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
})

test ('Square', () => {
    const shape = new Square();
    shape.setColour("blue");
    expect(shape.render()).toEqual('<rect x="0" y="0" width="200" height="200" fill = "blue" />');
})

test ('Circle', () => {
    const shape = new Circle();
    shape.setColour("blue");
    expect(shape.render()).toEqual('<circle cx="100" cy="100" r="90" fill = "blue" />');
})