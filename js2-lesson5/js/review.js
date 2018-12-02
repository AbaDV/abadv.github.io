/* описания классов */
function Container() {
    this.id = "";
    this.className = "";
    this.htmlCode = "";
}

Container.prototype.render = function () {
    return this.htmlCode;
}

function Review(productId) {
    Container.call(this);
    this.productId = productId;

	this.review_items = [];
    this.getReviews();
}

Review.prototype = Object.create(Container.prototype);
Review.prototype.constructor = Review;


//Рендеринг
Review.prototype.render = function (recipient) {
    let reviews_div = $('<div/>', {
        text: 'Отзывы'
    });

    let reviews_items_div = $('<div/>', {
        id: this.id + "_items",
        text: this.text
    });

    reviews_items_div.appendTo(reviews_div);
    reviews_div.appendTo(recipient);
}

//GET запрос к серверу, получение данных об отзывах
Review.prototype.getReviews = function () {
    let append_id = "#" + this.productId + "_items";

    //Запрос к серверу на получение
    $.get({
        url: 'http://localhost:8080/review/' + this.productId,
        //получаем доступ к свойствам Review
        context: this,
        success: function (respond) {
            //Создаю div с данными
            let reviews_data = $('<ul/>', {
                id: 'reviews_data',
            })
            reviews_data.append("<b>Отзывы:</b>");
            
            //Выводим данные на экран
            respond.map(item=>{
                this.review_items.push(item);

                let review_data = $('<li/>', {
                    id: item.id,
                    text: item.text
                });
                review_data.appendTo(reviews_data);
			})

            reviews_data.appendTo(append_id);
        },
        dataType: "json"
    });
}

//Добавить отзыв
Review.prototype.add = function (id_product, id_review, text) {
    //Переменная data хранит тело запроса post
    let data = {
        "id_product": id_product,
        "id_review": id_review,
        "id_user": 1,
        "text": text
    }

    //Создаем запрос post 
    $.post({
        //url запроса (см. сваггер или апи)
        url: 'http://localhost:8080/review',
        // перепривязываем контекст, чтобы работать со свойствами класса Review
        context: this,
        //Отправляем заголовки
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        //Тело запроса
        data: JSON.stringify(data),
        //Получаем ответ от сервера и работаем с ним
        success: function (respond) {
            console.log('adding success');            
        },
        error: function (jqXhr, textStatus, errorThrown) {
            console.log(textStatus, jqXhr);
        }
    })
}

//Удалить отзыв
Review.prototype.delete = function (id_product, id_review, text) {
    //Переменная data хранит тело запроса post
    let data = {
        "id_product": id_product,
        "id_review": id_review,
        "id_user": 1,
        "text": text
    }

    //Создаем запрос post 
    $.post({
        //url запроса (см. сваггер или апи)
        url: 'http://localhost:8080/review/delete',
        // перепривязываем контекст, чтобы работать со свойствами класса Review
        context: this,
        //Отправляем заголовки
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        //Тело запроса
        data: JSON.stringify(data),
        //Получаем ответ от сервера и работаем с ним
        success: function (respond) {
            console.log('adding success');            
        },
        error: function (jqXhr, textStatus, errorThrown) {
            console.log(textStatus, jqXhr);
        }
    })
}