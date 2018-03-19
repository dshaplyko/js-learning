'use strict';

class Elements {
    constructor(name, locator) {
        this.name = name;
        this.locator = locator;
        this.parent = null;
        this.children = null;
    }

    setParent(parent){
        this.parent = parent;
    }

    all(locator) {
        return element.all(this.locator);
    }

    get(name) {
        return element(name)['_locator'];
    }
}

module.exports = Elements;