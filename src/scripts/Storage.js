const APIManager = require("./APIManager")

const storage = Object.create(null, {
  loadData: {
    enumerable: true,
    writable: true,
    value: function () {
      const databaseString = sessionStorage.getItem("currentLocation")
      // Return user ID as integer
      return parseInt(JSON.parse(databaseString))
    }
  },
  saveData: {
    enumerable: true,
    writable: true,
    value: function (dataObject) {
      // Use name to find object in /users
      APIManager.getAllObjects("location").then((item) => {
        const locationObject = item.find((location) => {
          return location.name === dataObject.name
        })
        const stringData = JSON.stringify(locationObject.id)
        sessionStorage.setItem("currentLocation", stringData)
      })
    }
  }
})

module.exports = storage