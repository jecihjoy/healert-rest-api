const screeningRepositories = require('../repositories/screening');

function savePersonScreening() {
    return screeningRepositories.savePersonScreening()
}

var screeningService = {
    savePersonScreening : savePersonScreening
} 

module.exports = screeningService;