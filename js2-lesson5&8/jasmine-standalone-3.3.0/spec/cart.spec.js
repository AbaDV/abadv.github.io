'use strict';

describe('Корзина товаров - конструктор', () => {
	// Arrange
	let basket = new Basket();

	it("id равен 'basket'", () => {
		expect(basket.id).toEqual("basket");
	});

	it("количество товаров = 0", () => {
		expect(basket.count_goods).toEqual(0);
	});

	it("стоимость = 0", () => {
		expect(basket.amount).toEqual(0);
	});

	it("массив товаров пуст", () => {
		expect(basket.basket_items).toEqual([]);
	});
});

describe('Корзина товаров', () => {
	let basket = new Basket();
	basket.basket_items = [
		{
			"id_product": 123,
			"price": 100
		}
	];

	let getCart = (callback) => {
		$.ajax({
			type: "GET",
			url: "https://api.myjson.com/bins/o74am",
			contentType: 'application/json',
			dataType: "json",
			success: callback
		});
	};

	it("проверка URL AJAX запроса", () => {
		//Создаем функцию-шпион
		spyOn($, 'ajax');
		let callback = jasmine.createSpy();

		//Вызываем функцию с AJAX запросом
		getCart(callback);

		console.log('test ajax call', $.ajax.calls.mostRecent());
		expect($.ajax.calls.mostRecent().args[0]['url']).toEqual('https://api.myjson.com/bins/o74am');

	});

	it("проверка успешности запроса, выполнен callback", function () {
		//вызываем функцию-шпион
		spyOn($, "ajax").and.callFake((options) => {
			options.success();
		});

		let callback = jasmine.createSpy();

		//Вызываем функцию с AJAX запросом
		getCart(callback);
		expect(callback).toHaveBeenCalled();
	});

	it('тест сборки содержимого корзины 1', () => {
		expect(basket.basket_items.length).toBe(1);
	});

	it('тест сборки содержимого корзины 2', () => {
		expect(basket.basket_items[0]).toEqual({
			"id_product": 123,
			"price": 100
		});
	});

	it("значение должно быть определено", () => {
		expect(window.document).toBeDefined()
	});
});

describe('Корзина товаров - добавление товара', function () {
	let basket;
	let id_product = 777;
	let quantity = 100;
	let price = 1000;

	beforeEach(() => {
		basket = new Basket();
		spyOn(basket, 'refresh').and.callFake(() => { });
		basket.add(id_product, quantity, price);
	});

	it('количество позиций в корзине = 1', () => {
		expect(basket.basket_items.length).toBe(1);
	});
	it('количество товаров данной позиции в корзине верно', () => {
		expect(basket.count_goods).toBe(quantity);
	});
	it('стоимость корзины рассчитывается верно', () => {
		expect(basket.amount).toBe(price);
	});
	it('метод refresh() был вызван 1 раз', () => {
		expect(basket.refresh).toHaveBeenCalledTimes(1);
	});
});

describe('Корзина товаров - получение товаров от API', function () {
	let basket;
	let fakeResponse = {
		"result": 1,
		"basket": [
			{ "id_product": 777, "price": 900, "quantity": 10 },
			{ "id_product": 888, "price": 900, "quantity": 10 },
		],
		"amount": 20,
		"full_price": 18000
	};
	let fakeResponseAsJson = JSON.stringify(fakeResponse);
	console.log('fake response: ', fakeResponseAsJson);

	beforeEach(function () {
		jasmine.Ajax.install();

		jasmine.Ajax.stubRequest('https://api.myjson.com/bins/o74am').andReturn({
			"status": 200,
			"contentType": 'text/json',
			"responseText": fakeResponseAsJson
		});

		basket = new Basket();
	});

	afterEach(function () {
		jasmine.Ajax.uninstall();
	});

	it("проверка url и dataType AJAX запроса", () => {
		spyOn($, 'ajax');
		let callback = jasmine.createSpy();

		basket.collectBasketItems(callback);

		let ajaxResultArgs = $.ajax.calls.mostRecent().args[0];
		expect(ajaxResultArgs['url']).toEqual('https://api.myjson.com/bins/o74am');
		expect(ajaxResultArgs['dataType']).toEqual('json');
	});

	it('проверка правильности расчетов свойств Basket после получения ответа от API', () => {
		// Здесь видно, что basket пришел правильный, из mock-ответа от api
		console.log('basket: ', basket);
		// Но здесь почему-то все свойства равны 0...
		expect(basket.basket_items.length).toEqual(2);
		expect(basket.count_goods).toEqual(20);
		expect(basket.amount).toEqual(18000);
	});
});