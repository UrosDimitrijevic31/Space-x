var URL = "https://api.spacexdata.com"; //dobra praksa
var VERSION = "/v3";



function getCompanyInfo(){
    return fetch(`${URL}${VERSION}/info`)
    .then(response => response.json(), error => console.error(error));
}


function launchesInfo(){
    return fetch(`${URL}${VERSION}/launches`)
    .then(response => response.json(), error => console.error(error));
}

export {
    getCompanyInfo, launchesInfo
}