const APIManager = require("./APIManager")

APIManager.getAllLocations().then(result => {
    printToDOM(result);
});


function printToDOM(locations) {
    console.log(locations)
    let locationObject = ""
    for (let i = 0; i < locations.length; i++) {
        locationObject = locations[i];
        listOfPlaces.innerHTML += locationObject.name + "," + " " + locationObject.country + "<br>";

        
    }
}

module.exports = printToDOM