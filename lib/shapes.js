class Shape {
    constructor() {
        this.colour = '';
    }
    setColour(colour) {
        this.colour = colour;
    }
}
  
class Triangle extends Shape {
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.colour}" />`
    }
}

class Rectangle extends Shape {
    render() {
        return `<rect x="0" y="0" width="200" height="200" fill = "${this.colour}"/>`
    }
}

class Circle extends Shape {
    render() {
        return `<circle cx="25" cy="75" r="20" fill = "${this.colour}/>`
    }
}

module.exports = {Triangle, Rectangle, Circle};

//<svg width="200" height="200"></svg>


// <svg version="1.1"
//      width="300" height="200"
//      xmlns="http://www.w3.org/2000/svg">

//   <rect width="100%" height="100%" fill="red" />

//   <circle cx="150" cy="100" r="80" fill="green" />

//   <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>

// </svg>