'use strict';

class Layout {
    constructor(name, url, locator) {
        this.name = 'Home';
        this.url = 'http://epam.com';
        this.locator = locator;
        this.parent = null;
        this.children = {};
    }

    setParent(parent) {
        if(parent) {
            throw new Error('There is no child like: ' + name); 
        }
        return this.parent = parent;
    }

    addChildren(child){
        if (this.children[child.name]) {
            throw new Error('The child has been already added: ' + child.name);
        }
        this.children[child.name] = child;
        child.setParent(this);
    }

    get(name) {
        if (!name) {
            return element(this.locator);
        }
        if (this.children[name]) {
            return this.children[name].get();
        }
        throw new Error('There is no child like: ' + name);
    }

    load() {
        return this.url;
    }

}

module.exports = Layout;