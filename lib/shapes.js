// Constructor class - Sets the base for shape colour, title, and textColour
class Shape {
    constructor() {
        this.colour = '';
        this.title = '';
        this.textColour = '';
    }
    setColour(colour) {
        this.colour = colour;
    }
    setTitle(title) {
        this.title = title;
    }
    setTextColour(textColour) {
        this.textColour = textColour;
    }
}
  
// Triangle class
class Triangle extends Shape {
    render() {
        return `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg"> <polygon points="150, 18 244, 182 56, 182" fill="${this.colour}" /> <text x="150" y="150" font-size="50" text-anchor="middle" fill="${this.textColour}">${this.title}</text></svg>`
    }
}

// Square Class
class Square extends Shape {
    render() {
        return `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg"> <rect x="0" y="0" width="200" height="200" fill = "${this.colour}"/> <text x="100" y="125" font-size="50" text-anchor="middle" fill="${this.textColour}">${this.title}</text></svg>`
    }
}

// Circle Class
class Circle extends Shape {
    render() {
        return `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg"> <circle cx="100" cy="100" r="90" fill = "${this.colour}"/> <text x="100" y="125" font-size="50" text-anchor="middle" fill="${this.textColour}">${this.title}</text></svg>`
    }
}

// Exports classes
module.exports = {Triangle, Square, Circle};