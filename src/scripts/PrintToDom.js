const APIManager = require("./APIManager")

APIManager.getAllLocations().then(result => {
    printToDOM(result);
});


function printToDOM(locations) {
    console.log(locations)
    let locationObject = ""
    for (let index = 0; index < locations.length; index++) {
        locationObject = locations[index];
        listOfPlaces.innerHTML += locationObject.name + "," + " " + locationObject.country + "<br>";
        
    }
}

module.exports = printToDOM