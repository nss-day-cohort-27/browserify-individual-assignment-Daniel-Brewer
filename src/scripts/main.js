const LocationForm = require("./LocationForm")
const verifyLocation = require("./LocationManager")
const APIManager = require("./APIManager")
// const verifyLocation = require("./Login")


// Render the location form
document.querySelector("#locationForm").innerHTML = LocationForm.renderLocationForm()
// Add an event listener for the add location button
document.querySelector("#addLocationButton").addEventListener("click", () => {
    // Get form field values
    // Create object from them
    const locationToBeAdded = {
        "name": document.querySelector("#name").value,
        "country": document.querySelector("#country").value,
    }
    verifyLocation(locationToBeAdded)
    // APIManager.saveLocation(locationToBeAdded)
    // check to see if location already exists
    // verifyLocation(locationToBeAdded);
})