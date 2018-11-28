function getCity(cityPartName) {
    let cities = new Array();
    $.ajax({
        url: 'https://my-json-server.typicode.com/AbaDV/fake-json-server/cities',
        async: false,
        success: function (data) {
            // let foundItems = data.filter(e => e.indexOf(cityPartName) == 0);
            // cities = foundItems;

            let foundCities = new Array();
            for (let i = 0; i < data.length; i++) {
                const e = data[i];
                if (e.indexOf(cityPartName) == 0) {
                    foundCities.push(e);
                }
            }
            cities = foundCities;
        }
    });
    return cities;
}

$('input[name=city-input]').autocomplete({
    classes: {
        "ui-autocomplete": "highlight"
    },
    source: function (request, response) {
        let cityPartName = request.term;
        let foundedCity = getCity(cityPartName);
        response(foundedCity);
    }
});