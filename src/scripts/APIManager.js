const APIManager = Object.create(null, {
    saveLocations: {
        value: (entry) => {
            return fetch("http://localhost:8088/locations", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(entry)
            })
                .then(response => response.json())
        }
    },
    //  getting locations array resource
    getAllLocations: {
        value: () => {
            return fetch("http://localhost:8088/locations?_order=desc&_sort=date").then(r => r.json())
        }
    },

    deleteLocation: {
        value: (Id) => {
            return fetch(`http://localhost:8088/locations/${Id}`, {
                method: "DELETE"
            })
                .then(r => r.json())
        }
    }
})

module.exports = APIManager