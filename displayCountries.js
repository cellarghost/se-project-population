exports.displayCountries = function(data) {

    const getCountry = require('./getCountries')


    let names = JSON.parse(data)
    if (names.hasOwnProperty("status")) {
        if ((names["status"]) == 404) {
            console.log("Name of continent/region not recognised.")
        }
    } else {
        for (var country in names) {
            console.log(names[country].name['common']);
        }
        getCountry.getCountry()
    }
    
}