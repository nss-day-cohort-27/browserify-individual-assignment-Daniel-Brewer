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
    // verifyUser(result);
    function locationVerification(locations) {
        let currentLocation = locations.find(location => {
            return location.name === newLocation.name;
        });
        
        if (currentLocation) {

            alert("Location already exists in database")
            //take them to a new view, load landing page
            // landing()
        }
        else {

                APIManager.saveLocations(newLocation)
                .then(() => {
                    // Clear the form fields
                    LocationForm.clearForm()
                    alert("A new favorite place has been added");
                    //take them to a new view, load landing page
                    // landing()
                })
            }


        }
    };


// }
module.exports = verifyLocation