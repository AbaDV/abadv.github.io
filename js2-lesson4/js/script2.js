//Задание 2
//В форму обратной связи добавить возможность выбора города обращения. Сам список должен загружаться после загрузки страницы через AJAX.

//Задание 3*
//Список из п.2 превратить в текстовое поле-автокомплит.
//Если пользователь ввёл 3 и более символов, нужно подгрузить список городов и показать подходящие по вводу.
//При клике на подходящий город, ввести его полное название в текстовое поле.

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