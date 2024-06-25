exports.displayPopulation = function(country) {
    const https = require('https')
    https.get('https://restcountries.com/v3.1/name/' + country + '?fields=population', (resp) => {
        let data = "";
        let pop = 0;
        resp.on('data', chunk => {
            data += chunk
        })
        resp.on('end', pop = (pop) => {
            const population = JSON.parse(data)
            if (population.hasOwnProperty("status")) {
                if ((population["status"]) == 404) {
                    console.log("Name of country not recognised.")
                    return('404')
                }
            }
            else {
                console.log("The population of " + country + " is: " + population[0]['population'])
                return(population[0]['population'])
            }
        });

    })
}