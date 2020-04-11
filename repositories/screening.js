const connection = require('../config/dbConnection');

function savePersonScreening() {

    var query = 'insert into ';
    
    return connection.executeQuery(query)
        .then((results) => {
            return results;
        }).catch((err) => {
            throw err;
    });

}

var screeningRepositories = {
    savePersonScreening : savePersonScreening
} 

module.exports = screeningRepositories;