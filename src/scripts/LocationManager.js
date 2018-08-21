const LocationForm = require("./LocationForm")
const APIManager = require("./APIManager")

const verifyLocation = () => {
    // new location object is tested
    const newLocation = {
        "name": document.querySelector("#name").value,
        "country": document.querySelector("#country").value
    }
    // get all locations from the api
    APIManager.getAllLocations().then(result => {
        locationVerification(result);
    });
    // testing to see if location is in database
    function locationVerification(locations) {
        let currentLocation = locations.find(location => {
            return location.name === newLocation.name;
        });
        // if True
        if (currentLocation) {

            alert("Location already exists in database")
            LocationForm.clearForm()
        }
        else {
            // save to database
                APIManager.saveLocations(newLocation)
                .then(() => {
                    // Clear the form fields
                    LocationForm.clearForm()
                    alert("A new favorite place has been added");

                })
            }


        }
    };


// }
module.exports = verifyLocation