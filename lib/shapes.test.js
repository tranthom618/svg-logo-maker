const {Triangle, Rectangle, Circle} = require('./shapes')

test ('Triangle', () => {
    const shape = new Triangle();
    shape.setColour("blue");
    expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
})
