const LocationForm = require("./LocationForm")
const verifyLocation = require("./LocationManager")
const printToDOM = require("./PrintToDom")
const APIManager = require("./APIManager")



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

    document.querySelector("#deleteLocationButton").addEventListener("click", () => {
        // Get form field values
        // Create object from them
        const locationToBeDeleted = {
            "name": document.querySelector("#name").value,
            "country": document.querySelector("#country").value,
        }
        APIManager.deleteLocation(locationToBeDeleted)
    })
    printToDOM()
})