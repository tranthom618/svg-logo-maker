class SVG {
    contructor() {
        this.title = '';
        this.shape = '';
    }

    render() {
        return `<svg width="200" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">${this.shape}${this.title}</svg>`
    }

    setTitle(title, textColour) {
        this.title = title;
        this.textColour = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColour}">${title}</text>`;
    }
    
    setShape(shape) {
        this.shape = shape.render();
    }
}

module.exports = SVG;