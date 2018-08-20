console.log("i am here");
const LocationForm = Object.create(null, {
    clearForm: {
        value: () => {
            document.querySelector("#name").value = ""
            document.querySelector("#country").value = ""
        }
    },
    renderLocationForm: {
        value: () => {
            console.log("I got here");
            return `
                <fieldset class="locationForm">
                    <label for="name">name</label>
                    <input required type="text" id="name" placeholder="name">
                </fieldset>
                <fieldset class="locationForm">
                    <label for="country">country</label>
                    <input required type="text" id="country" placeholder="country">    
                </fieldset>
                <button id="addLocationButton">Add Location</button>
                <button id="deleteLocationButton">Delete Location</button>
            `
        }
    }

})

module.exports = LocationForm