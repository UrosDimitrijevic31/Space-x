import { Header } from "./header";

class Dashboard{
    constructor(){
        this.node = document.createElement('dashboard');
        this.header = new Header();
        this.node.appendChild(this.header.getNode());
    }

    getNode(){
        return this.node;
    }
}

export {
    Dashboard
}