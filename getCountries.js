exports.getCountry = function() {
    const displayPopulation = require('./displayPopulation')
    const readlineSync = require('readline-sync')
    
    var country = readlineSync.question('Enter the name of a country: ')
    displayPopulation.displayPopulation(country)
}