$(document).ready(function(){
	let basket = new Basket();
	basket.render('#basket_wrapper');
	
	$('.buyme').on('click', function(){
		//Поиск id товара
		let id_product =parseInt($(this).attr('id').split('_')[1]);		
		//Количество добавляемого товара
		let quantity = 1;
		//Поиск цены товара
		let price = parseInt($(this).parent().find('.product-price').text());

		//Нашли данные о товаре и добавляем в корзину
		basket.add(id_product, quantity, price);

	})

	$('.delete').on('click', function(){
		//Поиск id товара
		let id_product =parseInt($(this).attr('id').split('_')[1]);		
		//Количество удаляемого товара
		let quantity = 1;
		//Поиск цены товара
		let price = parseInt($(this).parent().find('.product-price').text());

		//Нашли данные о товаре и удаляем из корзины
		basket.remove(id_product, quantity, price);

	})
});