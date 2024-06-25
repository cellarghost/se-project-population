exports.getCountryList = function() {

    const readlineSync = require('readline-sync')
    const https = require('https')
    const displayCountries = require('./displayCountries')


    var continent = readlineSync.question('Enter the name of a continent: ')
    https.get('https://restcountries.com/v3.1/region/' + continent + '?fields=name', resp => {
        let data = "";
        resp.on('data', chunk => {
            data += chunk;
        })
    
        resp.on('end', () => {
            displayCountries.displayCountries(data)
        });
    })
}