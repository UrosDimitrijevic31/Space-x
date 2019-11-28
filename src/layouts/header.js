import { Info } from "../components/info";
import { getCompanyInfo, launchesInfo } from "../utilities/space-x-service";
import { Launches } from "../components/lanuches";

class Header{
    constructor(){
        this.node = document.createElement('header');
        this.info = null;
        this.launchesInfo = null;

        getCompanyInfo().then(data => {
            this.info = new Info(data);
            this.node.appendChild(this.info.getNode());
        });

        launchesInfo().then(data => {
            data = data.filter(element => {
                return element.links.mission_patch !=null; //zato sto neke slike nemaju
            })
            data.forEach(element=> {
                this.launchesInfo = new Launches(element);
                this.node.appendChild(this.launchesInfo.getNode());
            });
            
        })
    }

    getNode(){
        return this.node;
    }
}

export {
    Header
}