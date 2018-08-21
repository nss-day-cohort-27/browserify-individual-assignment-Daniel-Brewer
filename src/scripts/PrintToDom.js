const APIManager = require("./APIManager")

APIManager.getAllLocations().then(result => {
    printToDOM(result);
});


function printToDOM(locations) {
    console.log(locations)
    const printableLocations = JSON.stringify(locations, null, 4);
    listOfPlaces.innerHTML = printableLocations;
}

module.exports = printToDOM